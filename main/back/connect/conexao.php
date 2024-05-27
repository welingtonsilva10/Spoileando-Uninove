<?php
    $dbAccess = file_get_contents('../../../parameters/dbConfig.json');
    $config = json_decode($dbAccess, true);
    
    if ($config === null || !isset($config['hostName']) || !isset($config['userName']) || !isset($config['password']) || !isset($config['baseName'])) {
        http_response_code(500);
        echo json_encode(['error' => 'Erro ao carregar as chaves da API do arquivo JSON']);
        exit();
    }
    else{
        $dbh = $config['hostName'];
        $dbu = $config['userName'];
        $dbp = $config['password'];
        $dbn = $config['baseName'];

        $mysqli = new mysqli($dbh,$dbu,$dbp,$dbn);
    }
?>