<?php include "includes/config.php"; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php include "includes/head-tags-content.php" ?>
</head>
<body>
<?php include "includes/navigation-header.php" ?>

<?php include "includes/header-logo-buttons.php"?>

<?php include "includes/categories.php"; ?>

<?php include "includes/site-location.php"; ?>

<div class="container">
    <div class="hc">
        <h4 class="hc-header">Help Center</h4>
        <p class="hc-text">Everything we do, from our continuous investment in technology to the ongoing expansion of our product suite to our client-centric philosophy, is a demonstration of how dynamic FxPro really is. It is always our aim to serve the best interests of our clients and continue providing the finest online trading experience in the industry.</p>
        <div class="hc-contacts">
            <div class="hc-contacts-container">
                <p class="hc-contacts-header">For Corporate Clients</p>
                <a href="tel:+994557004343" class="hc-contacts-contact">+994 (55) 700-43-43</a>
            </div>
            <div class="hc-contacts-container">
                <p class="hc-contacts-header">Online Store</p>
                <a href="tel:+994557004343" class="hc-contacts-contact">+994 (55) 700-43-43</a>
            </div>
            <div class="hc-contacts-container">
                <p class="hc-contacts-header">Support Center</p>
                <a href="tel:+994557004343" class="hc-contacts-contact">+994 (55) 700-43-43</a>
            </div>
            <div class="hc-contacts-container">
                <p class="hc-contacts-header">Support Center</p>
                <a href="mailto:shop@example.az" class="hc-contacts-contact">shop@example.az</a>
                <a href="mailto:office@example.az" class="hc-contacts-contact">office@example.az</a>
            </div>
        </div>
    </div>
</div>


<div class="hc-faq container">
    <h4 class="hc-faq-header">FAQ</h4>
    <div class="hc-faq-content">
        <div class="hc-faq-content-selector">
            <ul class="hc-faq-content-selector-list">
                <li class="hc-faq-content-selector-list-item">
                    <button class="hc-faq-content-selector-list-item-btn hc-faq-content-selector-list-item-btn__active" data-category="general">
                        <i class="fas fa-info-circle hc-faq-content-selector-list-item-btn-icon"></i>
                        <span class="hc-faq-content-selector-list-item-btn-text">General</span>
                    </button>
                </li>
                <li class="hc-faq-content-selector-list-item">
                    <button class="hc-faq-content-selector-list-item-btn" data-category="delivery">
                        <i class="fas fa-truck hc-faq-content-selector-list-item-btn-icon"></i>
                        <span class="hc-faq-content-selector-list-item-btn-text">Delivery</span>
                    </button>
                </li>
                <li class="hc-faq-content-selector-list-item">
                    <button class="hc-faq-content-selector-list-item-btn" data-category="cancellation">
                        <i class="fas fa-times-circle hc-faq-content-selector-list-item-btn-icon"></i>
                        <span class="hc-faq-content-selector-list-item-btn-text">Cancellation</span>
                    </button>
                </li>
                <li class="hc-faq-content-selector-list-item">
                    <button class="hc-faq-content-selector-list-item-btn" data-category="payment">
                        <i class="fas fa-credit-card hc-faq-content-selector-list-item-btn-icon"></i>
                        <span class="hc-faq-content-selector-list-item-btn-text">Payment</span>
                    </button>
                </li>
            </ul>
        </div>
        <div class="hc-faq-content-container">
            <div class="hc-faq-content-item" data-category="general">
                <h6 class="hc-faq-content-item-header">Our step-by-step trading academy will guide you through the world of Forex Trading and teach you everything you need to know?</h6>
                <p class="hc-faq-content-item-description">The key trading terms can be found in the trader's glossary.</p>
                <button class="hc-faq-content-item-btn"><i class="fas fa-chevron-down"></i></button>
            </div>
            <div class="hc-faq-content-item" data-category="delivery">
                <h6 class="hc-faq-content-item-header">How many days does it take delivery?</h6>
                <p class="hc-faq-content-item-description">Usually it's one business day delivery.</p>
                <button class="hc-faq-content-item-btn"><i class="fas fa-chevron-down"></i></button>
            </div>
            <div class="hc-faq-content-item" data-category="cancellation">
                <h6 class="hc-faq-content-item-header">Can I cancell my order?</h6>
                <p class="hc-faq-content-item-description">Of course you can, but nobody is gonna return your money.</p>
                <button class="hc-faq-content-item-btn"><i class="fas fa-chevron-down"></i></button>
            </div>
            <div class="hc-faq-content-item" data-category="general">
                <h6 class="hc-faq-content-item-header">Are the products original?</h6>
                <p class="hc-faq-content-item-description">Products are 100% apple original.</p>
                <button class="hc-faq-content-item-btn"><i class="fas fa-chevron-down"></i></button>
            </div>
            <div class="hc-faq-content-item" data-category="payment">
                <h6 class="hc-faq-content-item-header">Can we pay with our kidney for apple products?</h6>
                <p class="hc-faq-content-item-description">Unfortunately we don't buy kidneys, you first need to sell it after that pay us.</p>
                <button class="hc-faq-content-item-btn"><i class="fas fa-chevron-down"></i></button>
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
