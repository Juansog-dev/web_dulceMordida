<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include("conexion.php");

$sql = "SELECT * FROM blog ORDER BY fecha DESC";

$resultado = $conn->query($sql);

$blog = [];

while ($fila = $resultado->fetch_assoc()) {
    $blog[] = $fila;
}

echo json_encode($blog, JSON_UNESCAPED_UNICODE);