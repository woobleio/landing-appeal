<?php
  $errors = '';
  if(empty($_POST['email']) || empty($_POST['message'])) {
    $errors .= "\n Error: all fields are required";
  }

  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  if (!preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", $email)) {
    $errors .= "\n Error: Invalid email address";
  }

  if(empty($errors)) {
    $to = 'jonathan@wooble.io';
    $email_subject = "Landing : $name";
    $email_body = $message;
    $headers = "From: $email\n";
    $headers .= "Reply-To: $email";
    mail($to,$email_subject,$email_body,$headers);
  } else {
    header('HTTP/1.0 400 Bad Request');
  }
?>
