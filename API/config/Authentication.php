<?php
require __DIR__ . './services.php';
use \Firebase\JWT\JWT;
use \Firebase\JWT\Key;

class AuthenticationService {
    private $jwt_key;

    public function __construct() {
        $this->jwt_key = $_SERVER['JWT_KEY'];
    }

    public function generateToken($user, $time) {
        $issuer_claim = $_SERVER['NAME'];
        $audience_claim = $user['firstname'] . " " . $user['lastname'];
        $issuedat_claim = time();
        $notbefore_claim = $issuedat_claim;
        $expire_claim = $time;
        $token = array(
            "iss" => $issuer_claim,
            "aud" => $audience_claim,
            "iat" => $issuedat_claim,
            "nbf" => $notbefore_claim,
            "exp" => $expire_claim,
            "data" => array(
                "id" => $user['id'],
                "firstName" => $user['firstname'],
                "lastName" => $user['lastname'],
                "email" => $user['email'],
                "role" => $user['role'],
                "verified" => $user['verified'],
                "regDate" => $user['regDate']
        ));
        $jwt = JWT::encode($token, $this->jwt_key, 'HS512');
        return $jwt;
    }

    public function decodeToken($token) {
        try {
            $decoded = JWT::decode($token, new Key($this->jwt_key, 'HS512'));
            $user = $decoded->data;
            return $user;
        } catch (Exception $e) {
            return "Token error: " . $e->getMessage();
        }
    }

    public function verifyToken($user, $token) {
        $user_from_token = $this->decodeToken($token);
        if(is_array($user_from_token)){
            if ($user['email'] === $user_from_token['email']) {
                return true;
            } else {
                return false;
            }
        } else {
            return $user_from_token;   // probable the error message from decodeToken()
        }
    }
}

?>