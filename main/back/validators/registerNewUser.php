<?php
session_start();

if(isset($_POST['registerName']) && isset($_POST['registerName']) && isset($_POST['registerPassword'])) {
    $userMail = $_SESSION ['registerMail'];
    $userPhone = $_SESSION ['registerPhone'];
    $userNick = $_SESSION ['registerNick'];
    $userCode   = $_POST['registerCode'];
    $userName   = $_POST['registerName'];
    $userPassword  = $_POST['registerPassword'];
    $rand = $_SESSION['randUniqueCode'];
    include_once('../connect/conexao.php');

    $informationQuery = $mysqli->prepare("SELECT * FROM usuarios WHERE email_usuario = ? OR telefone_usuario = ? OR apelido_usuario = ?");
    $informationQuery->bind_param("sss", $userMail, $userPhone, $userNick);
    $informationQuery->execute();
    $informationQuery->store_result();
    
    if($informationQuery->num_rows == 0) {
        
        if($userCode == $rand) {

            $result = mysqli_query($mysqli, "INSERT INTO `usuarios`
            (
                `id_usuario`,
                `nome_usuario`,
                `apelido_usuario`,
                `telefone_usuario`,
                `email_usuario`,
                `senha_usuario`,
                `link_imagem`,
                `descricao_imagem`
            )
            VALUES 
            (
                NULL,
                '$userName',
                '$userNick',
                '$userPhone',
                '$userMail',
                '$userPassword',
                '../../image/userStandard/profile.svg',
                'Papagaio verde'
            )");

            echo 'Registrado com sucesso!';

        }else{
            echo 'O código inserido está incorreto!';
        }

    }else{
        echo 'Essa conta já foi registrada';
        exit;
    }
}