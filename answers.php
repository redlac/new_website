<!DOCTYPE html>
<html>
    <head></head>
    <body>
        <?php
            $to      = 'email to send to';
            $subject = 'Poll Result from (website)';
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
