<?php

session_start();

if (!isset($_SESSION['email'])) {
    header('LOCATION: /login.html');
} else{
    include_once('../connect/conexao.php');

    $idUsuario = $_SESSION['id'];
    $idPostagem = $_POST['id_post'];
    
    $stmt = $mysqli->prepare("INSERT INTO `salvos`(`id_save`, `id_post`, `id_user`, `data_save`) VALUES (NULL, ?, ?, NULL)");
    $stmt->bind_param("ii", $idPostagem, $idUsuario);
    
    $result = $stmt->execute();
    
    if($result) {
        echo "Cartão salvo com sucesso!";
    } else {
        echo "Erro ao salvar o cartão.";
    }
    
    $stmt->close();
}
?>