<?php
// 1. Permitir peticiones desde tu entorno local de desarrollo (o cualquier origen con '*')
header("Access-Control-Allow-Origin: *");

// 2. Permitir los métodos HTTP estándar que usa React Query
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

// 3. Permitir las cabeceras comunes que envía el navegador
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

// 4. Si el navegador hace una petición de pre-vuelo (OPTIONS), responder con un 200 OK inmediatamente
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// DEFINIMOS EL TIPO DE CONTENIDO JSON
header("Content-Type: application/json; charset=UTF-8");

// Aquí continúa tu código (include("conexion.php"), etc...)
include("conexion.php");

// 1. Recibir parámetros de la Query String (URL)
$busqueda = isset($_GET['texto_buscar']) ? trim($_GET['texto_buscar']) : '';
$pais        = isset($_GET['pais']) ? trim($_GET['pais']) : '';
$col_orden   = isset($_GET['columna_orden']) ? trim($_GET['columna_orden']) : 'idmarca';
$tipo_orden  = isset($_GET['tipo_orden']) && strtoupper($_GET['tipo_orden']) === 'DESC' ? 'DESC' : 'ASC';
$pagina      = isset($_GET['pagina']) ? (int)$_GET['pagina'] : 1;
if ($pagina < 1) $pagina = 1;

$limite = 10; // Cantidad de postres/marcas por página
$offset = ($pagina - 1) * $limite;

// 2. Mapear columnas del Frontend a las columnas reales de la Base de Datos
$columnas_permitidas = [
    'idmarca'   => 'Codigo',
    'nombre'    => 'Nombre',
    'pais'      => 'Pais',
    'sede'      => 'Sede',
    'fundador'  => 'Fundador',
    'ceo'       => 'Ingrediente_Estrella' // Mapeamos 'ceo' al ingrediente de repostería
];

// Validamos que la columna por la que se ordena sea válida para evitar inyecciones SQL
$ordenar_por = isset($columnas_permitidas[$col_orden]) ? $columnas_permitidas[$col_orden] : 'Codigo';

// 3. Consulta base para contar el TOTAL de registros (necesario para la paginación)
$sql_count = "SELECT COUNT(*) as total FROM postres_marcas WHERE 1=1";
$sql_datos = "SELECT Codigo AS idmarca, Nombre AS nombre, Pais AS pais, Sede AS sede, Fundador AS fundador, Ingrediente_Estrella AS ceo 
              FROM postres_marcas 
              WHERE 1=1";

$tipos = "";
$valores = [];

// Aplicar filtros de búsqueda
if ($busqueda !== '') {
    $filtro_busqueda = " AND (Nombre LIKE ? OR Ingrediente_Estrella LIKE ? OR Pais LIKE ?)";
    $sql_count .= $filtro_busqueda;
    $sql_datos .= $filtro_busqueda;
    
    $termino = "%" . $busqueda . "%";
    $valores[] = $termino;
    $valores[] = $termino;
    $valores[] = $termino;
    $tipos .= "sss";
}

// Aplicar filtros de país
if ($pais !== '') {
    $filtro_pais = " AND Pais = ?";
    $sql_count .= $filtro_pais;
    $sql_datos .= $filtro_pais;
    
    $valores[] = $pais;
    $tipos .= "s";
}

// --- PASO A: Obtener el total de registros para calcular las páginas ---
$stmt_count = $conn->prepare($sql_count);
if ($stmt_count) {
    if (!empty($valores)) {
        $stmt_count->bind_param($tipos, ...$valores);
    }
    $stmt_count->execute();
    $res_count = $stmt_count->get_result()->fetch_assoc();
    $total_registros = (int)$res_count['total'];
    $stmt_count->close();
} else {
    $total_registros = 0;
}

$total_paginas = ceil($total_registros / $limite);

// --- PASO B: Obtener los datos paginados y ordenados ---
$sql_datos .= " ORDER BY $ordenar_por $tipo_orden LIMIT ? OFFSET ?";
$valores[] = $limite;
$valores[] = $offset;
$tipos .= "ii";

$stmt_datos = $conn->prepare($sql_datos);

if ($stmt_datos) {
    $stmt_datos->bind_param($tipos, ...$valores);
    $stmt_datos->execute();
    $result = $stmt_datos->get_result();
    
    $marcas = [];
    while ($row = $result->fetch_assoc()) {
        // Conversión limpia de tipos antes de enviar a React
        $marcas[] = [
            'idmarca'  => (int)$row['idmarca'],
            'nombre'   => $row['nombre'],
            'pais'     => $row['pais'],
            'sede'     => $row['sede'],
            'fundador' => $row['fundador'],
            'ceo'      => $row['ceo'] // Aquí viaja el ingrediente estrella
        ];
    }

    // 4. Retornamos la respuesta con la estructura exacta que tu Hook espera
    echo json_encode([
        "datos" => $marcas,
        "paginacion" => [
            "pagina_actual" => $pagina,
            "total_paginas" => $total_paginas,
            "total_registros" => $total_registros,
            "limite" => $limite
        ]
    ]);
    
    $stmt_datos->close();
} else {
    http_response_code(500);
    echo json_encode(["error" => "Error de consulta: " . $conn->error]);
}

$conn->close();
?>