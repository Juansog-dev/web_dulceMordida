<?php
// postresinsert.php
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

$nombre = isset($_POST['nombre']) ? trim($_POST['nombre']) : '';
$descripcion = isset($_POST['descripcion']) ? trim($_POST['descripcion']) : '';
$precio = isset($_POST['precio']) ? trim($_POST['precio']) : '';
$stock = isset($_POST['stock']) ? trim($_POST['stock']) : '';

if (!empty($nombre) && !empty($precio)) {
    $stmt = $conn->prepare("INSERT INTO productos (nombre, descripcion, precio, stock) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssdi", $nombre, $descripcion, $precio, $stock);
    
    if ($stmt->execute()) {
        echo "OK"; // Devuelve texto plano para que el .text() de React lo reciba limpio
    } else {
        echo "Error al insertar en la base de datos";
    }
    $stmt->close();
} else {
    echo "Datos incompletos";
}