<?php

$caminho = '../../../parameters/termsConditions.json';

if (file_exists($caminho)) {
    
    header('Content-Type: application/json');
    
    readfile($caminho);
} else {
    echo json_encode(['erro' => 'Arquivo não encontrado']);
}