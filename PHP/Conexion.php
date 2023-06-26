
<?php
$servername = "localhost"; // Cambia "localhost" si tu servidor de base de datos no está en la misma máquina
$username = "root";
$password = "ssjdiosazul"; //Pasword
$database = "dietxupiicsa"; // Reemplaza "nombre_de_tu_base_de_datos" con el nombre real de tu base de datos

// Crear una conexión
$conn = new mysqli($servername, $username, $password, $database);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error al conectar a la base de datos: " . $conn->connect_error);
}




?>
