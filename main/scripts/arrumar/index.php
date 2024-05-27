<?php

session_start();

if (!isset($_SESSION['email'])) {
    header('LOCATION: /html/login.php');
}
else{
    header('LOCATION: /html/system.php');
}

?>

