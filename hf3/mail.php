<?php 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // $name = trim($_POST ["name"]);
  $name = strip_tags(trim($_POST["name"]));
        $name = str_replace(array("\r","\n"),array(" "," "),$name);
  // $email = trim($_POST ["email"]);
  $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
  // $company = trim($_POST ["company"]);
  $message = trim($_POST ["message"]);

  foreach( $_POST as $value){
    if( stripos($value, 'Content-Type:') !== FALSE ) {
      echo "Sorry, there was a problem processing your form.";
      exit;
    }
  }

  if ( preg_match( "/[\r\n]/", $name ) || preg_match( "/[\r\n]/", $email ) ) {
    echo "Sorry, there was a problem processing your form.";
    exit;
  }

  if (eregi("(\r|\n)", $email)) {
     echo "Sorry, there was a problem processing your form.";
     exit;
   }

  if ($POST["address" != ""]) {
    echo "Sorry, there was a problem processing your form.";
    exit;

  }

  require_once("phpmailer/class.phpmailer.php");
  $mail = new PHPMailer();


    if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            // echo "";
            exit;
        }


  if (!$mail->ValidateAddress($email)) {
    // header("location: contact.php?status=error");
    // echo "Sorry, there was a problem processing your form.";
    echo "Invalid Email! :(";
    exit;
  }


  $emailBody = "";
  $emailBody = $emailBody . $message . "<br>" . "<br>" . "<br>" . "<br>";
  $emailBody = $emailBody . $name . "<br>" . "<br>"; 
  $emailBody = $emailBody . $email;
  // $emailBody = $emailBody . "COMPANY: " . $company . "<br>"; 
  $from = "connect@happyfish.technology";

  $mail->SetFrom($from, $name);
  $address = "connect@happyfish.technology";
  $mail->AddAddress($address, "Happy Fish");
  $mail->Subject = $name . " wants to talk to us!";
  $mail->MsgHTML($emailBody);

  if(!$mail->Send()) {
    // http_response_code(500);
    echo "There was a problem sending the email." . $mail->ErrorInfo;
    exit;
  }

  // header("location: contact.php?status=thanks");
  // exit;

} else {
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }
?>