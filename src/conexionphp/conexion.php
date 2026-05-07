<?php
$host = "mysql-dulcemordida.alwaysdata.net";
$user = "dulcemordida";
$password = "Lobito400";
$dbname = "dulcemordida_empresa";

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

$conn->set_charset("utf8mb4");
?>