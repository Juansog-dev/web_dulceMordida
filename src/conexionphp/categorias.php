<?php

header("Content-Type: application/json; charset=utf-8");
header("Access-Control-Allow-Origin: *");

include("conexion.php");

$idcategoria = $_GET["idcategoria"] ?? null;

$sql = "SELECT * FROM productos";

if ($idcategoria) {
    $sql .= " WHERE idcategoria = " . intval($idcategoria);
}

$resultado = $conn->query($sql);
$resultado = $conn->query($sql);

$categorias = [];

while ($fila = $resultado->fetch_assoc()) {
    $categorias[] = $fila;
}

echo json_encode($categorias, JSON_UNESCAPED_UNICODE);