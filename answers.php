<!DOCTYPE html>
<html>
    <head></head>
    <body>
        <?php
            $to      = 'contact@caldertrombley.com';
            $subject = 'Poll Result from caldertrombley.com';
            $message = 'The visitor has selected: '.$_GET['visitor-choice'];
            $headers = 'From: webmaster@example.com' . "\r\n" .
                       'Reply-To: webmaster@example.com' . "\r\n" .
                       'X-Mailer: PHP/' . phpversion();

            mail($to, $subject, $message, $headers);
        ?> 

        Feedback Received!
        <br>
        <br>
        <a href="../">Go Back</a>
    </body>
</html>