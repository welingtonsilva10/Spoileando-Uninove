<?php
session_start();

if (isset($_SESSION['email'])) {

    include_once('../connect/conexao.php');
    
    $id_do_usuario_logado = $_SESSION['email'];

    $posts = "SELECT `link_imagem`, `descricao_imagem` FROM `usuarios` WHERE `email_usuario` = '$id_do_usuario_logado'";
    $resultado = $mysqli->query($posts);

    $inf = array();
    while ($row = $resultado->fetch_assoc()) {
        $inf[] = $row;
    }
    header('Content-Type: application/json');
    echo json_encode($inf);
} else {
    echo "Usuário não está logado.";
}
?>
