<?php
require_once 'Conexion.php';

$correo = $_GET['correo'];
$pass = $_GET['pass'];
$name = $_GET['name'];

$sql = "INSERT INTO dietxupiicsa.`login usuario` (nombre, password, email) VALUES ('".$name."', '".$pass."', '".$correo."');";
$result = $conn->query($sql);

if ($result) {
    $affectedRows = $conn->affected_rows;
    if ($affectedRows > 0) {
        echo "1";
    } else {
        echo "0";
    }
} else {
    echo "2" . $conn->error;
}
?>
