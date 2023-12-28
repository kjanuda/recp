<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["contact_name"];
    $email = $_POST["contact_email"];
    $message = $_POST["contact_message"];

    $to = "janudakodi@gmail.com";
    $subject = "New Contact Form Submission";
    $headers = "From: $email\r\n";

    mail($to, $subject, $message, $headers);

    // You can send a response back to the client if needed
    echo json_encode(["success" => true]);
} else {
    // Handle the case when the form is not submitted through POST
    echo json_encode(["success" => false, "message" => "Invalid request"]);
}
?>
