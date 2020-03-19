<?php include 'includes/config.php' ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php include 'includes/head-tags-content.php' ?>
</head>
<body>
<?php include "includes/navigation-header.php" ?>

<?php include "includes/header-logo-buttons.php" ?>

<?php include "includes/categories.php"; ?>

<?php include "includes/site-location.php"; ?>

<div class="c-info">
    <div class="container">
        <h2 class="c-info-header">Driving</h2>
        <p class="c-info-text">Take control of two supercars for two 2 lap drives around the historic Goodwood Motor
            Circuit. Choose two from seven speedy supercars from Lamborghini, Ferrari and more</p>
    </div>
</div>

<div class="c-background">
    <div class="c container">
        <div class="c-filters">
            <button class="c-filters-toggler-btn">Filters<i class="fas fa-filter"></i></button>

            <div class="c-filters-order-and-view c-filters-mobile">
                <button class="c-filters-header c-filters-order-and-view-header">Order by<i class="fas fa-chevron-down c-filters-header-icon__rotate c-filters-header-icon"></i></button>
                <div class="c-filters-order">
                    <ul class="c-filters-order-list">
                        <li class="c-filters-order-list-item">
                            <button class="c-filters-order-list-item-btn c-filters-order-list-item-btn__active">New</button>
                        </li>
                        <li class="c-filters-order-list-item">
                            <button class="c-filters-order-list-item-btn">Popularity</button>
                        </li>
                        <li class="c-filters-order-list-item">
                            <button class="c-filters-order-list-item-btn">Price(low to high)</button>
                        </li>
                        <li class="c-filters-order-list-item">
                            <button class="c-filters-order-list-item-btn">Price(high to low)</button>
                        </li>
                        <li class="c-filters-order-list-item">
                            <button class="c-filters-order-list-item-btn">Rating</button>
                        </li>
                    </ul>
                </div>
                <div class="c-filters-view">
                    <ul class="c-filters-view-list">
                        <li class="c-filters-view-list-item">
                            <button class="c-filters-view-list-item-btn c-filters-view-list-item-btn__active" data-view="card">
                                <i class="fas fa-th"></i>
                                Card
                            </button>
                        </li>
                        <li class="c-filters-view-list-item">
                            <button class="c-filters-view-list-item-btn" data-view="list">
                                <i class="fas fa-list"></i>
                                List
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="c-filters-item c-filters-mobile">
                <button class="c-filters-header">Subcategory<i class="fas fa-chevron-down c-filters-header-icon__rotate c-filters-header-icon"></i></button>
                <div class="c-filters-labels">
                    <label class="c-filters-label">Supercars
                        <input type="checkbox" checked="checked">
                        <span class="c-filters-checkmark"></span>
                    </label>
                    <label class="c-filters-label">Aston martin
                        <input type="checkbox">
                        <span class="c-filters-checkmark"></span>
                    </label>
                    <label class="c-filters-label">Ferrari
                        <input type="checkbox">
                        <span class="c-filters-checkmark"></span>
                    </label>
                    <label class="c-filters-label">Lamborghini
                        <input type="checkbox">
                        <span class="c-filters-checkmark"></span>
                    </label>
                    <label class="c-filters-label">Real Race Tracks
                        <input type="checkbox">
                        <span class="c-filters-checkmark"></span>
                    </label>
                    <label class="c-filters-label">Multiple Car Experiences
                        <input type="checkbox">
                        <span class="c-filters-checkmark"></span>
                    </label>
                    <label class="c-filters-label">Electric cars
                        <input type="checkbox">
                        <span class="c-filters-checkmark"></span>
                    </label>
                    <label class="c-filters-label">Muscle cars
                        <input type="checkbox">
                        <span class="c-filters-checkmark"></span>
                    </label>
                    <label class="c-filters-label">Go karting
                        <input type="checkbox">
                        <span class="c-filters-checkmark"></span>
                    </label>
                    <label class="c-filters-label">Off Road/ 4x4
                        <input type="checkbox">
                        <span class="c-filters-checkmark"></span>
                    </label>
                </div>
            </div>

            <div class="c-filters-item c-filters-mobile">
                <button class="c-filters-header">Price / AZN<i class="fas fa-chevron-down c-filters-header-icon__rotate c-filters-header-icon"></i></button>
                <div class="c-filters-price">
                    <input value="500" min="500" max="50000" step="500" type="range">
                    <input value="50000" min="500" max="50000" step="500" type="range">
                    <div class="c-filters-prices-text-container">
                        <input type="number" class="c-filters-prices-text" value="22">
                        <input type="number" class="c-filters-prices-text" value="55">
                    </div>
                </div>
            </div>

            <div class="c-filters-item c-filters-mobile">
                <button class="c-filters-header">Location<i class="fas fa-chevron-down c-filters-header-icon__rotate c-filters-header-icon"></i></button>
                <div class="c-filters-labels">
                    <label class="c-filters-label">Baku
                        <input type="checkbox" checked="checked">
                        <span class="c-filters-checkmark"></span>
                    </label>
                    <label class="c-filters-label">Shaki
                        <input type="checkbox">
                        <span class="c-filters-checkmark"></span>
                    </label>
                    <label class="c-filters-label">Balakan
                        <input type="checkbox">
                        <span class="c-filters-checkmark"></span>
                    </label>
                    <label class="c-filters-label">Qusar
                        <input type="checkbox">
                        <span class="c-filters-checkmark"></span>
                    </label>
                    <label class="c-filters-label">Qabala
                        <input type="checkbox">
                        <span class="c-filters-checkmark"></span>
                    </label>
                </div>
            </div>

            <div class="c-filters-item c-filters-mobile">
                <button class="c-filters-header">Rating<i class="fas fa-chevron-down c-filters-header-icon__rotate c-filters-header-icon"></i></button>
                <div class="c-filters-labels">
                    <label class="c-filters-label">
                        <span>
                            <i class="fas fa-star c-filters-star"></i>
                            <i class="fas fa-star c-filters-star"></i>
                            <i class="fas fa-star c-filters-star"></i>
                            <i class="fas fa-star c-filters-star"></i>
                            <i class="fas fa-star c-filters-star"></i>
                            (12)
                        </span>
                        <input type="checkbox" checked="checked">
                        <span class="c-filters-checkmark"></span>
                    </label>
                    <label class="c-filters-label">
                        <span>
                            <i class="fas fa-star c-filters-star"></i>
                            <i class="fas fa-star c-filters-star"></i>
                            <i class="fas fa-star c-filters-star"></i>
                            <i class="fas fa-star c-filters-star"></i>
                            <i class="far fa-star c-filters-star"></i>
                            &up (45)
                        </span>
                        <input type="checkbox">
                        <span class="c-filters-checkmark"></span>
                    </label>
                    <label class="c-filters-label">
                        <span>
                            <i class="fas fa-star c-filters-star"></i>
                            <i class="fas fa-star c-filters-star"></i>
                            <i class="fas fa-star c-filters-star"></i>
                            <i class="far fa-star c-filters-star"></i>
                            <i class="far fa-star c-filters-star"></i>
                            &up (67)
                        </span>
                        <input type="checkbox">
                        <span class="c-filters-checkmark"></span>
                    </label>
                    <label class="c-filters-label">
                        <span>
                            <i class="fas fa-star c-filters-star"></i>
                            <i class="fas fa-star c-filters-star"></i>
                            <i class="far fa-star c-filters-star"></i>
                            <i class="far fa-star c-filters-star"></i>
                            <i class="far fa-star c-filters-star"></i>
                            &up (21)
                        </span>
                        <input type="checkbox">
                        <span class="c-filters-checkmark"></span>
                    </label>
                    <label class="c-filters-label">
                        <span>
                            <i class="fas fa-star c-filters-star"></i>
                            <i class="far fa-star c-filters-star"></i>
                            <i class="far fa-star c-filters-star"></i>
                            <i class="far fa-star c-filters-star"></i>
                            <i class="far fa-star c-filters-star"></i>
                            &up (4)
                        </span>
                        <input type="checkbox">
                        <span class="c-filters-checkmark"></span>
                    </label>
                </div>
            </div>

        </div>
        <div class="c-products">
            <div class="c-products-item">
                <div class="c-products-item-photo">
                    <img src="img/category-driving-1.jpg" alt="" class="c-products-item-photo-item">
                </div>
                <div class="c-products-item-content">
                    <div>
                        <h4 class="c-products-item-content-header">Handcraft with craft gerhod lorem ipsum</h4>
                        <div class="c-products-item-content-rating">
                            <i class="fas fa-star c-products-item-content-rating-star                         c-products-item-content-rating-star__active"></i>
                            <i class="fas fa-star c-products-item-content-rating-star                         c-products-item-content-rating-star__active"></i>
                            <i class="fas fa-star c-products-item-content-rating-star                         c-products-item-content-rating-star__active"></i>
                            <i class="fas fa-star c-products-item-content-rating-star                         c-products-item-content-rating-star__active"></i>
                            <i class="fas fa-star c-products-item-content-rating-star"></i>
                        </div>
                        <div class="c-products-item-content-location-people">
                            <p class="c-products-item-content-location"><span><i
                                            class="fas fa-map-marker-alt  c-products-item-content-location-people-icon"></i></span>Baku,
                                Quba</p>
                            <p class="c-products-item-content-people"><span><i
                                            class="fas fa-user  c-products-item-content-location-people-icon"></i></span>for
                                2 persons (couple)</p>
                        </div>
                        <div class="c-products-item-content-description">
                            <ul class="c-products-item-content-description-list">
                                <li class="c-products-item-content-description-list-item">Drive five supercars from an
                                    amazing selection including Ferrari and Lamborghini
                                </li>
                                <li class="c-products-item-content-description-list-item">Speed around a quality venue or
                                    Real Race Track on 15 miles total driving distance
                                </li>
                                <li class="c-products-item-content-description-list-item">Available weekdays AND weekends
                                    from February to November
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="c-products-item-content-price-and-cart">
                        <div class="c-products-item-content-price">
                            <p class="c-products-item-content-price-sale">185 AZN</p>
                            <p class="c-products-item-content-price-current">120 AZN</p>
                        </div>
                        <div class="c-products-item-content-cart">
                            <button class="c-products-item-content-cart-button"><i class="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="c-products-item">
                <div class="c-products-item-photo">
                    <img src="img/category-driving-2.jpg" alt="" class="c-products-item-photo-item">
                </div>
                <div class="c-products-item-content">
                    <div>
                        <h4 class="c-products-item-content-header">Handcraft with craft gerhod lorem ipsum</h4>
                        <div class="c-products-item-content-rating">
                            <i class="fas fa-star c-products-item-content-rating-star                         c-products-item-content-rating-star__active"></i>
                            <i class="fas fa-star c-products-item-content-rating-star                         c-products-item-content-rating-star__active"></i>
                            <i class="fas fa-star c-products-item-content-rating-star                         c-products-item-content-rating-star__active"></i>
                            <i class="fas fa-star c-products-item-content-rating-star                         c-products-item-content-rating-star__active"></i>
                            <i class="fas fa-star c-products-item-content-rating-star"></i>
                        </div>
                        <div class="c-products-item-content-location-people">
                            <p class="c-products-item-content-location"><span><i
                                            class="fas fa-map-marker-alt  c-products-item-content-location-people-icon"></i></span>Baku,
                                Quba</p>
                            <p class="c-products-item-content-people"><span><i
                                            class="fas fa-user  c-products-item-content-location-people-icon"></i></span>for
                                2 persons (couple)</p>
                        </div>
                        <div class="c-products-item-content-description">
                            <ul class="c-products-item-content-description-list">
                                <li class="c-products-item-content-description-list-item">Drive five supercars from an
                                    amazing selection including Ferrari and Lamborghini
                                </li>
                                <li class="c-products-item-content-description-list-item">Speed around a quality venue or
                                    Real Race Track on 15 miles total driving distance
                                </li>
                                <li class="c-products-item-content-description-list-item">Available weekdays AND weekends
                                    from February to November
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="c-products-item-content-price-and-cart">
                        <div class="c-products-item-content-price">
                            <p class="c-products-item-content-price-sale">185 AZN</p>
                            <p class="c-products-item-content-price-current">120 AZN</p>
                        </div>
                        <div class="c-products-item-content-cart">
                            <button class="c-products-item-content-cart-button"><i class="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="c-products-item">
                <div class="c-products-item-photo">
                    <img src="img/category-driving-3.jpg" alt="" class="c-products-item-photo-item">
                </div>
                <div class="c-products-item-content">
                    <div>
                        <h4 class="c-products-item-content-header">Handcraft with craft gerhod lorem ipsum</h4>
                        <div class="c-products-item-content-rating">
                            <i class="fas fa-star c-products-item-content-rating-star                         c-products-item-content-rating-star__active"></i>
                            <i class="fas fa-star c-products-item-content-rating-star                         c-products-item-content-rating-star__active"></i>
                            <i class="fas fa-star c-products-item-content-rating-star                         c-products-item-content-rating-star__active"></i>
                            <i class="fas fa-star c-products-item-content-rating-star                         c-products-item-content-rating-star__active"></i>
                            <i class="fas fa-star c-products-item-content-rating-star"></i>
                        </div>
                        <div class="c-products-item-content-location-people">
                            <p class="c-products-item-content-location"><span><i
                                            class="fas fa-map-marker-alt  c-products-item-content-location-people-icon"></i></span>Baku,
                                Quba</p>
                            <p class="c-products-item-content-people"><span><i
                                            class="fas fa-user  c-products-item-content-location-people-icon"></i></span>for
                                2 persons (couple)</p>
                        </div>
                        <div class="c-products-item-content-description">
                            <ul class="c-products-item-content-description-list">
                                <li class="c-products-item-content-description-list-item">Drive five supercars from an
                                    amazing selection including Ferrari and Lamborghini
                                </li>
                                <li class="c-products-item-content-description-list-item">Speed around a quality venue or
                                    Real Race Track on 15 miles total driving distance
                                </li>
                                <li class="c-products-item-content-description-list-item">Available weekdays AND weekends
                                    from February to November
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="c-products-item-content-price-and-cart">
                        <div class="c-products-item-content-price">
                            <p class="c-products-item-content-price-sale">185 AZN</p>
                            <p class="c-products-item-content-price-current">120 AZN</p>
                        </div>
                        <div class="c-products-item-content-cart">
                            <button class="c-products-item-content-cart-button"><i class="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="c-products-item">
                <div class="c-products-item-photo">
                    <img src="img/category-driving-1.jpg" alt="" class="c-products-item-photo-item">
                </div>
                <div class="c-products-item-content">
                    <div>
                        <h4 class="c-products-item-content-header">Handcraft with craft gerhod lorem ipsum</h4>
                        <div class="c-products-item-content-rating">
                            <i class="fas fa-star c-products-item-content-rating-star                         c-products-item-content-rating-star__active"></i>
                            <i class="fas fa-star c-products-item-content-rating-star                         c-products-item-content-rating-star__active"></i>
                            <i class="fas fa-star c-products-item-content-rating-star                         c-products-item-content-rating-star__active"></i>
                            <i class="fas fa-star c-products-item-content-rating-star                         c-products-item-content-rating-star__active"></i>
                            <i class="fas fa-star c-products-item-content-rating-star"></i>
                        </div>
                        <div class="c-products-item-content-location-people">
                            <p class="c-products-item-content-location"><span><i
                                            class="fas fa-map-marker-alt  c-products-item-content-location-people-icon"></i></span>Baku,
                                Quba</p>
                            <p class="c-products-item-content-people"><span><i
                                            class="fas fa-user  c-products-item-content-location-people-icon"></i></span>for
                                2 persons (couple)</p>
                        </div>
                        <div class="c-products-item-content-description">
                            <ul class="c-products-item-content-description-list">
                                <li class="c-products-item-content-description-list-item">Drive five supercars from an
                                    amazing selection including Ferrari and Lamborghini
                                </li>
                                <li class="c-products-item-content-description-list-item">Speed around a quality venue or
                                    Real Race Track on 15 miles total driving distance
                                </li>
                                <li class="c-products-item-content-description-list-item">Available weekdays AND weekends
                                    from February to November
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="c-products-item-content-price-and-cart">
                        <div class="c-products-item-content-price">
                            <p class="c-products-item-content-price-sale">185 AZN</p>
                            <p class="c-products-item-content-price-current">120 AZN</p>
                        </div>
                        <div class="c-products-item-content-cart">
                            <button class="c-products-item-content-cart-button"><i class="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="c-products-item">
                <div class="c-products-item-photo">
                    <img src="img/category-driving-2.jpg" alt="" class="c-products-item-photo-item">
                </div>
                <div class="c-products-item-content">
                    <div>
                        <h4 class="c-products-item-content-header">Handcraft with craft gerhod lorem ipsum</h4>
                        <div class="c-products-item-content-rating">
                            <i class="fas fa-star c-products-item-content-rating-star                         c-products-item-content-rating-star__active"></i>
                            <i class="fas fa-star c-products-item-content-rating-star                         c-products-item-content-rating-star__active"></i>
                            <i class="fas fa-star c-products-item-content-rating-star                         c-products-item-content-rating-star__active"></i>
                            <i class="fas fa-star c-products-item-content-rating-star                         c-products-item-content-rating-star__active"></i>
                            <i class="fas fa-star c-products-item-content-rating-star"></i>
                        </div>
                        <div class="c-products-item-content-location-people">
                            <p class="c-products-item-content-location"><span><i
                                            class="fas fa-map-marker-alt  c-products-item-content-location-people-icon"></i></span>Baku,
                                Quba</p>
                            <p class="c-products-item-content-people"><span><i
                                            class="fas fa-user  c-products-item-content-location-people-icon"></i></span>for
                                2 persons (couple)</p>
                        </div>
                        <div class="c-products-item-content-description">
                            <ul class="c-products-item-content-description-list">
                                <li class="c-products-item-content-description-list-item">Drive five supercars from an
                                    amazing selection including Ferrari and Lamborghini
                                </li>
                                <li class="c-products-item-content-description-list-item">Speed around a quality venue or
                                    Real Race Track on 15 miles total driving distance
                                </li>
                                <li class="c-products-item-content-description-list-item">Available weekdays AND weekends
                                    from February to November
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="c-products-item-content-price-and-cart">
                        <div class="c-products-item-content-price">
                            <p class="c-products-item-content-price-sale">185 AZN</p>
                            <p class="c-products-item-content-price-current">120 AZN</p>
                        </div>
                        <div class="c-products-item-content-cart">
                            <button class="c-products-item-content-cart-button"><i class="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="c-products-item">
                <div class="c-products-item-photo">
                    <img src="img/category-driving-3.jpg" alt="" class="c-products-item-photo-item">
                </div>
                <div class="c-products-item-content">
                    <div>
                        <h4 class="c-products-item-content-header">Handcraft with craft gerhod lorem ipsum</h4>
                        <div class="c-products-item-content-rating">
                            <i class="fas fa-star c-products-item-content-rating-star                         c-products-item-content-rating-star__active"></i>
                            <i class="fas fa-star c-products-item-content-rating-star                         c-products-item-content-rating-star__active"></i>
                            <i class="fas fa-star c-products-item-content-rating-star                         c-products-item-content-rating-star__active"></i>
                            <i class="fas fa-star c-products-item-content-rating-star                         c-products-item-content-rating-star__active"></i>
                            <i class="fas fa-star c-products-item-content-rating-star"></i>
                        </div>
                        <div class="c-products-item-content-location-people">
                            <p class="c-products-item-content-location"><span><i
                                            class="fas fa-map-marker-alt  c-products-item-content-location-people-icon"></i></span>Baku,
                                Quba</p>
                            <p class="c-products-item-content-people"><span><i
                                            class="fas fa-user  c-products-item-content-location-people-icon"></i></span>for
                                2 persons (couple)</p>
                        </div>
                        <div class="c-products-item-content-description">
                            <ul class="c-products-item-content-description-list">
                                <li class="c-products-item-content-description-list-item">Drive five supercars from an
                                    amazing selection including Ferrari and Lamborghini
                                </li>
                                <li class="c-products-item-content-description-list-item">Speed around a quality venue or
                                    Real Race Track on 15 miles total driving distance
                                </li>
                                <li class="c-products-item-content-description-list-item">Available weekdays AND weekends
                                    from February to November
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="c-products-item-content-price-and-cart">
                        <div class="c-products-item-content-price">
                            <p class="c-products-item-content-price-sale">185 AZN</p>
                            <p class="c-products-item-content-price-current">120 AZN</p>
                        </div>
                        <div class="c-products-item-content-cart">
                            <button class="c-products-item-content-cart-button"><i class="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="c-pagination-and-results">
                <div class="c-pagination">
                    <ul class="c-pagination-list">
                        <li class="c-pagination-list-item">
                            <a href="#" class="c-pagination-list-item-link"><i class="fas fa-chevron-left"></i></a>
                        </li>
                        <li class="c-pagination-list-item">
                            <a href="#" class="c-pagination-list-item-link">1</a>
                        </li>
                        <li class="c-pagination-list-item">
                            <a href="#" class="c-pagination-list-item-link">2</a>
                        </li>
                        <li class="c-pagination-list-item">
                            <a href="#" class="c-pagination-list-item-link c-pagination-list-item-link__others">...</a>
                        </li>
                        <li class="c-pagination-list-item">
                            <a href="#" class="c-pagination-list-item-link">23</a>
                        </li>
                        <li class="c-pagination-list-item">
                            <a href="#" class="c-pagination-list-item-link">24</a>
                        </li>
                        <li class="c-pagination-list-item">
                            <a href="#" class="c-pagination-list-item-link"><i class="fas fa-chevron-right"></i></a>
                        </li>

                    </ul>
                </div>
                <p class="c-pagination-results">Showing products  1-30 in 500</p>
            </div>
        </div>
    </div>
</div>

<?php include "includes/footer.php"; ?>


<script src="js/jquery.js"></script>
<script src="slick/slick.js"></script>
<script src="js/script.js"></script>
</body>
</html>
