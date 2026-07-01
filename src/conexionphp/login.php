<?php
// login.php
error_reporting(0);
ini_set('display_errors', 0);

header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if (ob_get_length()) ob_clean();

// 1. Incluimos tu archivo de conexión real con tus datos
include("conexion.php"); 

// Verificamos que la conexión exista
if (!isset($conn)) {
    echo json_encode(["error" => "No se encontró la variable de conexión \$conn"]);
    exit;
}

// 2. Captura de datos desde React
$correotelefono = isset($_POST['correotelefono']) ? trim($_POST['correotelefono']) : '';
$clave = isset($_POST['clave']) ? trim($_POST['clave']) : '';

if (empty($correotelefono) || empty($clave)) {
    echo json_encode(["error" => "Campos incompletos"]);
    exit;
}

// 3. Consulta usando MySQLi (preparada por seguridad)
$stmt = $conn->prepare("SELECT idcliente, nombres, apellido, correo, telefono, ciudad, clave, fecha_registro FROM usuarios WHERE correo = ? OR telefono = ?");
if ($stmt) {
    $stmt->bind_param("ss", $correotelefono, $correotelefono);
    $stmt->execute();
    $result = $stmt->get_result();
    $usuario = $result->fetch_assoc();
    $stmt->close();

    if (!$usuario) {
        echo json_encode(-1); // Cuenta no existe
        exit;
    }

    // Verificamos la contraseña encriptada
  // Comparación directa temporal para pruebas
if ($clave !== $usuario['clave']) {
    echo json_encode(-2); // Contraseña incorrecta
    exit;
}

    // Login correcto -> Formato exacto en array que espera tu React (result[0])
    $respuesta = [
        [
            "idcliente"      => (int)$usuario['idcliente'],
        "nombres"        => $usuario['nombres'],
        "apellido"       => $usuario['apellido'],       
        "correo"         => $usuario['correo'],
        "telefono"       => $usuario['telefono'],
        "ciudad"         => $usuario['ciudad'],        
        "fecha_registro" => $usuario['fecha_registro']
        ]
    ];

    echo json_encode($respuesta);

} else {
    echo json_encode(["error" => "Error al preparar la consulta en la base de datos"]);
}
