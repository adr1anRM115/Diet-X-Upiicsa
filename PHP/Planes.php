<?php
require_once 'Conexion.php';

// Obtener el valor del parámetro 'opcion' pasado en la solicitud GET
$opcion = $_GET['opcion'];

// Realizar un switch basado en el valor de 'opcion'
switch ($opcion) {
    case 1:
        // Código para la opción 1
        $sql = "SELECT * FROM planes where visible=1";
        // Resto del código específico para la opción 1
        break;
    case 2:
        // Código para la opción 2
        $sql = "select * from planes where `like`=1 and visible=1;";
        // Resto del código específico para la opción 2
        break;
    case 3:
        // Código para la opción 3
        $sql = "select * from planes where visible=0;";
        // Resto del código específico para la opción 3
        break;
    case 4:
        // Código para la opción 4
        $sql = "select * from planes where follow=1 and visible=1;";
        // Resto del código específico para la opción 4
        break;
    default:
        // Opción por defecto si no coincide con ninguna de las anteriores
        $sql = "SELECT * FROM planes";
        // Resto del código para la opción por defecto
        break;
}

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
