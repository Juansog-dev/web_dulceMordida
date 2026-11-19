<?php
// 1. CABECERAS CORS (CRÍTICO: Evita que Netlify bloquee la petición)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// 2. DATA DE DULCE MORDIDA 
// (Aquí puedes incluir tu conexión PDO a la BD si lo requieres más adelante)

   $datosGrafico = [
    ["nombre" => "Croissants", "cantidad" => 240],
    ["nombre" => "Tortas Finitas", "cantidad" => 180],
    ["nombre" => "Muffins de Arandano", "cantidad" => 145],
    ["nombre" => "Tartas de Fresa", "cantidad" => 95],
   ["nombre" => "Cheesecake de Maracuya", "cantidad" => 175],
    
    // --- Nuevos postres e insumos ---
 
    ["nombre" => "Cinnamon Rolls", "cantidad" => 160],
    ["nombre" => "Croissant de Almendras", "cantidad" => 130],
    ["nombre" => "Torta Tres Leches", "cantidad" => 125],
    ["nombre" => "Alfajores Artesanales", "cantidad" => 110],
    ["nombre" => "Macarons surtidos", "cantidad" => 105],
    ["nombre" => "Brownies con Nuez", "cantidad" => 90],
   
];


// 3. RESPUESTA EN FORMATO JSON
http_response_code(200);
echo json_encode($datosGrafico);
?>