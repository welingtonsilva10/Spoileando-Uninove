<?php
session_start();

if (!isset($_SESSION['email'])) {
    header('LOCATION: /login.html');
    exit();
}
else
if ($_SERVER['REQUEST_METHOD'] === 'GET')
{
    include_once('../connect/conexao.php');

    if (isset($_GET['idPostagem'])) {
        $idPostagem = $_GET['idPostagem'];

        $sql = "SELECT comentarios.*, usuarios.* 
        FROM comentarios 
        INNER JOIN usuarios ON comentarios.id_usuario = usuarios.id_usuario 
        WHERE comentarios.id_postagem = $idPostagem
        ORDER BY comentarios.data_comentario DESC
        ";
        $result = $mysqli->query($sql);

        if ($result->num_rows > 0) {
            $comentarios = array();
            while ($row = $result->fetch_assoc()) {
                $comentarios[] = $row;
            }
            echo json_encode($comentarios);
        }
        else {
            http_response_code(204);
        }
    }
}

$mysqli->close();

?>
