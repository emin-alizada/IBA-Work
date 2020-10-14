<?php require_once 'inc/head.php' ?>
<?php require_once 'inc/header-shortened.php' ?>

<section class="pt-lg-5 icon-lg-ibar-right bg-right-top bg-no-repeat h-600-min">
    <div class="container pt-5">
        <div class="row">
            <h1 class="col-lg-10 offset-lg-2 color-1885d3 fw-600 fs-22 fs-lg-36 mt-0 mb-4 mb-lg-5 pb-2">Randevu
                xidməti</h1>
        </div>

        <div class="row">
            <div class="offset-lg-2 col-lg-6 col-xl-4">
                <form class="js-parsley-validate" method="post" data-parsley-trigger="change input"
                      data-parsley-focus="none">
                    <div class="row mb-lg-4 pb-lg-3">
                        <span class="col-12 mb-4 mb-lg-0 pb-2 pb-lg-0">
                            <select name="" class="selectric-select radius-5 w-100 bg-transparent" required>
                                <option value="" class="d-none">Filial seçin</option>
                                <option value="1">Filial 1</option>
                                <option value="2">Filial 2</option>
                            </select>
                        </span>
                    </div>

                    <div class="row mb-lg-4 pb-lg-3">
                        <label class="col-12 mb-4 mb-lg-0 pb-2 pb-lg-0">
                            <button type="submit"
                                    class="w-100 h-50 h-lg-75 fs-18 px-4 border-0 bg-1885d3 radius-5 d-flex justify-content-center justify-content-lg-between align-items-center cursor-p">
                                <span class="color-white fw-600 fs-16 fs-lg-17 ml-2">Növbəti</span>
                                <span class="d-none d-lg-inline-block icon square-30 icon-arrow-long icon-color-white mr-2"></span>
                            </button>
                        </label>
                    </div>
                </form>
            </div>
        </div>

        <div class="row">
            <div class="offset-lg-2 col-lg-6 col-xl-4">
                <p class="link-underline d-flex flex-column d-sm-block">
                    <span class="fs-15 lh-25 fw-400">Görüşü ləğv etmək və ya dəyişmək üçün</span>
                    <a href="#" class="color-1885d3 hover hover-darker"><span class="fs-15 lh-25 fw-500 ml-sm-2 color-1885d3">Daxil olun</span></a>
                </p>
            </div>
        </div>
    </div>
</section>

<?php require_once 'inc/foot.php' ?>
