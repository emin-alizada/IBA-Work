<?php include "includes/config.php"; ?>
<!DOCTYPE html>
<html lang="en">
<head>
<?php include "includes/head-tags-content.php"; ?>
</head>
<body>

<?php include "includes/navigation-header.php" ?>

<?php include "includes/header-logo-buttons.php"?>

<?php include "includes/categories.php"; ?>

<?php include "includes/site-location.php"; ?>

<div class="container">
    <div class="partner ">
        <h4 class="partner-header">Partnership</h4>
        <p class="partner-text">Everything we do, from our continuous investment in technology to the ongoing expansion of our product suite to our client-centric philosophy, is a demonstration of how dynamic FxPro really is. It is always our aim to serve the best interests of our clients and continue providing the finest online trading experience in the industry.</p>
        <p class="parner-subheader">The standard Lorem Ipsum passage, used since the 1500s</p>
        <p class="partner-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
    </div>
</div>

<div class="container">
    <form action="" class="partner-form">
        <h4 class="partner-form-header">Send Us A Message</h4>
        <div class="partner-form-inputs">
            <label class="partner-form-input-container">
                Mail address
                <input type="email" placeholder="emin@gmail.com" class="partner-form-input">
            </label>
            <label class="partner-form-input-container">
                First Name
                <input type="text" placeholder="Emin Alizada" class="partner-form-input">
            </label>
            <label class="partner-form-input-container">
                Mobile
                <input type="number" placeholder="+994506666666" class="partner-form-input">
            </label>
            <label class="partner-form-input-container">
                Company Name
                <input type="text" placeholder="International Bank of Azerbaijan" class="partner-form-input">
            </label>
            <label class="partner-form-input-container">
                Message
                <textarea placeholder="Your message here..." class="partner-form-input"></textarea>
            </label>
            <p class="partner-form-terms-conditions">
                By creating your account, you agree to our <a href="#" class="partner-form-terms-conditions-link">Terms and Conditions</a> & <a href="#" class="partner-form-terms-conditions-link">Privacy Policy</a>
            </p>
            <input type="submit" value="Send us a message" class="partner-form-submit">
        </div>
    </form>
</div>

<?php include "includes/footer.php"; ?>

<script src="js/jquery.js"></script>
<script src="slick/slick.js"></script>
<script src="js/script.js"></script>
</body>
</html>