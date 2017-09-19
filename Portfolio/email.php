<?php
    
    $to = "ahmed.a.panju@gmail.com";
    $headers = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $subject = "New Portfolio Message";

    mail($to,$subject,$message,$headers);

?>
