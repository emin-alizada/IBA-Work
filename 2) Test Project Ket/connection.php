<?php
$servername = "127.0.0.1:3306";
$user = "iba_work";
$username = "root";
$password = "";

// Create connection
$conn = new mysqli($servername, $username, $password, $user);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
//echo "Connected successfully";

?>
