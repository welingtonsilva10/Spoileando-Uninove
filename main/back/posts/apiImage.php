<?php
header('Content-Type: application/json');

// $configFile = file_get_contents('custonSearch.json');
// $config = json_decode($configFile, true);

// if ($config === null || !isset($config['apiKey']) || !isset($config['searchId'])) {
//     http_response_code(500);
//     echo json_encode(['error' => 'Erro ao carregar as chaves da API do arquivo JSON']);
//     exit();
// }

// $apiKey = $config['apiKey'];
// $cx = $config['searchId'];
$apiKey = "AIzaSyDbi59Qw_vxKQLlcRDr2SvzUjbrIN0-DNk";
$cx = "843afcbbb5bda47f6";
$query = isset($_GET['query']) ? urlencode($_GET['query']) : '';
$counter = isset($_GET['counter']) ? $_GET['counter'] : '';
$safeSearch = 'high';


if ($query !== '') {
    $url = "https://www.googleapis.com/customsearch/v1?q={$query}&key={$apiKey}&cx={$cx}&searchType=image&counter={$counter}&fileType=jpg,pngsearchType=image&safe=${safeSearch}";
    stream_context_set_default(['http' => ['timeout' => 20]]);
    $result = file_get_contents($url);

    if ($result === FALSE) {
        http_response_code(500);
        echo json_encode(['error' => 'Erro na solicitação para o Google Custom Search API']);
    } else {
        echo $result;
    }
} else {
    http_response_code(400);
    echo json_encode(['error' => 'Parâmetro de consulta ausente']);
}
?>