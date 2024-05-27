<?php

session_start();

if (!isset($_SESSION['email'])) {
    header('LOCATION: /login.html');
    exit();
}
else{
    include_once('../connect/conexao.php');

    $usuario = $_SESSION['id']; 
    $postagem = $_POST['comment'] ;
    $texto = $_POST['palavras'];

    if($postagem == '' || $texto == ''){

    }else{
        $comment =  mysqli_query( $mysqli, "INSERT INTO `comentarios`(`id`, `mensagem`, `id_postagem`, `id_usuario`, `data_comentario`)
         VALUES (null,'$texto','$postagem','$usuario',NOW() )");
    }
}

?>