<?php
// postresdelete.php
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

if (!empty($id)) {
    $stmt = $conn->prepare("DELETE FROM productos WHERE id = ?");
    $stmt->bind_param("i", $id);
    
    if ($stmt->execute()) {
        echo "OK";
    } else {
        echo "Error al eliminar el registro";
    }
    $stmt->close();
} else {
    echo "ID no proporcionado";
}