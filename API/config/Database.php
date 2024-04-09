<?php
require __DIR__ . ('./services.php');

class DatabaseService {
    private $db_host, $db_user, $db_pass, $db_name, $connection;
    
    public function __construct() {
        $this->connection = null;
        $this->db_host = $_SERVER['DB_HOST'];
        $this->db_user = $_SERVER['DB_USER'];
        $this->db_pass = $_SERVER['DB_PWORD'];
        $this->db_name = $_SERVER['DB_NAME'];
    }

    public function getConnection() {
        try {
            $this->connection = new PDO("mysql:host=".$this->db_host.";dbname=".$this->db_name, $this->db_user, $this->db_pass);
        } catch (PDOException $exception) {
            $result['connError'] = "Connection failed: " . $exception->getMessage();
            echo json_encode($result);
        }
        return $this->connection;
    }
}
?>