<?php
include "connection.php";

function initialValidation($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}


//$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
//
//
//if ($contentType === "application/json") {
//    //Receive the RAW post data.
//    $content = trim(file_get_contents("php://input"));
//
//    $partnership = json_decode($content, true);
//
//    if (is_array($partnership)) {
//        $mail = initialValidation($partnership["mail"]);
//        $firstName = initialValidation($partnership["firstName"]);
//        $mobileNumber = initialValidation($partnership["mobileNumber"]);
//        $companyName = initialValidation($partnership["companyName"]);
//        $message = initialValidation($partnership["message"]);
//        $validationProblem = false;
//        if (!filter_var($mail, FILTER_VALIDATE_EMAIL)) {
//            $validationProblem = true;
//        }
//        if (!preg_match("/^[a-zA-Z ]*$/",$firstName) || strlen($firstName) < 3) {
//            $validationProblem = true;
//        }
//        if (!preg_match("/^(\+)([1-9]{3})(\d{9})$/",$mobileNumber)) {
//            $validationProblem = true;
//        }
//        if (strlen($companyName) < 3) {
//            $validationProblem = true;
//        }
//
//        if (!$validationProblem){
//            if ($insertPartnership->execute()) {
//                echo json_encode("success");
//            } else {
//                echo json_encode($insertPartnership->error);
//            }
//        }
//        else {
//            echo json_encode("Validation Problem");
//        }
//    } else {
//        // Send error back to user.
//        echo json_encode("Error Occurred, please try again");
//    }
//}

//ajax method

$mail = initialValidation($_POST["mail"]);
$firstName = initialValidation($_POST["firstName"]);
$mobileNumber = initialValidation($_POST["mobileNumber"]);
$companyName = initialValidation($_POST["companyName"]);
$message = initialValidation($_POST["message"]);
$validationProblem = false;
if (!filter_var($mail, FILTER_VALIDATE_EMAIL)) {
    $validationProblem = true;
}
if (!preg_match("/^[a-zA-Z ]*$/",$firstName) || strlen($firstName) < 3) {
    $validationProblem = true;
}
if (!preg_match("/^(\+)([1-9]{3})(\d{9})$/",$mobileNumber)) {
    $validationProblem = true;
}
if (strlen($companyName) < 3) {
    $validationProblem = true;
}

if (!$validationProblem){
    if ($insertPartnership->execute()) {
        echo json_encode("success");
    } else {
        echo json_encode($insertPartnership->error);
    }
}
else {
    echo json_encode("Validation Problem");
}


?>
