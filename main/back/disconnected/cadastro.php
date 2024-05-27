<?php
session_start();

if(isset($_POST['submit'])) {
    $codigo_confirmacao = $_POST['codigo'];
    $codigo_gerado = $_SESSION['codigo_gerado'];
    
    if($codigo_confirmacao != $codigo_gerado) {
        exit;
    }

    include_once('../connect/conexao.php');
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $apelido = $_POST['apelido'];
    $telefone = $_POST['telefone'];
    $senha = $_POST['senha'];

    $consulta = mysqli_query($mysqli, "SELECT email_usuario FROM usuarios WHERE email_usuario = '$email' ");

    if(mysqli_num_rows($consulta) >= 1){
        echo "<script>alert('Este email já está existe, faça login ou tente outro endereço.');</script>";
        exit;
    } else {
        
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
            '$nome',
            '$apelido',
            '$telefone',
            '$email',
            '$senha',
            '/main/images/userStandard/profile.svg',
            'Perfil cinza'
        )");

        header('LOCATION: /login.html');
    }
}
?>
