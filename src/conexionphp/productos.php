<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include("conexion.php");

try {
    $idcategoria = $_GET["idcategoria"] ?? null;
    $idproducto = $_GET["idproducto"] ?? null;

    $sql = "SELECT * FROM productos";

    if ($idproducto) {
        $sql .= " WHERE id= " . intval($idproducto);
    } else if ($idcategoria) {
        $sql .= " WHERE idcategoria = " . intval($idcategoria);
    }

    $resultado = $conn->query($sql);

    $productos = [];

    while ($fila = $resultado->fetch_assoc()) {
        $productos[] = $fila;
    }

    echo json_encode($productos, JSON_UNESCAPED_UNICODE);

} catch (Exception $e) {
    echo json_encode([
        "error" => $e->getMessage()
    ]);
}