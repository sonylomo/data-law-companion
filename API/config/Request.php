<?php

use LLPhant\Chat\OpenAIChat;
use LLPhant\OpenAIConfig;

require 'vendor/autoload.php';
require 'services.php';

class RequestService {

    private $config, $key, $chat, $fastAPIendpoint, $ch;

    public function __construct() {
        $this->config = new OpenAIConfig();
        $this->key = $_SERVER['OPENAI_API_KEY'];
        $this->config->apiKey = $this->key;
        $this->chat = new OpenAIChat($this->config);
        $this->fastAPIendpoint = 'https://compliancecompanion-compliancecompanion.hf.space/';
    }

    public function ask($question) {
        $this->chat->model = '';
        return $this->chat->generateStreamOfText($question);
    }

    public function chat($messages, $prompt) {
        $this->chat->model = '';
        $this->chat->setSystemMessage("$prompt");
        return $this->chat->generateChatStream($messages);
    }

    public function summarize($country, $section) {
        $this->chat->model = '';
        $this->chat->setSystemMessage("");
        return $this->chat->generateText($country . ' ' . $section);
    }

    public function fastApiQuery($queryType, $data) {
        if ($queryType === 'question') {
            $this->fastAPIendpoint = $this->fastAPIendpoint . 'qa';
        } else {
            $this->fastAPIendpoint = $this->fastAPIendpoint . 'summary';
        }
        $headers = array('Content-Type: application/json');
        $this->ch = curl_init($this->fastAPIendpoint);
        curl_setopt($this->ch, CURLOPT_POST, true);
        curl_setopt($this->ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($this->ch, CURLOPT_POSTFIELDS, json_encode($data));
        curl_setopt($this->ch, CURLOPT_RETURNTRANSFER, true);
        if (!$response = curl_exec($this->ch)) {
            $response = curl_error($this->ch);
        }
        curl_close($this->ch);
        return $response;
    }

    public function chatbotQuery($queryParams) {
        $_SERVER["answer"] = 'wait';
        $_SERVER["answer"] = $this->fastApiQuery('question', $queryParams);
    }
}
?>