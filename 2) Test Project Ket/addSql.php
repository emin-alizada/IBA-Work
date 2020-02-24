<?php
include 'connection.php';
$name = $_POST['name'];
$mail = $_POST['mail'];
$text = $_POST['text'];
$cmd = "insert into test_project_ket values(null, '$name','$mail', '$text')";
$conn->query($cmd);

header("Location: index.php");
