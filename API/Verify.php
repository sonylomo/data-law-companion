<?php
include __DIR__ . './config/Authentication.php';
include_once __DIR__ . './config/Database.php';

$databaseService = new DatabaseService();
$conn = $databaseService->getConnection();
$authService = new AuthenticationService();

$table_name = $query = $stmt = $jwt = '';
$result['error'] = false;

if (!isset($_GET['token']) || (strlen($_COOKIE['token']) < 1)){
    // missing token
    $result['error'] = true;
    $result['message'] = "Missing token from verification link";
} else {
    $jwt = $_GET['token'];
    $token_user = $authService->decodeToken($jwt);
    if (is_array($token_user)) {
        $query = "SELECT * FROM user WHERE id = :user_id";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':user_id', $token_user['id']);
        if ($stmt->execute()) {
            $res = $stmt->rowCount();
            if ($res > 0) {
                $user = $stmt->fetch(PDO::FETCH_ASSOC);
                $match = $authService->verifyToken($token_user, $user['verify_token']);
                if ($match === true) {
                    $vt = ''; $iv = 1;
                    $query = "UPDATE user SET verify_token = :vt, is_verified = :iv WHERE id = :user_id";
                    $stmt = $conn->prepare($query);
                    $stmt->bindParam(':vt', $vt);
                    $stmt->bindParam(':iv', $iv);
                    $stmt->bindParam(':user_id', $user['id']);
                    if ($stmt->execute()) {
                        $result['message'] = "Successful account verification";
                    } else {
                        $result['error'] = true;
                        $result['message'] = "User verified but could not clear db token: " . $conn->errorInfo();
                    }
                } else if ($match === false) {
                    $result['error'] = true;
                    $result['message'] = "Invalid token.";
                } else {
                    $result['error'] = true;
                    $result['message'] = $match;
                }
            } else {
                $result['error'] = true;
                $result['message'] = "No such user exists in database. Kindly register";
            }
        } else {
            $result['error'] = true;
            $result['message'] = "DB Search error: " . $conn->errorInfo();
        }
    } else {
        $result['error'] = true;
        $result['message'] = $token_user;
    }
}

return json_encode($result);
?>