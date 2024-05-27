<?php
session_start();

if (isset($_POST['submit']) && !empty($_POST['email']) && !empty($_POST['senha'])) {
    include_once('../connect/conexao.php');

    $email = $mysqli->real_escape_string($_POST['email']);
    $senha = $mysqli->real_escape_string($_POST['senha']);

    $stmt = $mysqli->prepare("SELECT * FROM `usuarios` WHERE (`email_usuario` = ? OR `apelido_usuario` = ?) AND `senha_usuario` = ? LIMIT 1");
    $stmt->bind_param("sss", $email, $email, $senha);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 1) {
        $usuario_data = $result->fetch_assoc();
        $_SESSION['email'] = $usuario_data['email_usuario'];
        $_SESSION['senha'] = $usuario_data['senha_usuario'];
        $_SESSION['id'] = $usuario_data['id_usuario']; 
        $_SESSION['usuario'] = $usuario_data['apelido_usuario']; 

        header('LOCATION: /app/system.php');
    } else {
        header('LOCATION: /login.html');
    }
} else {
    header('LOCATION: /login.html');
}
?>