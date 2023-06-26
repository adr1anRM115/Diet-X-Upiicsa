<?php
require_once 'Conexion.php';

// Obtener el valor del parámetro 'opcion' pasado en la solicitud GET
$opcion = $_GET['ID_plan'];


$sql = "UPDATE dietxupiicsa.planes t SET t.visible = 1 WHERE t.ID_plan = ".$opcion.";";


// Resto del código para ejecutar la consulta y generar la respuesta JSON
$result = $conn->query($sql);

// Verificar si hay resultados
if ($result->num_rows > 0) {
    // Array para almacenar los resultados
    $rows = array();

    // Obtener cada fila de resultados
    while ($row = $result->fetch_assoc()) {
        $rows[] = $row;
    }

    // Devolver los resultados como JSON
    echo json_encode($rows);
} else {
    echo "No se encontraron resultados.";
}

// Cerrar la conexión a la base de datos
$conn->close();
?>
