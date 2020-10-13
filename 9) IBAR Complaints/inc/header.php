<?php error_reporting(0);
ini_set('display_errors', 'Off');
?>
<?php $checkFileName = end(explode('/', $_SERVER['SCRIPT_NAME'])); ?>

<header id="js-header" class="bg-white hover-node fixed pos-lg-static header-lg-animate animated-up <?php if($checkFileName === 'map.php') echo 'd-lg-none' ?>">
    <section class="fixed-lg bg-f6f7f8">
        <div class="container-fluid">
            <!-- header first line -->
            <div class="row align-items-center h-50">
                <div class="col-lg-9 d-none d-lg-flex">
                    <div class="hover-link-underline">
                        <a href="about.php" class="mr-4 color-666 fs-14">Haqqımızda</a>
                        <a href="#" class="mr-4 color-666 fs-14">Ofis və bankomatlar</a>
                        <a href="#" class="mr-4 color-666 fs-14">Əlaqə</a>
                        <a href="#" class="mr-4 color-666 fs-14">e-pin</a>
                    </div>
                </div>

                <!-- For Mobile -->
                <?php
                $filenameArr = [
                    'Fərdi' => 'index.php',
                    'Korporativ bankçılıq' => 'home-business.php',
                    'KOB bankçılığı' => 'home-smb.php',
                    'Maliyyə və investisiya' => 'home-investing.php'
                ];
                $filenameCurrent = end(explode('/',  trim($_SERVER['REQUEST_URI'], '/')));
                ?>
                <div class="col-7 d-lg-none">
                    <label class="d-inline-flex fw-600 ml-n2">
                        <select name="" class="selectric-tooltip label-fs-14" id="js-selectric-banking">
                        <?php foreach ($filenameArr as $k => $filename) : ?>
                            <option data-url="<?= $filename ?>" <?= ($filename === $filenameCurrent) ? 'selected' : '' ?>><?= $k ?></option>
                        <?php endforeach; ?>
                        </select>
                    </label>
                </div>

                <div class="col-5 col-lg-3 d-flex justify-content-end">
                    <span class="d-flex align-items-center mr-3 pr-1 cursor-p events-none hover" id="js-search-open">
                        <span class="icon icon-search square-12 icon-color"></span>
                        <span class="fs-14 ml-2 color-666">Axtarış</span>
                    </span>
                    <span>
                        <select name="" class="selectric-tooltip label-fs-14" id="js-selectric-lang">
                            <!-- don't change value. it's for flag icons -->
                            <option value="az" data-url="https://ibar.az/az" class="d-none">AZ</option>
                            <option value="uk" data-url="https://ibar.az/en">English</option>
                            <option value="ru" data-url="https://ibar.az/ru">Русский</option>
                        </select>
                    </span>

                    <a href="tel:937" class="d-flex align-items-center color-666 ml-3">
                        <span class="icon icon-phone square-12 icon-color"></span>
                        <span class="fs-14 ml-1 fw-600">937</span>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <div class="header-s bg-white fixed-lg d-none d-lg-block">
        <!-- header second line -->
        <section class="border-bottom border-f6f7f8">
            <div class="container-fluid">
                <div class="header-s2 row align-items-center">
                    <div class="col-lg-10 col-xl-9 d-flex align-items-center">
                        <a href="index.php" class="d-block">
                            <figure>
                                <img src="img/logo.svg" class="h-35 d-block w-100-max" alt="">
                            </figure>
                        </a>

                        <?php

                        $filenameCurrent = end(explode('/',  trim($_SERVER['REQUEST_URI'], '/')));
                        ?>
                        <div class="ml-5 breadcrumb d-flex hover">
                        <?php foreach ($filenameArr as $k => $filename) : ?>
                            <a href="<?= $filename ?>" class="<?= ($filename === $filenameCurrent) ? '' : 'opacity-5' ?> color-262626 fw-500"><?= $k ?></a>
                        <?php endforeach; ?>
                        </div>
                    </div>

                    <div class="col-lg-2 col-xl-3 d-none d-lg-flex justify-content-end">
                        <a href="#" class="d-flex align-items-center justify-content-end ml-lg-5 ml-xl-0">
                            <span class="icon icon-internet-banking icon-2x"></span>
                            <span class="fw-600 ml-2">İnternet Bankçılıq</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- header third line -->
        <section>
            <div class="container-fluid">
                <nav class="nav-header pos-relative">
                    <ul id="js-header-s3" class="header-s3 d-flex list-reset menu">
                        <li class="pr-4">
                            <span><a href="credits.php" class="color-17253a fw-400">Kreditlər</a></span>
                        </li>
                        <li class="pr-4">
                            <span><a href="deposits.php" class="color-17253a fw-400">Depozitlər</a></span>
                        </li>
                        <li class="pr-4">
                            <span>
                                <span class="color-17253a fw-400 cursor-p">Kartlar</span>
                            </span>
                            <div class="nav-sub row full-bg-side to-left to-right hover-link-underline">
                                <span class="icon icon-close"></span>
                            <?php for ($i = 0; $i < 3; $i++) : ?>
                                <div class="col-lg-2">
                                    <h4 class="fs-24 fw-500 mt-0">Debit kartlar</h4>
                                    <div class="d-flex flex-column">
                                        <span class="mb-3"><a href="cards.php" class="lh-21 fs-17 color-262626">Status kartlar</a></span>
                                        <span class="mb-3"><a href="cards.php" class="lh-21 fs-17 color-262626">Status kartlar</a></span>
                                        <span class="mb-3"><a href="cards.php" class="lh-21 fs-17 color-262626">Status kartlar</a></span>
                                    </div>
                                </div>
                            <?php endfor ?>

                                <div class="col-lg-4 offset-1">
                                    <figure><img src="img/card-menu.jpg" alt=""></figure>
                                    <h4 class="fs-24 fw-500 mt-4 mb-3">Master Card World Elite</h4>
                                    <span class="fs-16 mb-3 d-flex">Ərizə göndərərək onlayn həll alın</span>
                                    <a href="#" class="color-262626 btn border border-262626 mt-4 fs-16 fw-500 hover hover-link-262626">Sifariş etmək</a>
                                </div>
                            </div>
                        </li>
                        <li class="pr-4">
                            <span><a href="money-transfer.php" class="color-17253a fw-400">Pul köçürmələri</a></span>
                            <div class="nav-sub row full-bg-side to-left to-right">
                                <span class="icon icon-close z-10"></span>

                                <div class="col-lg-5 col-xl-4 p-0">
                                    <div class="d-flex flex-wrap">
                                        <span class="mb-3 col-6"><a href="#" class="fs-17 color-262626">Status kartlar</a></span>

                                    </div>
                                </div>

                                <div class="col-lg-7 col-xl-7 offset-xl-1 d-flex align-items-center pr-4 border-left border-ebebeb pl-5">
                                    <div>
                                        <figure><img src="https://via.placeholder.com/250x156.png" alt=""></figure>
                                    </div>
                                    <div class="ml-5">
                                        <h4 class="fs-24 fw-500 mt-0 mb-3">Master Card World Elite</h4>
                                        <span class="fs-16 mb-3 d-flex">Ərizə göndərərək onlayn həll alın</span>
                                        <a href="#" class="color-262626 btn border border-262626 mt-2 fs-16 fw-500 hover hover-link-262626">Sifariş etmək</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="pr-4">
                            <span><a href="#" class="color-17253a fw-400">Kreditlər</a></span>
                        </li>
                        <li class="pr-4">
                            <span><a href="#" class="color-17253a fw-400">Kreditlər</a></span>
                            <div class="nav-sub row full-bg-side to-left to-right">
                                <span class="icon icon-close z-10"></span>

                                <div class="col-lg-5 col-xl-4 p-0">
                                    <div class="d-flex flex-wrap">
                                        <span class="mb-3 col-6"><a href="#" class="fs-17 color-262626">Status kartlar</a></span>
                                        <span class="mb-3 col-6"><a href="#" class="fs-17 color-262626">Kredit ödəyin</a></span>
                                        <span class="mb-3 col-6"><a href="#" class="fs-17 color-262626">Status kartlar</a></span>
                                        <span class="mb-3 col-6"><a href="#" class="fs-17 color-262626">Arayış sifariş edin</a></span>
                                        <span class="mb-3 col-6"><a href="#" class="fs-17 color-262626">Məsafədən hesabın açılması</a></span>
                                        <span class="mb-3 col-6"><a href="#" class="fs-17 color-262626">Status kartlar</a></span>
                                        <span class="mb-3 col-6"><a href="#" class="fs-17 color-262626">Arayış sifariş edin</a></span>
                                        <span class="mb-3 col-6"><a href="#" class="fs-17 color-262626">Məsafədən hesabın açılması</a></span>
                                    </div>
                                </div>

                                <div class="col-lg-7 col-xl-7 offset-xl-1 d-flex align-items-center pr-4 border-left border-ebebeb pl-5">
                                    <div>
                                        <figure><img src="https://via.placeholder.com/250x156.png" alt=""></figure>
                                    </div>
                                    <div class="ml-5">
                                        <h4 class="fs-24 fw-500 mt-0 mb-3">Master Card World Elite</h4>
                                        <span class="fs-16 mb-3 d-flex">Ərizə göndərərək onlayn həll alın</span>
                                        <a href="#" class="color-262626 btn border border-262626 mt-2 fs-16 fw-500 hover hover-link-262626">Sifariş etmək</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="pr-4">
                            <span><a href="#" class="color-17253a fw-400">Bank Online</a></span>
                            <div class="nav-sub row full-bg-side to-left to-right">
                                <span class="icon icon-close z-10"></span>

                                <div class="col-lg-5 col-xl-4 p-0">
                                    <div class="d-flex flex-wrap">
                                        <span class="mb-3 col-6"><a href="#" class="fs-17 color-262626">Status kartlar</a></span>
                                        <span class="mb-3 col-6"><a href="#" class="fs-17 color-262626">Kredit ödəyin</a></span>
                                        <span class="mb-3 col-6"><a href="#" class="fs-17 color-262626">Status kartlar</a></span>
                                        <span class="mb-3 col-6"><a href="#" class="fs-17 color-262626">Arayış sifariş edin</a></span>
                                    </div>
                                </div>

                                <div class="col-lg-7 col-xl-7 offset-xl-1 d-flex align-items-center pr-4 border-left border-ebebeb pl-5">
                                    <div>
                                        <figure><img src="https://via.placeholder.com/250x156.png" alt=""></figure>
                                    </div>
                                    <div class="ml-5">
                                        <h4 class="fs-24 fw-500 mt-0 mb-3">Master Card World Elite</h4>
                                        <span class="fs-16 mb-3 d-flex">Ərizə göndərərək onlayn həll alın</span>
                                        <a href="#" class="color-262626 btn border border-262626 mt-2 fs-16 fw-500 hover hover-link-262626">Sifariş etmək</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="pr-4">
                            <span><a href="#" class="color-17253a fw-400">Kreditlər</a></span>
                        </li>
                        <li class="pr-4">
                            <span><a href="#" class="color-17253a fw-400">Kreditlər</a></span>
                        </li>
                        <li class="pr-4">
                            <span><a href="#" class="color-17253a fw-400">Kreditlər</a></span>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    </div>



    <!-- Mobile Header Parts -->
    <section class="d-lg-none top-50 bg-white">
        <div class="container-lg">
            <div class="row">
                <div class="col-12 d-flex h-75 align-items-center justify-content-between">
                    <a href="index.php">
                        <figure><img src="img/logo.svg" alt=""></figure>
                    </a>

                    <span class="hamburger hamburger--squeeze events-none">
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </span>
                </div>
            </div>
        </div>

        <!-- For Mobile Menu -->
        <div id="js-menu-mobile" class="hover-node bg-white pos-absolute w-100 z-111 left-100p h-100-vh overflowy-s">
            <div class="d-flex flex-column">
                <a href="#" class="d-flex align-items-center justify-content-center bg-2e55a6 p-2">
                    <span class="icon icon-internet-banking icon-2x icon-color-white"></span>
                    <span class="fw-600 ml-2 color-white">İnternet Bankçılıq</span>
                </a>
            </div>


            <div class="d-flex justify-content-between hover-link-underline p-3 border-bottom border-e4e4e4">
                <a href="about.php" class="fs-14 color-666 fs-14">Haqqımızda</a>
                <a href="#" class="fs-14 color-666 fs-14">Ofis və bankomatlar</a>
                <a href="#" class="fs-14 color-666 fs-14">Əlaqə</a>
                <a href="#" class="fs-14 color-666 fs-14">e-pin</a>
            </div>

            <div class="d-flex flex-column accordion-menu-mob" id="js-accordion-menu">
                <?php
                $mobMenuHeadings = ['Kreditlər', 'Depozitlər', 'Kartlar', 'Pul köçürmələri', 'Cari hesab', 'Elektron xidmətlər', 'Bank Online'];
                for($i = 0; $i < 7; $i++) : ?>
                    <div class="ac px-3">
                        <h4 class="ac-q fw-400 fs-18 m-0 py-3"><?= $mobMenuHeadings[$i] ?></h4>

                        <div class="ac-a">
                            <div class="d-flex flex-column mb-2">
                                <span class="fs-13 fw-500 color-9f9f9f mb-2 pb-1">Debit kartlar</span>
                                <a href="#" class="fs-16 color-262626 mb-2 pb-1">Status kartlar</a>
                                <a href="#" class="fs-16 color-262626 mb-2 pb-1">Ekskluziv kartlar</a>
                                <a href="#" class="fs-16 color-262626 mb-2 pb-1">Virtual kartlar</a>
                            </div>

                            <div class="d-flex flex-column mb-2">
                                <span class="fs-13 fw-500 color-9f9f9f mb-2 pb-1">Debit kartlar</span>
                                <a href="#" class="fs-16 color-262626 mb-2 pb-1">Status kartlar</a>
                                <a href="#" class="fs-16 color-262626 mb-2 pb-1">Ekskluziv kartlar</a>
                                <a href="#" class="fs-16 color-262626 mb-2 pb-1">Virtual kartlar</a>
                            </div>
                        </div>
                    </div>
                <?php endfor?>
            </div>
        </div>
    </section>

    <div class="container-fluid d-none pos-absolute pos-lg-fixed bg-white opacity-0 top-50 hover" id="js-search-bar">
        <div class="row">
            <div class="col-12">
                <form action="" class="col-lg-12 px-0 d-flex align-items-center">
                    <label class="w-100 pos-relative">
                        <span class="d-flex pos-absolute left-0 bg-9f9f9f top-center"></span>
                        <input type="text" class="w-100 h-75 h-lg-140 fs-18 fs-lg-40 fw-300 pr-3 pr-lg-5 border-0 bg-transparent color-9f9f9f" placeholder="Sizə necə kömək edə bilərik?">
                    </label>

                    <label class="right-0">
                        <div class="d-flex align-items-center h-100p pl-3 cursor-p outline-0 border-0 bg-transparent " id="js-search-close">
                            <span class="icon square-20 icon-close-light"></span>
                        </div>
                    </label>
                </form>
            </div>
        </div>
    </div>
</header>
