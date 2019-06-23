<?php
$servername = "localhost";
$username = "id8941516_bebb99";
$password = "Knight99";
$dbname = "id8941516_modern_game";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

mysqli_set_charset($conn,"utf8");

?>