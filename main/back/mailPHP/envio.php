<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'src/Exception.php';
require 'src/PHPMailer.php';
require 'src/SMTP.php';


$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.umbler.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'conta@spoileando.com';
    $mail->Password = '!2Wpt#ndS';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    
    $mail->setFrom('conta@spoileando.com', 'Spoileando');
    $mail->addAddress('welingtonrsilva.work@gmail.com', 'Welington');

    
    $mail->isHTML(true);
    $mail->Subject = 'Testando email Spoileando';
    $mail->Body = '
    <body>
    <h1>Oii, {usuario}! Assistiu algo interessante esse fim de semana?</h1>
    <h2>Que tal fazer login e compartilhar essa experiencia com a gente, em?</h2>
    <a href="https://spoileando.com/html/login.html">Clique aqui</a>
    </body>
    
    ';

    
    $mail->send();
    echo 'E-mail enviado com sucesso!';
} catch (Exception $e) {
    echo "Erro ao enviar o e-mail: {$mail->ErrorInfo}";
}
?>