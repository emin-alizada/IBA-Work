<?php
include "connection.php";
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/dataFromDB.css">
    <title>Document</title>
</head>
<body>
<a href="index.php">Back to page</a>
<div class="grid">
    <?php
    $result = $conn->query('select * from test_project_ket');
    if ($result->num_rows>0){
        echo
        '<p class="db-header">ID</p>
<p class="db-header">Name</p>
<p class="db-header">Mail</p>
<p class="db-header">Text</p>';
        while ($row = $result->fetch_assoc()){
            $id = $row["id"];
            $name = $row["name"];
            $mail = $row["mail"];
            $text = $row["message"];
            echo
            "<p class=\"db-content-id\">$id</p>
<p class=\"db-content-name\">$name</p>
<p class=\"db-content-mail\">$mail</p>
<p class=\"db-content-text\">$text</p>";
        }
    }
    else{
        echo '<div class="no-results">
    <p>No results in Database</p>
</div>';
    }
    ?>
</div>

</body>
</html>
