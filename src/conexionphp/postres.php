<?php
// postres.php
error_reporting(0);
ini_set('display_errors', 0);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

include("conexion.php");

// Consultamos exactamente las 5 columnas requeridas usando 'id' como llave primaria
$result = $conn->query("SELECT id, nombre, descripcion, precio, stock FROM productos ORDER BY id DESC");

if ($result) {
    $postres = $result->fetch_all(MYSQLI_ASSOC);
    echo json_encode($postres);
} else {
    echo json_encode(["error" => "Error al consultar los postres"]);
}