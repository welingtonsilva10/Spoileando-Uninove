<?php
session_start();

if (!isset($_SESSION['email'])) {
    header('LOCATION: /login.html');
} else {
    include_once('../connect/conexao.php');

    $usuarioLogado = $_SESSION['usuario'];
    $posts = "SELECT 
        postagens.id_spoiler,
        postagens.titulo_spoiler,
        postagens.imagem_url,
        postagens.informacao_spoiler, 
        postagens.tipo_spoiler, 
        postagens.nota_spoiler,
        usuarios.id_usuario,
        usuarios.apelido_usuario,
        usuarios.link_imagem,
        DATE_FORMAT(postagens.datime_spoiler, '%d/%m/%Y') AS data_envio_formatada,
        COUNT(curtidas.id) AS total_curtidas,
        COUNT(curtidas_usuario.id) AS usuario_curtiu
        FROM postagens 
        INNER JOIN usuarios ON postagens.id_usuario = usuarios.id_usuario
        LEFT JOIN curtidas ON postagens.id_spoiler = curtidas.id_postagem
        LEFT JOIN curtidas AS curtidas_usuario ON postagens.id_spoiler = curtidas_usuario.id_postagem AND curtidas_usuario.id_usuario = ?
        GROUP BY postagens.id_spoiler
        ORDER BY postagens.datime_spoiler DESC;";

        $stmt = $mysqli->prepare($posts);
        $stmt->bind_param("i", $usuarioLogado);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result) {
            $inf = array();
            while ($row = $result->fetch_assoc()) {
                $inf[] = $row;
            }

            header('Content-Type: application/json');
            echo json_encode($inf);
        } else {
            echo "Erro na consulta: " . $stmt->error;
        }

        $stmt->close();
        $mysqli->close();
}
?>
