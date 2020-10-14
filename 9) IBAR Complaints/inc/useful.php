<section class="mt-5 mt-lg-0">
    <div class="container">
        <div class="row">
            <div class="col-lg-10 mx-lg-auto">
                <h2 class="fw-600 fs-22 fs-lg-36 my-0 mb-lg-5 pb-4">Sizin üçün maraqlı ola bilər</h2>

                <div class="row d-none d-lg-flex">
                    <?php for ($i = 0; $i < 3; $i++) : ?>
                        <div class="col-lg-4">
                            <figure class="bg-f3f1ec d-flex justify-content-center">
                                <img src="img/credit-img-<?= $i+1 ?>.jpg" alt="" class="w-100-max obj-cover h-250">
                            </figure>

                            <div class="py-3 bg-white">
                                <div class="py-1">
                                    <h4 class="m-0 fw-500 fs-20">Bizim kartlar</h4>

                                    <p class="overflow-h h-65 lh-21 color-666">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius neque, veritatis? Aspernatur aut dolore ducimus eligendi est facere hic iure, maxime necessitatibus officiis qui quod ratione sapiente suscipit, voluptates? Sit.</p>

                                    <a href="#" class="link-arrow arrow-dark mt-4">Daha ətraflı</a>
                                </div>
                            </div>
                        </div>
                    <?php endfor ?>
                </div>

                <!-- Mobile Sliders -->
                <div class="d-lg-none ml-n2">
                    <div class="swiper-container overflowx-h swiper-auto-slide">
                        <div class="swiper-wrapper">
                            <?php for($i = 2; $i < 4; $i++) : ?>
                                <div class="swiper-slide">
                                    <div class="row no-gutters">
                                        <div class="col-12">
                                            <figure class="overflow-h">
                                                <img src="img/credit-img-<?= $i ?>.jpg" class="d-block w-100 h-200 obj-cover" alt="">
                                            </figure>

                                            <div>
                                                <h4 class="m-0 fw-600 fs-20 mt-4">Bizim kartlar</h4>

                                                <p class="fs-15 lh-18 color-666">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius neque, veritatis? Aspernatur aut dolore ducimus eligendi est facere hic iure, maxime necessitatibus officiis qui quod ratione sapiente suscipit, voluptates? Sit.</p>

                                                <a href="#" class="link-arrow arrow-dark mt-2">Daha ətraflı</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <?php endfor ?>
                        </div>

                        <div class="swiper-pagination-my swiper-pagination-mobile d-flex justify-content-center mt-5"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>