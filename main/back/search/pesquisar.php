<?php
include_once('../connect/conexao.php');

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $pesquisa = isset($_POST['pesquisa']) ? $_POST['pesquisa'] : '';

    if (empty($pesquisa)) {
        echo json_encode(array('error' => 'Nenhuma pesquisa fornecida'));
        exit;
    }
    
    $query = "SELECT 
                id_spoiler,
                titulo_spoiler, 
                imagem_url,
                informacao_spoiler, 
                tipo_spoiler, 
                nota_spoiler,
                usuarios.id_usuario,
                usuarios.apelido_usuario,
                usuarios.link_imagem,
                DATE_FORMAT(datime_spoiler, '%d/%m/%Y') AS data_envio_formatada 
                FROM postagens 
                INNER JOIN usuarios ON postagens.id_usuario = usuarios.id_usuario
                WHERE titulo_spoiler LIKE ? OR informacao_spoiler LIKE ? 
                ORDER BY datime_spoiler DESC";

    $stmt = $mysqli->prepare($query);
    $pesquisaParam = "%{$pesquisa}%";
    $stmt->bind_param("ss", $pesquisaParam, $pesquisaParam);
    $stmt->execute();
    $resultado = $stmt->get_result();

    if ($resultado) {
        $resultados = array();

        while ($row = $resultado->fetch_assoc()) {
            $resultados[] = $row;
        }
        
        header('Content-Type: application/json');
        echo json_encode($resultados);
    } else {
        echo json_encode(array('error' => 'Erro na consulta SQL'));
    }

    $stmt->close();
    $mysqli->close();
} else {
    echo json_encode(array('error' => 'Método de requisição inválido'));
}
?>

