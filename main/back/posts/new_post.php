<?php
session_start();

if (!isset($_SESSION['usuario'])) {
    header('LOCATION: /login.html');
    exit();
}else{

    if(isset($_POST['titulo'], $_POST['imagem'], $_POST['informacao'], $_POST['tipo'], $_POST['nota'], $_POST['plataforma']))
    {
    
        $nota = $_POST['nota'];
        $tipo = $_POST['tipo'];
        $titulo = $_POST['titulo'];
        $imagem = $_POST['imagem'];
        $usuario = $_SESSION['id'] ;
        $plataforma = $_POST['plataforma'];
        $informacao = $_POST['informacao'];
    
        if($titulo == '' || $imagem =='' || $informacao =='' || $tipo =='' || $nota =='' || $plataforma =='' || $usuario ==''  ){
            
                echo "Preencha todos os campos";
                
        }else{
            include_once('../connect/conexao.php');

            $stmt = $mysqli->prepare("INSERT INTO `postagens` (
            `id_spoiler`,
            `titulo_spoiler`,
            `imagem_url`,
            `informacao_spoiler`,
            `tipo_spoiler`,
            `plataforma_spoiler`,
            `nota_spoiler`,
            `id_usuario`
            ) 
            VALUES (NULL, ?, ?, ?, ?, ?, ?, ?)");
            $stmt->bind_param("ssssssi", $titulo, $imagem, $informacao, $tipo, $plataforma, $nota, $usuario);

            $result = $stmt->execute();

            $stmt->close();
        }
    
    }
}

?>