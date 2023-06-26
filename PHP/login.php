<?php
require_once 'Conexion.php';
// Obtener el valor del parámetro 'opcion' pasado en la solicitud GET
$correo = $_GET['correo'];
$pass = $_GET['pass'];

$sql = "select * from `login usuario` where email='".$correo."' and password='".$pass."';";
// Resto del código para ejecutar la consulta y generar la respuesta JSON
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    echo "1";
}else{
    echo "0";
}
?>