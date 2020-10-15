<?php require_once 'inc/head.php' ?>
<?php require_once 'inc/header-shortened.php' ?>

<section class="pt-lg-5 icon-lg-ibar-right bg-right-top bg-no-repeat h-600-min">
    <div class="d-lg-none bg-e7e7e7 py-2">
        <a href="#" class="d-flex justify-content-center align-items-center color-666 py-1">
            <span class="icon icon-arrow-long rotate-180 icon-color-626262 mr-2"></span>
            <span class="fw-500 fs-13">Geri qayıtmaq</span>
        </a>
    </div>

    <div class="container pt-5">
        <div class="row">
            <h1 class="col-lg-10 offset-lg-2 color-1885d3 fw-600 fs-22 fs-lg-36 mt-0 mb-4 mb-lg-5 pb-2">Müraciətə düzəliş et</h1>
        </div>

        <div class="row">
            <div class="col-lg-2 d-none d-lg-block">
                <a href="#" class="d-flex flex-column align-items-start color-262626">
                    <span class="fw-500 mb-2 mt-1">Geri qayıtmaq</span>
                    <span class="icon icon-arrow-long rotate-180"></span>
                </a>
            </div>

            <div class="col-lg-8">

                <div class="mb-4">
                    <p>
                        <span class="fs-17 lh-21 color-666 fw-400">Seçdiyiniz filial: </span>
                        <span class="fw-500 fs-20 lh-25"> Nəsimi filialı</span>
                    </p>
                </div>

                <form class="js-parsley-validate" method="post" data-parsley-trigger="change input" data-parsley-focus="none">
                    <div class="row mb-lg-4 pb-lg-3">
                            <span class="col-lg-6 mb-4 mb-lg-0 pb-2 pb-lg-0">
                                <select name="" class="selectric-select radius-5 w-100 bg-transparent" required>
                                    <option value="" class="d-none">Kredit üzrə müraciət</option>
                                    <option value="1">Filial 1</option>
                                    <option value="2">Filial 2</option>
                                </select>
                            </span>

                        <span class="col-lg-6 mb-4 mb-lg-0 pb-2 pb-lg-0">
                                <select name="" class="selectric-select radius-5 w-100 bg-transparent" required>
                                    <option value="" class="d-none">20/05/2020</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                            </span>
                    </div>

                    <div class="row mb-lg-4 pb-lg-3">
                        <span class="col-lg-6 mb-4 mb-lg-0 pb-2 pb-lg-0">
                            <select name="" class="selectric-select radius-5 w-100 bg-transparent" required>
                                <option value="" class="d-none">14:00</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </span>

                        <label class="col-lg-6 mb-4 mb-lg-0 pb-2 pb-lg-0">
                            <button type="submit" class="w-100 h-50 h-lg-75 fs-18 px-4 border-0  radius-5 bg-1885d3 d-flex justify-content-center justify-content-lg-between align-items-center cursor-p">
                                <span class="color-white fw-600 fs-16 fs-lg-17 ml-2">Dəyiş</span>
                                <span class="d-none d-lg-inline-block icon square-30 icon-arrow-long icon-color-white mr-2"></span>
                            </button>
                        </label>
                    </div>
                </form>

                <div class="row">
                    <div class="col-12">
                        <p class="link-underline d-flex flex-column d-sm-block">
                            <span class="fs-15 lh-25 fw-400">Görüşü ləğv etmək və ya dəyişmək üçün</span>
                            <a href="#" class="color-1885d3 hover hover-darker"><span class="fs-15 lh-25 fw-500 ml-sm-2 color-1885d3">Daxil olun</span></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<?php require_once 'inc/foot.php' ?>