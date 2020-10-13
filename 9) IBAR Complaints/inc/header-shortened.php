<?php //$checkFileName = end(explode('/', $_SERVER['SCRIPT_NAME'])); ?>

<header class="bg-white pos-sticky top-0 hover-node header-shortened">
    <div class="header-s bg-white d-lg-block">
        <section class="border-bottom border-f6f7f8 py-2 py-lg-4">
            <div class="container-fluid">
                <div class="header-s2 row align-items-center">
                    <div class="col-6 d-flex align-items-center">
                        <a href="index.php" class="d-block">
                            <figure>
                                <img src="img/logo.svg" class="h-35 d-block w-100-max" alt="">
                            </figure>
                        </a>
                    </div>

                    <div class="col-6 d-flex align-items-center justify-content-end">
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
                        <?php if(isset($_GET['type'])){ ?>
                            <?php if($_GET['type'] == 'muraciet'){ ?>
                                <a href="#" class="d-none d-lg-flex align-items-center justify-content-end ml-lg-5">
                                    <span class="icon icon-internet-banking icon-2x"></span>
                                    <span class="fw-600 ml-2">İnternet Bankçılıq</span>
                                </a>
                            <?php }elseif($_GET['type'] == 'internship'){ ?>
                                <a href="#" class="d-none d-md-flex bg-1885d3 radius-3 color-white py-2 px-4 ml-md-5">
                                    <span class="fw-500">Statusu yoxla</span>
                                </a>
                            <?php } elseif($_GET['type'] == 'internship-check'){ ?>
                            <a href="#" class="d-none d-md-flex bg-2e55a6 radius-3 color-white py-2 px-4 ml-md-5">
                                <span class="fw-500">Qeydiyyatdan keç</span>
                            </a>
                            <?php } ?>

                        <?php }else{ ?>
                            <a href="#" class="d-none d-lg-flex align-items-center justify-content-end ml-lg-5">
                                <span class="icon icon-internet-banking icon-2x"></span>
                                <span class="fw-600 ml-2">İnternet Bankçılıq</span>
                            </a>
                        <?php } ?>


                    </div>
                </div>
            </div>
        </section>
    </div>

    <div class="d-flex flex-column d-lg-none">
        <a href="#" class="d-flex align-items-center justify-content-center bg-2e55a6 p-2">
            <span class="icon icon-internet-banking icon-2x icon-color-white"></span>
            <span class="fw-600 ml-2 color-white">İnternet Bankçılıq</span>
        </a>
    </div>
</header>
