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
            <h1 class="col-lg-10 offset-lg-2 color-1885d3 fw-600 fs-22 fs-lg-36 mt-0 mb-4 mb-lg-5 pb-2">Müraciət et</h1>
        </div>

        <div class="row">
            <div class="col-lg-2 d-none d-lg-block">
                <a href="#" class="d-flex flex-column align-items-start color-262626">
                    <span class="fw-500 mb-2 mt-1">Geri qayıtmaq</span>
                    <span class="icon icon-arrow-long rotate-180"></span>
                </a>
            </div>

            <div class="col-lg-8">
                <form class="js-parsley-validate" method="post" data-parsley-trigger="change input" data-parsley-focus="none">
                    <div class="row mb-lg-4 pb-lg-3">
                            <div class="col-lg-6 mb-4 mb-lg-0 pb-2 pb-lg-0">
                                <div class="input-container">
                                    <input type="text" class="form-input input-animated js-mob-number px-3 px-lg-4" placeholder=" " pattern="^\+994 [0-9]{2} [0-9]{3}-[0-9]{2}-[0-9]{2}$" required>
                                    <label class="input-animated-label">Mobil telefon nömrəniz</label>
                                </div>
                            </div>
                        </div>

                    <div class="row mb-lg-4 pb-lg-3">
                            <div class="col-lg-6 mb-4 mb-lg-0 pb-2 pb-lg-0">
                                <div class="input-container">
                                    <input type="text" class="form-input input-animated px-3 px-lg-4" placeholder=" " required>
                                    <label class="input-animated-label">Rdv code</label>
                                </div>
                            </div>
                    </div>

                    <div class="row mb-lg-4 pb-lg-3">
                        <label class="col-lg-6 mb-4 mb-lg-0 pb-2 pb-lg-0">
                                <button type="submit" class="w-100 h-50 h-lg-75 fs-18 px-4 border-0 bg-1885d3 d-flex justify-content-center justify-content-lg-between align-items-center cursor-p">
                                    <span class="color-white fw-600 fs-16 fs-lg-17 ml-2">Düzəliş et</span>
                                    <span class="d-none d-lg-inline-block icon square-30 icon-arrow-long icon-color-white mr-2"></span>
                                </button>
                            </label>
                        </div>
                </form>
            </div>
        </div>
    </div>
</section>

<?php require_once 'inc/foot.php' ?>
