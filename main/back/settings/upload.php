<?php
session_start();

if (!isset($_SESSION['email'])) {
    header('LOCATION: /spoileando/html/login.html');
    exit();
} else {
    include_once('../connect/conexao.php');
    $email_usuario_logado = $_SESSION['email'];

    $result = mysqli_query($mysqli, "SELECT * FROM `usuarios` WHERE `email_usuario`='$email_usuario_logado'");
    
    if ($result) {
        $dados_usuario = mysqli_fetch_assoc($result);

        if (isset($_POST['submit'])) {
            if (!empty($_FILES['arquivo']['name'])) {
                $nomeArquivo = $_FILES['arquivo']['name'];
                $tipoArquivo = $_FILES['arquivo']['type'];
                $nomeTemporario = $_FILES['arquivo']['tmp_name'];
                $tamanho = $_FILES['arquivo']['size'];
                $erros = array();

                $tamanhoMaximo = 1024 * 1024 * 5;
                if ($tamanho > $tamanhoMaximo) { $erros[] = "Seu arquivo é muito grande.";}

                $arquivosPermitidos = ['png', 'jpg', 'jpeg'];
                $extensao = pathinfo($nomeArquivo, PATHINFO_EXTENSION);
                if (!in_array($extensao, $arquivosPermitidos)) { $erros[] = "Arquivo não permitido.<br>";}

                $tiposPermitidos = ['image/png', 'image/jpg', 'image/jpeg'];
                if (!in_array($tipoArquivo, $tiposPermitidos)) { $erros[] = "Tipo de arquivo não permitido.";}

                if (!empty($erros)) {
                    foreach ($erros as $erro) {
                        echo $erro;
                    }
                } else {
                    $caminho = "/main/back/zimg/";
                    $caminhoCompleto = "../zimg/";
                    $idUsuario = $dados_usuario['id_usuario'];
                    $novoNome = $idUsuario . '-img.' . $extensao;

                    if (move_uploaded_file($nomeTemporario, $caminhoCompleto . $novoNome)) {
                        echo "$novoNome";
                        $update_result = mysqli_query($mysqli, "UPDATE `usuarios` SET `link_imagem`='$caminho$novoNome'
                        WHERE `email_usuario`='$email_usuario_logado'");

                        if ($update_result) {
                            header('Location: /app/update.php');
                            exit();
                        } else {
                            exit();
                        }
                    } else {
                        echo "O upload deu errado!";
                    }
                }
            } else {
                echo "Arquivo não definido";
            }
        } else {
            echo "Arquivo não encontrado";
        }
    } else {
        exit();
    }
}
?>
