<?php require_once 'inc/head.php' ?>
<?php require_once 'inc/header-shortened.php' ?>

<section class="pt-lg-5 icon-lg-ibar-right bg-right-top bg-no-repeat h-600-min">
    <div class="d-lg-none bg-e7e7e7 py-2">
        <a href="#" class="d-flex justify-content-center align-items-center color-666 py-1">
            <span class="fw-500 fs-13">Statusu yoxla</span>
            <span class="icon icon-arrow-long icon-color-626262 ml-2"></span>
        </a>
    </div>

    <div class="container pt-5">
        <div class="row">
            <h1 class="col-lg-10 offset-lg-2 color-1885d3 fw-600 fs-22 fs-lg-36 mt-0 mb-4 mb-lg-5 pb-2">Müraciət et</h1>
        </div>

        <div class="row">
            <div class="offset-lg-2 col-lg-8">
                <form class="js-parsley-validate" method="post" data-parsley-trigger="change input" data-parsley-focus="none">
                    <div class="row mb-lg-4 pb-lg-3">
                            <span class="col-lg-6 mb-4 mb-lg-0 pb-2 pb-lg-0">
                                <select name="" class="selectric-select radius-5 w-100 bg-transparent" required>
                                    <option value="" class="d-none">Müraciətin növü</option>
                                    <option value="1">Teklif</option>
                                    <option value="2">Shikayet</option>
                                </select>
                            </span>

                            <div class="col-lg-6 mb-4 mb-lg-0 pb-2 pb-lg-0">
                                <div class="input-container">
                                    <input type="text" class="form-input input-animated px-3 px-lg-4" placeholder=" " minlength="3" pattern="/^[a-zA-ZİÇÖÜçöüĞ-ğıŞ-şƏə\s]*$/" required>
                                    <label class="input-animated-label">Ad, soyad, ata adı</label>
                                </div>
                            </div>
                        </div>

                    <div class="row mb-lg-4 pb-lg-3">
                            <div class="col-lg-6 mb-4 mb-lg-0 pb-2 pb-lg-0">
                                <div class="input-container">
                                    <input type="text" class="form-input input-animated js-date-mask px-3 px-lg-4" placeholder=" " pattern="/^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/g" required>
                                    <label class="input-animated-label">Doğum tarixiniz</label>
                                </div>
                            </div>

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
                                    <label class="input-animated-label">Qeydiyyat və ya faktiki ünvan</label>
                                </div>
                            </div>

                            <div class="col-lg-6 mb-4 mb-lg-0 pb-2 pb-lg-0">
                                <label class="form-input px-3 px-lg-4 border-dashed cursor-p">
                                    <span class="color-666 text-dots">Faylı seç</span>
<!--                                    changes-->
                                    <input type="file" name="photo-front" class="d-none" data-default-text="Faylı seç">
<!--                                    end changes-->
<!--                                    Add this to input for validation-->
<!--                                    data-parsley-extension-check="jpg, jpeg"-->
<!--                                    data-parsley-size-check="2000"-->
                                </label>
                            </div>
                        </div>

                    <div class="row mb-lg-4 pb-lg-2">
                            <label class="col-lg-12 mb-4 mb-lg-0 pb-2 pb-lg-0">
                                <textarea name="" id="" class="form-input px-3 py-3 px-lg-4 h-140 resize-none" placeholder="Müraciətinizi qeyd edin" minlength="4" required></textarea>
                            </label>
                    </div>

                    <div class="row mb-lg-4 pb-lg-3">
                            <label class="col-lg-6 mb-4 mb-lg-0 pb-2 pb-lg-0">
                                <button type="button" class="w-100 h-50 h-lg-75 fs-18 px-4 border-0 bg-f4f4f4 d-flex justify-content-center  align-items-center cursor-p">
                                    <span class="color-666 fw-600 fs-16 fs-lg-17 ml-2">Captcha</span>
                                </button>
                            </label>

                            <label class="col-lg-6 mb-4 mb-lg-0 pb-2 pb-lg-0">
                                <button type="submit" class="w-100 h-50 h-lg-75 fs-18 px-4 border-0 bg-1885d3 d-flex justify-content-center justify-content-lg-between align-items-center cursor-p">
                                    <span class="color-white fw-600 fs-16 fs-lg-17 ml-2">Müraciəti göndər</span>
                                    <span class="d-none d-lg-inline-block icon square-30 icon-arrow-long icon-color-white mr-2"></span>
                                </button>
                            </label>
                        </div>
                </form>
            </div>

            <div class="col-lg-2 d-none d-lg-block">
                <a href="#" class="d-flex flex-column align-items-end color-262626">
                    <span class="fw-500 mb-2 mt-1">Statusu yoxla</span>
                    <span class="icon icon-arrow-long"></span>
                </a>
            </div>

        </div>
    </div>
</section>

<?php require_once 'inc/foot.php' ?>
