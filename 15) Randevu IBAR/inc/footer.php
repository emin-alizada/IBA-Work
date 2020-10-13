<footer class="pt-5 mt-4 mt-lg-5">
    <section class="border-top mt-4 d-none d-lg-block">
        <div class="container">
            <div class="row align-items-center h-65">
                <div class="col-lg-9 d-flex align-items-center">
                    <a href="index.php">
                        <img src="img/logo.svg" class="h-35 d-block w-100-max" alt="">
                    </a>

                    <div class="ml-5 d-flex hover-link-underline">
                        <a href="#" class="mr-4 color-262626">İnteraktiv kart</a>
                        <a href="#" class="mr-4 color-262626">İnteraktiv kart</a>
                        <a href="#" class="mr-4 color-262626">İnteraktiv kart</a>
                        <a href="#" class="mr-4 color-262626">İnteraktiv kart</a>
                    </div>
                </div>

                <div class="col-lg-3 d-flex justify-content-end">
                    <a href="#" class="d-flex align-items-center">
                        <span class="icon icon-internet-banking icon-2x"></span>
                        <span class="fw-600 ml-2">İnternet Bankçılıq</span>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Mobile -->
    <section class="border-top d-lg-none">
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex h-75 align-items-center justify-content-between">
                    <a href="index.php">
                        <figure><img src="img/logo.svg" alt=""></figure>
                    </a>

                    <a href="tel:937" class="d-flex align-items-center color-666 ml-3">
                        <span class="icon icon-phone square-12 icon-color"></span>
                        <span class="fs-18 ml-1 fw-600">937</span>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section class="bg-f9f9f9 py-4">
        <div class="container mt-lg-3">

            <!-- Mobile -->
            <div class="row d-lg-none">
                <div class="col-12">
                    <div class="breadcrumb d-inline-flex flex-wrap">
                        <a href="index.php" class="color-262626 fw-600 mb-3">Fərdi</a>
                        <a href="home-business.php" class="opacity-5 color-262626 fw-600 mb-3">Korporativ bankçılıq</a>
                        <a href="home-smb.php" class="opacity-5 color-262626 fw-600 mb-3">KOB bankçılığı</a>
                        <a href="home-investing.php" class="opacity-5 color-262626 fw-600 mb-3">Maliyyə və investisiya</a>
                    </div>
                </div>
            </div>


            <nav class="row pb-3 pb-lg-4 hover-link-underline">
            <?php
            $wordsFooter = ['Online biznes', 'Elektron xidmətlər', 'Sənədli əməliyyatlar', 'Xidmət şəbəkəsi', 'Kartlar'];
            $headingsFooter = ['Fərdi', 'Korporativ bankçılıq', 'KOB bankçılığ', 'Maliyyə və investisiya', 'Bank'];
            for ($i = 0; $i < 5; $i++) : ?>
                <div class="col-lg-2 d-none d-lg-block">
                    <h4 class="fs-17 fw-600 mt-2 pr-3"><?= $headingsFooter[$i] ?></h4>

                    <div class="d-flex flex-column pr-3">
                        <span class="mb-3">
                            <a href="about.php" class="d-inline-block color-666 lh-21">Haqqımızda</a>
                        </span>
                    <?php for($j = 0; $j < rand(5, 10); $j++) : ?>
                        <span class="mb-3">
                            <a href="#" class="d-inline-block color-666 lh-21"><?= $wordsFooter[rand(0, 4)] ?></a>
                        </span>
                    <?php endfor; ?>
                    </div>
                </div>
            <?php endfor; ?>

                <div class="col-lg-2">
                    <h4 class="fs-17 fw-600 my-2 mb-lg-4 pb-1 pb-lg-0 pr-3">Əlaqə</h4>

                    <div class="d-flex flex-column pr-3">
                        <span class="mb-2 mb-lg-3 lh-21">Azərbaycan, Bakı şəh., AZ 1010, 28 May küç. 33</span>
                        <span class="mb-2 mb-lg-3 lh-21">Tel.: <a href="tel:0124930091" class="color-262626">(994 12) 493 00 91</a></span>
                        <span class="mb-2 mb-lg-3 lh-21">E-poçt: <a href="mailto:office@ibar.az" class="color-262626">office@ibar.az</a></span>
                        <span class="mb-lg-3 lh-21 d-none d-lg-block">
                            <a href="tel:937" class="d-inline-flex align-items-center color-262626">
                                <span class="icon icon-phone-262626 square-12"></span>
                                <span class="fs-14 ml-2 fs-18 fw-600">937</span>
                            </a>
                        </span>
                    </div>
                </div>
            </nav>

            <div class="d-none d-lg-flex mt-lg-2 mb-lg-5">
                <a href="" class="d-flex p-3 bg-ececec color-666">
                    <span class="icon icon-app-store icon-2x icon-color-626262"></span>
                    <div class="ml-2">
                        <span class="d-block fw-500 fs-9">Загрузите с</span>
                        <span class="d-block fw-500 fs-14">App Store</span>
                    </div>
                </a>

                <a href="" class="d-flex p-3 bg-ececec color-666 ml-2">
                    <span class="icon icon-play-store icon-2x icon-color-626262"></span>
                    <div class="ml-2">
                        <span class="d-block fw-500 fs-9">Загрузите с</span>
                        <span class="d-block fw-500 fs-14">Google Play</span>
                    </div>
                </a>
            </div>

            <div class="row mb-lg-2 flex-column-reverse flex-lg-row align-items-center">
                <div class="col-12 col-lg-4">
                    <span class="opacity-5 fs-13 fs-lg-14">© Azərbaycan Beynəlxalq Bankı - Bütün hüquqlar qorunur</span>
                </div>

                <div class="col-12 col-lg-4 mb-3 mb-lg-0">
                    <div class="d-flex justify-content-lg-center">
                        <a href="#" class="mr-3"><img src="img/logo-infobank.png" alt=""></a>
                        <a href="#" class="mr-3"><img src="img/logo-virtual-qarabag.png" alt=""></a>
                        <a href="#" class="mr-3"><img src="img/logo-adif.svg" alt=""></a>
                    </div>
                </div>

                <div class="col-12 d-lg-none">
                    <div class="d-flex mb-4">
                        <a href="#" class="d-flex p-3 bg-ececec color-666">
                            <span class="icon icon-app-store icon-2x icon-color-626262"></span>
                            <div class="ml-2">
                                <span class="d-block fw-500 fs-9">Загрузите с</span>
                                <span class="d-block fw-500 fs-14">App Store</span>
                            </div>
                        </a>

                        <a href="#" class="d-flex p-3 bg-ececec color-666 ml-2">
                            <span class="icon icon-play-store icon-2x icon-color-626262"></span>
                            <div class="ml-2">
                                <span class="d-block fw-500 fs-9">Загрузите с</span>
                                <span class="d-block fw-500 fs-14">Google Play</span>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-12 col-lg-4 mb-4 mb-lg-0 d-flex justify-content-lg-end align-items-center">
                    <div class="mob-social">
                        <a href="#" class="radius-50 d-inline-flex justify-content-center align-items-center bg-f0f0f0 square-48 square-lg-30 mr-2 mr-lg-1">
                            <span class="icon square-20 square-lg-16 icon-ig"></span>
                        </a>
                        <a href="#" class="radius-50 d-inline-flex justify-content-center align-items-center bg-f0f0f0 square-48 square-lg-30 mr-2 mr-lg-1">
                            <span class="icon square-20 square-lg-16 icon-fb"></span>
                        </a>
                        <a href="#" class="radius-50 d-inline-flex justify-content-center align-items-center bg-f0f0f0 square-48 square-lg-30 mr-2 mr-lg-1">
                            <span class="icon square-20 square-lg-16 icon-youtube"></span>
                        </a>
                        <a href="#" class="radius-50 d-inline-flex justify-content-center align-items-center bg-f0f0f0 square-48 square-lg-30 mr-2 mr-lg-1">
                            <span class="icon square-20 square-lg-16 icon-twitter"></span>
                        </a>
                        <a href="#" class="radius-50 d-inline-flex justify-content-center align-items-center bg-f0f0f0 square-48 square-lg-30 mr-2 mr-lg-1">
                            <span class="icon square-20 square-lg-16 icon-linkedin"></span>
                        </a>
                    </div>

                    <div class="d-none d-lg-block ml-3">
                        <span>
                            <select name="" class="selectric-tooltip label-fs-14" id="js-selectric-lang-footer">
                                <!-- don't change value. it's for flag icons -->
                                <option value="az" data-url="https://ibar.az/az" class="d-none">AZ</option>
                                <option value="uk" data-url="https://ibar.az/en">English</option>
                                <option value="ru" data-url="https://ibar.az/ru">Русский</option>
                            </select>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</footer>