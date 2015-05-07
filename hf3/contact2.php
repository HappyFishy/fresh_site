<?php 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = trim($_POST ["name"]);
  $email = trim($_POST ["email"]);
  // $company = trim($_POST ["company"]);
  $message = trim($_POST ["message"]);

  // if($name == "" OR $email == "") {
  //   header("location: contact.php?status=error");
  //   exit;
  // }

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
    echo "There was a problem sending the email." . $mail->ErrorInfo;
    exit;
  }

  // header("location: contact.php?status=thanks");
  // exit;
}
?>

<?php
$pageTitle = "HF3";
$section = "contact";
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- <link href='http://fonts.googleapis.com/css?family=Quicksand|Merriweather:400,700,300' rel='stylesheet' type='text/css'> -->

  <!-- <link rel="stylesheet" href="css/reset.css"> -->
  
  <link rel="stylesheet" href="css/contact.css"> 
  <!-- <link rel="stylesheet" href="css/style.css">  -->
  <!-- <script src="js/modernizr.js"></script> -->
    
  <title>HF3</title>
</head>
<body>
  
  <div class="container">

    <form id="ajax-contact" class="form" method="post" action="contact2.php">
        <div class="field">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
        </div>

        <div class="field2">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
        </div>

        <div class="field3">
            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
        </div>

        <div class="field4">
            <button type="submit">send</button>
        </div>
        <div class="fieldfake" style="visibility:hidden">
            <label for="messageaddress">Address:</label>
            <textarea id="address" name="address"></textarea>
        </div>
    </form>

  </div>

  <div class="close">
    <div class="x-icon"></div>
  </div>

  <div class="form-messages" id="form-messages">
    <div class="message" id="messages"></div>
  </div>

  <div class="sent">
    <div class="check-icon"></div>
    <p>SENT</p>
  </div>

<!-- <script src="js/jquery-2.1.1.js"></script> -->
<script src="js/contact.js"></script> 
</body>
</html>





