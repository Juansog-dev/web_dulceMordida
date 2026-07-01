<?php
// postresupdate.php
error_reporting(0);
ini_set('display_errors', 0);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: text/plain; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

include("conexion.php");

$id = isset($_POST['id']) ? trim($_POST['id']) : '';
$nombre = isset($_POST['nombre']) ? trim($_POST['nombre']) : '';
$descripcion = isset($_POST['descripcion']) ? trim($_POST['descripcion']) : '';
$precio = isset($_POST['precio']) ? trim($_POST['precio']) : '';
$stock = isset($_POST['stock']) ? trim($_POST['stock']) : '';

if (!empty($id) && !empty($nombre)) {
    $stmt = $conn->prepare("UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, stock = ? WHERE id = ?");
    $stmt->bind_param("ssdii", $nombre, $descripcion, $precio, $stock, $id);
    
    if ($stmt->execute()) {
        echo "OK";
    } else {
        echo "Error al actualizar el registro";
    }
    $stmt->close();
} else {
    echo "ID o datos faltantes";
}