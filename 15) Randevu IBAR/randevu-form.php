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
            <h1 class="col-lg-10 offset-lg-2 color-1885d3 fw-600 fs-22 fs-lg-36 mt-0 mb-4 mb-lg-5 pb-2">Randevu xidməti</h1>
        </div>

        <div class="row">
            <div class="col-lg-2 d-none d-lg-block">
                <a href="#" class="d-flex flex-column align-items-start color-262626">
                    <span class="fw-500 mb-2 mt-1">Geri qayıtmaq</span>
                    <span class="icon icon-arrow-long rotate-180"></span>
                </a>
            </div>

            <div class="col-lg-8">
                <form class="js-parsley-validate mb-5" method="post" data-parsley-trigger="change input" data-parsley-focus="none">
                    <div class="row mb-lg-4 pb-lg-3">
                            <span class="col-lg-6 mb-4 mb-lg-0 pb-2 pb-lg-0">
                                <select name="" class="selectric-select radius-5 w-100 bg-transparent"
                                        data-parsley-error-message="Error mesaji"
                                        required>
                                    <option value="" class="d-none">Filial seçin</option>
                                    <option value="1">Filial 1</option>
                                    <option value="2">Filial 2</option>
                                </select>
                            </span>

                        <span class="col-lg-6 mb-4 mb-lg-0 pb-2 pb-lg-0">
                                <select name="" class="selectric-select radius-5 w-100 bg-transparent"
                                        data-parsley-error-message="Error mesaji"
                                        required>
                                    <option value="" class="d-none">Xidmət növünü seçin</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                            </span>
                    </div>

                    <div class="row mb-lg-4 pb-lg-3">
                            <span class="col-lg-6 mb-4 mb-lg-0 pb-2 pb-lg-0">
                                <select name="" class="selectric-select radius-5 w-100 bg-transparent"
                                        data-parsley-error-message="Error mesaji"
                                        required>
                                    <option value="" class="d-none">Tarix seçin</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                            </span>

                        <span class="col-lg-6 mb-4 mb-lg-0 pb-2 pb-lg-0">
                                <select name="" class="selectric-select radius-5 w-100 bg-transparent"
                                        data-parsley-error-message="Error mesaji"
                                        required>
                                    <option value="" class="d-none">Görüş vaxtını seçin</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                            </span>
                    </div>

                    <div class="row mb-lg-4 pb-lg-3">
                        <div class="col-lg-6 mb-4 mb-lg-0 pb-2 pb-lg-0">
                            <div class="input-container">
                                <input type="text" class="form-input input-animated px-3 px-lg-4" placeholder=" " minlength="3" pattern="/^[a-zA-ZİÇÖÜçöüĞ-ğıŞ-şƏə\s]*$/"
                                       data-parsley-required-message="Bu bolme doldurulmalidir"
                                       data-parsley-minlength-message="En azi 3 simvol"
                                       data-parsley-pattern-message="Duzgun shekilde doldurun"
                                       required>
                                <label class="input-animated-label">Adınız</label>
                            </div>
                        </div>

                        <div class="col-lg-6 mb-4 mb-lg-0 pb-2 pb-lg-0">
                            <div class="input-container">
                                <input type="text" class="form-input input-animated px-3 px-lg-4" placeholder=" " minlength="3" pattern="/^[a-zA-ZİÇÖÜçöüĞ-ğıŞ-şƏə\s]*$/"
                                       data-parsley-required-message="Bu bolme doldurulmalidir"
                                       data-parsley-minlength-message="En azi 3 simvol"
                                       data-parsley-pattern-message="Duzgun shekilde doldurun"
                                       required>
                                <label class="input-animated-label">Soyadınız</label>
                            </div>
                        </div>
                    </div>

                    <div class="row mb-lg-4 pb-lg-3">
                        <div class="col-lg-6 mb-4 mb-lg-0 pb-2 pb-lg-0">
                            <div class="input-container">
                                <input type="text" class="form-input input-animated js-mob-number px-3 px-lg-4" placeholder=" " pattern="^\+994 [0-9]{2} [0-9]{3}-[0-9]{2}-[0-9]{2}$"
                                       data-parsley-required-message="Bu bolme doldurulmalidir"
                                       data-parsley-pattern-message="Duzgun shekilde doldurun"
                                       required>
                                <label class="input-animated-label">Mobil telefon nömrəniz</label>
                            </div>
                        </div>

                        <div class="col-lg-6 mb-4 mb-lg-0 pb-2 pb-lg-0">
                            <div class="input-container">
                                <input type="email" class="form-input input-animated px-3 px-lg-4" placeholder=" "
                                       data-parsley-required-message="Bu bolme doldurulmalidir"
                                       data-parsley-minlength-message="En azi 3 simvol"
                                       data-parsley-type-message="Duzgun mail addressi doldurun"
                                       required>
                                <label class="input-animated-label">E-mail </label>
                            </div>
                        </div>
                    </div>

                    <div class="row mb-lg-4 pb-lg-3">
                            <label class="col-lg-6 mb-4 mb-lg-0 pb-2 pb-lg-0">
                                <button type="button" class="w-100 h-50 h-lg-75 fs-18 px-4 border-0 bg-f4f4f4 d-flex justify-content-center  align-items-center cursor-p">
                                    <span class="color-666 fw-600 fs-16 fs-lg-17 ml-2">Captcha</span>
                                </button>
                            </label>

                            <label class="col-lg-6 mb-4 mb-lg-0 pb-2 pb-lg-0">
                                <button type="submit" class="w-100 h-50 h-lg-75 fs-18 px-4 border-0  radius-5 bg-1885d3 d-flex justify-content-center justify-content-lg-between align-items-center cursor-p">
                                    <span class="color-white fw-600 fs-16 fs-lg-17 ml-2">Müraciəti göndər</span>
                                    <span class="d-none d-lg-inline-block icon square-30 icon-arrow-long icon-color-white mr-2"></span>
                                </button>
                            </label>
                        </div>
                </form>

                <div class="mb-5">
                    <h6 class="fw-500 fs-16 lh-21 mb-3 mt-4 pt-2">Diqqət:</h6>
                    <p class="fw-400 fs-15 lh-21 color-666 mb-4">Nəzərinizə çatdırırıq ki, hər bir müştəri gün ərzində “R@ndevu” xidmətindən yalnız bir dəfə istifadə edə bilər. Müştəri xidmətdən istifadə üçün eyni gündə ardıcıl qeydiyyatdan keçdiyi halda, ilk müraciət əsas sayılır, digər müraciətlər avtomatik ləğv edilir.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<?php require_once 'inc/foot.php' ?>
