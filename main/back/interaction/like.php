<?php
session_start();

if (!isset($_SESSION['email'])) {
    header('Location: /login.html');
    exit();
} else {
    include_once("../connect/conexao.php");

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $id_postagem = $_POST["id_postagem"];
        $id_usuario = $_SESSION['id'];
        
        $query = "SELECT * FROM curtidas WHERE id_postagem = ? AND id_usuario = ?";
        $stmt = $mysqli->prepare($query);
        $stmt->bind_param("ii", $id_postagem, $id_usuario);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows == 0) {

            $insert_query = "INSERT INTO curtidas (id_postagem, id_usuario) VALUES (?, ?)";
            $stmt_insert = $mysqli->prepare($insert_query);
            $stmt_insert->bind_param("ii", $id_postagem, $id_usuario);
            $stmt_insert->execute();
            $stmt_insert->close();

            $saida = $result;
            echo "Curtida registrada com sucesso!";
        } else {
            
            $delete_query = "DELETE FROM curtidas WHERE id_postagem = ? AND id_usuario = ?";
            $stmt_delete = $mysqli->prepare($delete_query);
            $stmt_delete->bind_param("ii", $id_postagem, $id_usuario);
            $stmt_delete->execute();
            $stmt_delete->close();

            $saida = $result;
            echo "Curtida removida com sucesso!";
        }

        $stmt->close();
    }

    
    $mysqli->close();
}
?>
