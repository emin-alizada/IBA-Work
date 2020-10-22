<!DOCTYPE html>
<html lang="az" class="overflowx-h overflow-lg-v">
<head>
    <meta http-equiv="pragma" content="no-cache" />

    <link rel='icon' href='img/favicon.png' type='image/x-icon'/ >
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>IBAR</title>
    <link rel="stylesheet" href="css/vendor/bootstrap-grid.css">
    <link rel="stylesheet" href="css/vendor/selectric.css">
    <link rel="stylesheet" href="css/vendor/normalize.css">
    <link rel="stylesheet" href="css/style.css?v=<?= time() ?>">
    <link rel="stylesheet" href="css/vendor/fonts.css">
    <link rel="stylesheet" href="css/responsive.css?v=<?= time() ?>">
</head>
<body class="overflowx-h">
<?php $isLanding = strpos($_SERVER['SCRIPT_NAME'], 'landing') ?>
<div id="js-overlay-body" class="<?= ($isLanding !== false) ? '' : 'overlay' ?> fixed d-none opacity-5 bg-black"></div>
<div id="js-overlay-body-animated" class="overlay fixed opacity-5 bg-black" style="display: none"></div>
