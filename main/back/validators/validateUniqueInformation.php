<?php
session_start();

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


if(isset($_POST['registerMail']) && isset($_POST['registerPhone']) && isset($_POST['registerNick'])) {
    $userMail   = $_POST['registerMail'];
    $userPhone  = $_POST['registerPhone'];
    $userNick   = $_POST['registerNick'];
    $userMail = filter_var($userMail, FILTER_SANITIZE_EMAIL);
    $userMail = htmlspecialchars($userMail, ENT_QUOTES, 'UTF-8');
    $userPhone = htmlspecialchars($userPhone, ENT_QUOTES, 'UTF-8');
    $userNick = htmlspecialchars($userNick, ENT_QUOTES, 'UTF-8');
    
    if(!empty($userMail) || !empty($userPhone) || !empty($userNick)){

        include_once('../connect/conexao.php');
        
        $userMail   = $mysqli->real_escape_string($userMail);
        $userPhone  = $mysqli->real_escape_string($userPhone);
        $userNick   = $mysqli->real_escape_string($userNick);

        $checkNickQuery = $mysqli->prepare("SELECT * FROM usuarios WHERE apelido_usuario = ?");
        $checkNickQuery->bind_param("s", $userNick);
        $checkNickQuery->execute();
        $checkNickQuery->store_result();

        if($checkNickQuery->num_rows <= 0) {

            $informationQuery = $mysqli->prepare("SELECT * FROM usuarios WHERE email_usuario = ? OR telefone_usuario = ? OR apelido_usuario = ?");
            $informationQuery->bind_param("sss", $userMail, $userPhone, $userNick);
            $informationQuery->execute();
            $informationQuery->store_result();
            
            if($informationQuery->num_rows == 0) {
                $randUniqueCode = rand(100000, 999999);
    
                $_SESSION ['registerMail'] = $userMail;
                $_SESSION ['registerPhone'] = $userPhone;
                $_SESSION ['registerNick'] = $userNick;
                $_SESSION['randUniqueCode'] = $randUniqueCode;
                
                require '../mailPHP/src/Exception.php';
                require '../mailPHP/src/PHPMailer.php';
                require '../mailPHP/src/SMTP.php';
        
                $assunto  = 'Código de confirmação';
                $mensagem = "
                <div style='
                    width: 90vw; 
                    height: 60vh; 
                    border-radius: 20px; 
                    background-color: orangered; 
                    color: white; 
                    text-align: center;
                '>
                <h1 style='padding-top: 4vh; font-size:20pt;'>Olá, $userNick!</h1><br><br>
    
                <p style='font-size:15pt;'>Copie e cole esse código de confirmação para finalizar o cadastro da sua conta:<br><br> <strong style='font-size: 18pt;'>$randUniqueCode</strong>
                </p><br><br>
    
                <small>Esse código será válido por 5 minutos.</small>
                </div>
                ";
        
                $mail = new PHPMailer(true);
        
                try {
                    $mail->isSMTP();
                    $mail->CharSet    = 'utf-8';
                    $mail->Host       = 'smtp.umbler.com';
                    $mail->SMTPAuth   = true;
                    $mail->Username   = 'conta@spoileando.com';
                    $mail->Password   = '!2Wpt#ndS';
                    $mail->SMTPSecure = 'tls';
                    $mail->Port       = 587;
        
                    $mail->setFrom('conta@spoileando.com', 'Spoileando');
                    $mail->addAddress($userMail, $userNick);
        
                    $mail->isHTML(true);
                    $mail->Subject = $assunto;
                
                    $mail->Body = "$mensagem";
        
                    $mail->send();
                    echo 'E-mail enviado com sucesso!';
                } catch (Exception $e) {
                    echo "Erro ao enviar o e-mail: {$mail->ErrorInfo}";
                } catch (InvalidArgumentException $e) {
                    echo "Argumento inválido: " . $e->getMessage();
                } catch (RuntimeException $e) {
                    echo "Erro ao executar operação: " . $e->getMessage();
                }
            } else {
                echo 'O email ou telefone já estão registrados em outra conta!';
                exit;
            }
        }else{
            echo 'O nome de usuário já está em uso!';
            exit;
        }
    } else{
        echo 'Todos os campos devem ser preenchidos!';
        exit;
    }
}
?>
