<?php
require 'config/Request.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

$chatService = new RequestService();

$action = $prompt = $country = $section = '';
$messages = array();
$result['error'] = false;

// if (isset($_COOKIE['token']) && (strlen($_COOKIE['token']) > 0)) {
//     $jwt = $_COOKIE['token'];
// }

if (isset($_GET['action'])) {
    $action = $_GET['action'];

    // summarize section
    if ($action == 'summarize') {
        $data = null;
        if($_SERVER["CONTENT_TYPE"] != 'application/json') {
            if ($_POST) {
                $data = [
                    'country' => $_POST['country'],
                    'section' => $_POST['section']
                ];
            } else {
                $result['error'] = true;
                $result['message'] = "No data sent with request!";
            }
        } else {
            $jsonPayload = file_get_contents('php://input');
            $data = json_decode($jsonPayload);
            if(json_last_error_msg() !== 'No error') {
                $result['error'] = true;
                $result['message'] = json_last_error_msg();
            }
        }
        $result['data'] = json_decode($chatService->fastApiQuery('summary', $data));
    }

    // ask question
    if ($action == 'question') {
        $data = null;
        if($_SERVER["CONTENT_TYPE"] != 'application/json') {
            if ($_POST) {
                $data['Question'] = $_POST['question'];
            } else {
                $result['error'] = true;
                $result['message'] = "No question sent with request!";
            }
        } else {
            $jsonPayload = file_get_contents('php://input');
            $data = json_decode($jsonPayload);
            if (isset($data->question)) {
                $data->Question = $data->question;
                unset($data->question);
            }
            if(json_last_error_msg() !== 'No error') {
                $result['error'] = true;
                $result['message'] = json_last_error_msg();
            }
        }
        $result['data'] = json_decode($chatService->fastApiQuery('question', $data));
    }
}

echo json_encode($result);