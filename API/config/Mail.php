<?php
require __DIR__ . './services.php';
require __DIR__ .  './vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

class MailService {
    private $mailer, $password, $sender_address;
    protected $api_url = 'https://virtualexplorer.bysonicgroup.com/api/';

    public function __construct()
    {
        $this->sender_address = $_SERVER['MAIL_ADDRESS'];
        $this->password = $_SERVER['MAIL_PASSWORD'];
        $this->mailer = new PHPMailer(true);
        $this->mailer->isSMTP();
        $this->mailer->SMTPDebug = 2;
    }
    

    public function sendMail($sender, $subject, $body, $recepient) {
        try {
            $this->mailer->Host = 'mail.bysonicgroup.com';
            $this->mailer->Port = 465;
            $this->mailer->SMTPSecure = "TLS";
            $this->mailer->SMTPAuth = true;
            $this->mailer->Username = $this->sender_address;
            $this->mailer->Password = $this->password;

            $this->mailer->setFrom($sender, 'Data Act Compliance Companion');
            $this->mailer->addAddress($recepient);
            $this->mailer->isHTML(true);
            $this->mailer->Subject = $subject;
            
            $this->mailer->Body = $body;
            $this->mailer->send();
            return 'Mailed successfully to ' . $recepient . ".";
        } catch (Exception $e) {
            return 'Mail error: ' . $this->mailer->ErrorInfo;
        }
    }

    public function sendVerificationMail($token, $address) {
        $body = $this->generateMail($token);
        $this->sendMail($this->sender_address, "Verify your Account", $body, $address);
    }

    public function generateMail($tk) {
        $mail_message = '';
        $link = $this->api_url . 'Verify.php?token=' . $tk;

        $mail_message .= '<h4>Thank you for registering with Virtual Explorer!</h4>';
        $mail_message .= '<p>Please click on <strong><a href='.$link.'>this verification link</a></strong> in order to verify youe email and account.</p>';
        $mail_message .= '<p>This link expires after 20 minutes, so use it as soon as possible!</p>';
        $mail_message .= '<p>Warm regards,<p><p><b>Virtual Explorer</b></p>';
        
        return $mail_message;
    }
}
?>