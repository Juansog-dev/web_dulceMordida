<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include "conexion.php";

$sql = "SELECT id, nombre, ingredientes, cantidad, preparacion, tiempo_preparacion FROM RecetasPostres";
$resultado = $conn->query($sql);

$recetas = [];

while ($fila = $resultado->fetch_assoc()) {
    $recetas[] = $fila;
}

echo json_encode($recetas, JSON_UNESCAPED_UNICODE);
?>