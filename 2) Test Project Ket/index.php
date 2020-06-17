<?php
include 'connection.php'
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=Raleway:200,300,400,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/reset.css">
    <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
            integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
            crossorigin="anonymous"
    />
    <link rel="stylesheet" href="css/style.css">
    <title>Ket</title>
</head>
<body>

<header class="header">
    <nav class="header-nav container">
        <div class="header-nav-logo-container">
            <a href="#" class="header-nav-logo-container-link-photo"><img src="img/logo.png" alt="Logo KET" class="header-nav-logo-container-link-photo"></a>
        </div>
        <ul class="header-nav-links">
            <li class="header-nav-links-item"><a href="#" class="header-nav-links-item-link">Home</a></li>
            <li class="header-nav-links-item"><a href="#" class="header-nav-links-item-link">Services</a></li>
            <li class="header-nav-links-item"><a href="#" class="header-nav-links-item-link">Portfolio</a></li>
            <li class="header-nav-links-item"><a href="#" class="header-nav-links-item-link">About</a></li>
            <li class="header-nav-links-item"><a href="#" class="header-nav-links-item-link">News</a></li>
            <li class="header-nav-links-item"><a href="#" class="header-nav-links-item-link">Contact</a></li>
            <li class="header-nav-links-item"><a href="dataFromDB.php" class="header-nav-links-item-link">Results</a></li>
        </ul>
    </nav>
</header>

<section class="wmw">
    <h3 class="wmw-header">WE MAKE WEBSITES</h3>
    <button class="wmw-button button">START TOUR</button>
</section>

<section class="services container">
    <div class="services-card">
        <img src="img/icon1.png" alt="" class="services-card-icon">
        <h3 class="services-card-header">WEB DESIGN</h3>
        <p class="services-card-text">Eum cu tantas legere complectitur</p>
    </div>
    <div class="services-card"><img src="img/icon2.png" alt="" class="services-card-icon">
        <h3 class="services-card-header">GRAPHIC DESIGN</h3>
        <p class="services-card-text">Eum cu tantas legere complectitur, hinc utamur ea eam</p>
    </div>
    <div class="services-card"><img src="img/icon3.png" alt="" class="services-card-icon">
        <h3 class="services-card-header">PROGRAMMING</h3>
        <p class="services-card-text">Eum cu tantas legere complectitur, hinc utamur ea eam</p>
    </div>
    <div class="services-card"><img src="img/icon4.png" alt="" class="services-card-icon">
        <h3 class="services-card-header">PHOTOGRAPHY</h3>
        <p class="services-card-text">Eum cu tantas legere complectitur, hinc utamur ea eam</p>
    </div>
</section>

<section class="fr-bgc">
    <div class="fr container">
        <ul class="fr-header">
            <li class="fr-header-item">START TOUR</li>
            <li class="fr-header-item fr-header-item-active">FOR ALL DEVICES</li>
        </ul>
        <div class="fr-content">
            <div class="fr-content-photo">
                <img src="img/phones.png" alt="">
            </div>
            <div class="fr-content-text">
                <h3 class="fr-content-text-header">Fully Responsive</h3>
                <p class="fr-content-text-description">Eum cu tantas legere complectitur, hinc utamur ea eam. Lorem ipsum dolor sit amet, volumus temporibus definitionem id ius, vel ut magna timeam appareat, movet timeam maiorum an ius.</p>
                <p class="fr-content-text-description">Sea libris dictas lucilius et. Ne cibo urbanitas pri, qui ad populo accusamus. Quod congue ea ius, nisl aperiri sit ut.</p>
                 <button class="fr-content-text-button button">Start Tour</button>
            </div>
        </div>
    </div>
</section>

<section class="macd">
    <h3 class="header-text macd-header">Modern And Clean Design</h3>
    <p class="subheader macd-subheader">Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque mnesarchum eu, diam erant convenire et vis. Et essent evertitur sea, vis cu ubique referrentur, sed eu dicant expetendis.</p>
    <img src="img/web-search.png" alt="" class="macd-photo">
</section>

<section class="history">
    <div class="history-item">
        <div class="history-item-left">
            <h6 class="history-item-left-header">We Reach The Top</h6>
            <p class="history-item-left-date">September 2014 </p>
        </div>
        <div class="history-item-right">
            <h6 class="history-item-right-header">Kat is new brand</h6>
            <p class="history-item-right-text">Lorem ipsum dolor sit amet, rebum dolore labores cu pri. Ferri iudico scripta ut eam, diceret euismod gubergren has eu, an quo tale vivendum. Ad quidam gubergren vituperatoribus sit. Ius etiam nemore consulatu ne, at meliore explicari conceptam qui. Agam ceteros forensibus.
            </p>
            <a href="#" class="history-item-right-more">Read More</a>
        </div>
    </div>
    <div class="history-item">
        <div class="history-item-left">
            <h6 class="history-item-left-header">We Reach The Top</h6>
            <p class="history-item-left-date">September 2014 </p>
        </div>
        <div class="history-item-right">
            <h6 class="history-item-right-header">Kat is new brand</h6>
            <p class="history-item-right-text">Lorem ipsum dolor sit amet, rebum dolore labores cu pri. Ferri iudico scripta ut eam, diceret euismod gubergren has eu, an quo tale vivendum. Ad quidam gubergren vituperatoribus sit. Ius etiam nemore consulatu ne, at meliore explicari conceptam qui. Agam ceteros forensibus.
            </p>
            <a href="#" class="history-item-right-more">Read More</a>
        </div>
    </div>
    <div class="history-item">
        <div class="history-item-left">
            <h6 class="history-item-left-header">We Reach The Top</h6>
            <p class="history-item-left-date">September 2014 </p>
        </div>
        <div class="history-item-right">
            <h6 class="history-item-right-header">Kat is new brand</h6>
            <p class="history-item-right-text">Lorem ipsum dolor sit amet, rebum dolore labores cu pri. Ferri iudico scripta ut eam, diceret euismod gubergren has eu, an quo tale vivendum. Ad quidam gubergren vituperatoribus sit. Ius etiam nemore consulatu ne, at meliore explicari conceptam qui. Agam ceteros forensibus.
            </p>
            <a href="#" class="history-item-right-more">Read More</a>
        </div>
    </div>
    <div class="history-item">
        <div class="history-item-left">
            <h6 class="history-item-left-header">We Reach The Top</h6>
            <p class="history-item-left-date">September 2014 </p>
        </div>
        <div class="history-item-right">
            <h6 class="history-item-right-header">Kat is new brand</h6>
            <p class="history-item-right-text">Lorem ipsum dolor sit amet, rebum dolore labores cu pri. Ferri iudico scripta ut eam, diceret euismod gubergren has eu, an quo tale vivendum. Ad quidam gubergren vituperatoribus sit. Ius etiam nemore consulatu ne, at meliore explicari conceptam qui. Agam ceteros forensibus.
            </p>
            <a href="#" class="history-item-right-more">Read More</a>
        </div>
    </div>
</section>

<section class="op">
    <h3 class="op-header header-text">Our Portfolio</h3>
    <p class="op-subheader subheader">Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque mnesarchum eu, diam erant convenire et vis. Et essent evertitur sea, vis cu ubique referrentur, sed eu dicant expetendis.</p>
    <ul class="op-ul">
        <li class="op-ul-li">
            <button class="button op-ul-li-button op-ul-li-button-active">All</button>
        </li>
        <li class="op-ul-li">
            <button class="button op-ul-li-button">Web</button>
        </li>
        <li class="op-ul-li">
            <button class="button op-ul-li-button">Photography</button>
        </li>
        <li class="op-ul-li">
            <button class="button op-ul-li-button">Graphic Design</button>
        </li>
    </ul>
    <div class="op-cards">
        <div class="op-cards-item">
            <div class="op-cards-item-photo-container">
                <img src="img/op-placeholder.png" alt="" class="op-cards-item-photo">
                <div class="op-cards-item-photo-overlay">
                    <p class="op-cards-item-photo-overlay-content">+</p>
                </div>
            </div>
            <div class="op-cards-item-text-container">
                <p class="op-cards-item-text-header">AWESOME PHOTO</p>
                <p class="op-cards-item-text-subheader">Eum cu tantas legere complectitur, hinc utamu</p>
            </div>
        </div>
        <div class="op-cards-item">
            <div class="op-cards-item-photo-container">
                <img src="img/op-placeholder.png" alt="" class="op-cards-item-photo">
                <div class="op-cards-item-photo-overlay">
                    <p class="op-cards-item-photo-overlay-content">+</p>
                </div>
            </div>
            <div class="op-cards-item-text-container">
                <p class="op-cards-item-text-header">AWESOME PHOTO</p>
                <p class="op-cards-item-text-subheader">Eum cu tantas legere complectitur, hinc utamu</p>
            </div>
        </div>
        <div class="op-cards-item">
            <div class="op-cards-item-photo-container">
                <img src="img/op-placeholder.png" alt="" class="op-cards-item-photo">
                <div class="op-cards-item-photo-overlay">
                    <p class="op-cards-item-photo-overlay-content">+</p>
                </div>
            </div>
            <div class="op-cards-item-text-container">
                <p class="op-cards-item-text-header">AWESOME PHOTO</p>
                <p class="op-cards-item-text-subheader">Eum cu tantas legere complectitur, hinc utamu</p>
            </div>
        </div>
        <div class="op-cards-item">
            <div class="op-cards-item-photo-container">
                <img src="img/op-placeholder.png" alt="" class="op-cards-item-photo">
                <div class="op-cards-item-photo-overlay">
                    <p class="op-cards-item-photo-overlay-content">+</p>
                </div>
            </div>
            <div class="op-cards-item-text-container">
                <p class="op-cards-item-text-header">AWESOME PHOTO</p>
                <p class="op-cards-item-text-subheader">Eum cu tantas legere complectitur, hinc utamu</p>
            </div>
        </div>
        <div class="op-cards-item">
            <div class="op-cards-item-photo-container">
                <img src="img/op-placeholder.png" alt="" class="op-cards-item-photo">
                <div class="op-cards-item-photo-overlay">
                    <p class="op-cards-item-photo-overlay-content">+</p>
                </div>
            </div>
            <div class="op-cards-item-text-container">
                <p class="op-cards-item-text-header">AWESOME PHOTO</p>
                <p class="op-cards-item-text-subheader">Eum cu tantas legere complectitur, hinc utamu</p>
            </div>
        </div>
    </div>
</section>

<section class="video">
    <h3 class="video-header header-text">Nothing say better,then a video</h3>
    <p class="video-subheader subheader">Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque mnesarchum eu, diam erant convenire et vis. Et essent evertitur sea, vis cu ubique referrentur, sed eu dicant expetendis.</p>
    <p class="video-text">See Video</p>
    <img src="img/video-play.png" alt="">
</section>

<section class="st-bgc">
    <div class="st container">
        <div class="st-item">
            <img src="img/st-icon-1.png" alt="" class="st-icon">
            <p class="st-number">3054</p>
            <p class="st-text">COMPLETED PROJECTS</p>
        </div>
        <div class="st-item">
            <img src="img/st-icon-2.png" alt="" class="st-icon">
            <p class="st-number">7 234 873</p>
            <p class="st-text">CLICK PRESED</p>
        </div>
        <div class="st-item">
            <img src="img/st-icon-3.png" alt="" class="st-icon">
            <p class="st-number">4670</p>
            <p class="st-text">MAILS SENTED & RECIVED</p>
        </div>
        <div class="st-item">
            <img src="img/st-icon-4.png" alt="" class="st-icon">
            <p class="st-number">939</p>
            <p class="st-text">JOKES TOLDS</p>
        </div>
    </div>
</section>

<section class="wato container">
    <h3 class="header-text">We are the one</h3>
    <p class="subheader wato-subheader">Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque mnesarchum eu, diam erant convenire et vis. Et essent evertitur sea, vis cu ubique referrentur, sed eu dicant expetendis.</p>
    <div class="wato-cards">
        <div class="wato-cards-item">
            <div class="wato-cards-item-photo">
                <img src="img/placeholder-270x200.png" alt="" class="wato-cards-item-photo-img">
                <div class="wato-cards-item-photo-text">
                    <p class="wato-cards-item-photo-text-name">John Doe</p>
                    <p class="wato-cards-item-photo-text-role">Graphic Designer</p>
                </div>
            </div>
            <p class="wato-cards-item-description">Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque mnesarchum eu.</p>
            <ul class="wato-cards-item-social">
                <li class="wato-cards-item-social-item fb">
                    <a href="" class="wato-cards-item-social-item-link">
                        <img src="img/fb.png" alt="" class="wato-cards-item-social-item-link-photo">
                        <img src="img/fb-hover.png" alt="" class="wato-cards-item-social-item-link-photo-hover">
                    </a>
                </li>
                <li class="wato-cards-item-social-item twitter">
                    <a href="" class="wato-cards-item-social-item-link">
                        <img src="img/twitter.png" alt="" class="wato-cards-item-social-item-link-photo">
                        <img src="img/twitter-hover.png" alt="" class="wato-cards-item-social-item-link-photo-hover">
                    </a>
                </li>
                <li class="wato-cards-item-social-item google">
                    <a href="" class="wato-cards-item-social-item-link">
                        <img src="img/google.png" alt="" class="wato-cards-item-social-item-link-photo">
                        <img src="img/google-hover.png" alt="" class="wato-cards-item-social-item-link-photo-hover">
                    </a>
                </li>
                <li class="wato-cards-item-social-item dribble">
                    <a href="" class="wato-cards-item-social-item-link">
                        <img src="img/dribble.png" alt="" class="wato-cards-item-social-item-link-photo">
                        <img src="img/dribble-hover.png" alt="" class="wato-cards-item-social-item-link-photo-hover">
                    </a>
                </li>
            </ul>
        </div>
        <div class="wato-cards-item">
            <div class="wato-cards-item-photo">
                <img src="img/placeholder-270x200.png" alt="" class="wato-cards-item-photo-img">
                <div class="wato-cards-item-photo-text">
                    <p class="wato-cards-item-photo-text-name">John Doe</p>
                    <p class="wato-cards-item-photo-text-role">Graphic Designer</p>
                </div>
            </div>
            <p class="wato-cards-item-description">Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque mnesarchum eu.</p>
            <ul class="wato-cards-item-social">
                <li class="wato-cards-item-social-item fb">
                    <a href="" class="wato-cards-item-social-item-link">
                        <img src="img/fb.png" alt="" class="wato-cards-item-social-item-link-photo">
                        <img src="img/fb-hover.png" alt="" class="wato-cards-item-social-item-link-photo-hover">
                    </a>
                </li>
                <li class="wato-cards-item-social-item twitter">
                    <a href="" class="wato-cards-item-social-item-link">
                        <img src="img/twitter.png" alt="" class="wato-cards-item-social-item-link-photo">
                        <img src="img/twitter-hover.png" alt="" class="wato-cards-item-social-item-link-photo-hover">
                    </a>
                </li>
                <li class="wato-cards-item-social-item google">
                    <a href="" class="wato-cards-item-social-item-link">
                        <img src="img/google.png" alt="" class="wato-cards-item-social-item-link-photo">
                        <img src="img/google-hover.png" alt="" class="wato-cards-item-social-item-link-photo-hover">
                    </a>
                </li>
                <li class="wato-cards-item-social-item dribble">
                    <a href="" class="wato-cards-item-social-item-link">
                        <img src="img/dribble.png" alt="" class="wato-cards-item-social-item-link-photo">
                        <img src="img/dribble-hover.png" alt="" class="wato-cards-item-social-item-link-photo-hover">
                    </a>
                </li>
            </ul>
        </div>
        <div class="wato-cards-item">
            <div class="wato-cards-item-photo">
                <img src="img/placeholder-270x200.png" alt="" class="wato-cards-item-photo-img">
                <div class="wato-cards-item-photo-text">
                    <p class="wato-cards-item-photo-text-name">John Doe</p>
                    <p class="wato-cards-item-photo-text-role">Graphic Designer</p>
                </div>
            </div>
            <p class="wato-cards-item-description">Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque mnesarchum eu.</p>
            <ul class="wato-cards-item-social">
                <li class="wato-cards-item-social-item fb">
                    <a href="" class="wato-cards-item-social-item-link">
                        <img src="img/fb.png" alt="" class="wato-cards-item-social-item-link-photo">
                        <img src="img/fb-hover.png" alt="" class="wato-cards-item-social-item-link-photo-hover">
                    </a>
                </li>
                <li class="wato-cards-item-social-item twitter">
                    <a href="" class="wato-cards-item-social-item-link">
                        <img src="img/twitter.png" alt="" class="wato-cards-item-social-item-link-photo">
                        <img src="img/twitter-hover.png" alt="" class="wato-cards-item-social-item-link-photo-hover">
                    </a>
                </li>
                <li class="wato-cards-item-social-item google">
                    <a href="" class="wato-cards-item-social-item-link">
                        <img src="img/google.png" alt="" class="wato-cards-item-social-item-link-photo">
                        <img src="img/google-hover.png" alt="" class="wato-cards-item-social-item-link-photo-hover">
                    </a>
                </li>
                <li class="wato-cards-item-social-item dribble">
                    <a href="" class="wato-cards-item-social-item-link">
                        <img src="img/dribble.png" alt="" class="wato-cards-item-social-item-link-photo">
                        <img src="img/dribble-hover.png" alt="" class="wato-cards-item-social-item-link-photo-hover">
                    </a>
                </li>
            </ul>
        </div>
        <div class="wato-cards-item">
            <div class="wato-cards-item-photo">
                <img src="img/placeholder-270x200.png" alt="" class="wato-cards-item-photo-img">
                <div class="wato-cards-item-photo-text">
                    <p class="wato-cards-item-photo-text-name">John Doe</p>
                    <p class="wato-cards-item-photo-text-role">Graphic Designer</p>
                </div>
            </div>
            <p class="wato-cards-item-description">Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque mnesarchum eu.</p>
            <ul class="wato-cards-item-social">
                <li class="wato-cards-item-social-item fb">
                    <a href="" class="wato-cards-item-social-item-link">
                        <img src="img/fb.png" alt="" class="wato-cards-item-social-item-link-photo">
                        <img src="img/fb-hover.png" alt="" class="wato-cards-item-social-item-link-photo-hover">
                    </a>
                </li>
                <li class="wato-cards-item-social-item twitter">
                    <a href="" class="wato-cards-item-social-item-link">
                        <img src="img/twitter.png" alt="" class="wato-cards-item-social-item-link-photo">
                        <img src="img/twitter-hover.png" alt="" class="wato-cards-item-social-item-link-photo-hover">
                    </a>
                </li>
                <li class="wato-cards-item-social-item google">
                    <a href="" class="wato-cards-item-social-item-link">
                        <img src="img/google.png" alt="" class="wato-cards-item-social-item-link-photo">
                        <img src="img/google-hover.png" alt="" class="wato-cards-item-social-item-link-photo-hover">
                    </a>
                </li>
                <li class="wato-cards-item-social-item dribble">
                    <a href="" class="wato-cards-item-social-item-link">
                        <img src="img/dribble.png" alt="" class="wato-cards-item-social-item-link-photo">
                        <img src="img/dribble-hover.png" alt="" class="wato-cards-item-social-item-link-photo-hover">
                    </a>
                </li>
            </ul>
        </div>
    </div>
</section>

<section class="about-ket-bgc">
    <div class="about-ket container">
        <img src="img/placeholder-image.png" alt="">
        <div class="about-ket-paragraph">
            <h5 class="about-ket-paragraph-header">About Ket</h5>
            <p class="about-ket-paragraph-text">Lorem ipsum dolor sit amet, quod iusto senserit at his, animal phaedrum hendrerit no cum. Duis mucius inciderint qui et, id epicuri corrumpit vim, vis eu erat sadipscing consectetuer. No nec justo nihil phaedrum, duis utinam nam ne. Probo vidisse sea ut, pro tale stet assueverit an, ne oratio albucius adversarium mei. Sale quando mel et, usu ad aeterno percipitur.</p>
            <p class="about-ket-paragraph-text">Nullam vocibus iracundia cum ut, mea sale nullam an. Hinc primis est ei. Ad est decore quaeque propriae. Nam eu graece adipiscing, est eu autem mucius, duo ei eirmod mentitum. Sit soleat debitis delectus ea, mei at commodo prompta erroribus. Eu everti mollis vis. Suas putent officiis duo ei, pro movet aliquip ex..</p>
        </div>
    </div>
</section>

<section class="quote">
    <img src="img/quotes-photo.png" alt="" class="quote-icon">
    <h6 class="quote-text">The artist in me cries out for design.</h6>
    <p class="quote-author">Robert Frost</p>
    <div class="quote-direction">
        <img src="img/quote-left.png" alt="" class="quote-direction-arrows">
        <img src="img/quote-right.png" alt="" class="quote-direction-arrows">
    </div>
</section>

<section class="con">
    <h3 class="header-text con-header">Check our news</h3>
    <p class="subheader con-subheader">Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque mnesarchum eu, diam erant convenire et vis. Et essent evertitur sea, vis cu ubique referrentur, sed eu dicant expetendis.</p>
    <div class="con-news">
        <div class="con-news-item">
            <div class="con-news-item-date">
                <p class="con-news-item-date-day">25</p>
                <p class="con-news-item-date-month">September</p>
            </div>
            <div class="con-news-item-content">
                <p class="con-news-item-content-text">Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque mnesarchum eu, diam erant convenire et vis. Et essent evertitur sea, vis cu ubique referrentur, sed eu dicant expetendis.</p>
                <a href="" class="con-news-item-content-link">Read More</a>
            </div>
        </div>
        <div class="con-news-item">
            <div class="con-news-item-date">
                <p class="con-news-item-date-day">25</p>
                <p class="con-news-item-date-month">September</p>
            </div>
            <div class="con-news-item-content">
                <p class="con-news-item-content-text">Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque mnesarchum eu, diam erant convenire et vis. Et essent evertitur sea, vis cu ubique referrentur, sed eu dicant expetendis.</p>
                <a href="" class="con-news-item-content-link">Read More</a>
            </div>
        </div>
        <div class="con-news-item">
            <div class="con-news-item-date">
                <p class="con-news-item-date-day">25</p>
                <p class="con-news-item-date-month">September</p>
            </div>
            <div class="con-news-item-content">
                <p class="con-news-item-content-text">Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque mnesarchum eu, diam erant convenire et vis. Et essent evertitur sea, vis cu ubique referrentur, sed eu dicant expetendis.</p>
                <a href="" class="con-news-item-content-link">Read More</a>
            </div>
        </div>
        <div class="con-news-item">
            <div class="con-news-item-date">
                <p class="con-news-item-date-day">25</p>
                <p class="con-news-item-date-month">September</p>
            </div>
            <div class="con-news-item-content">
                <p class="con-news-item-content-text">Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque mnesarchum eu, diam erant convenire et vis. Et essent evertitur sea, vis cu ubique referrentur, sed eu dicant expetendis.</p>
                <a href="" class="con-news-item-content-link">Read More</a>
            </div>
        </div>
    </div>
</section>

<section class="md">
    <div class="md-photo">
        <img src="img/devices.png" alt="">
        <img src="img/shadow.png" alt="" class="md-photo-shadow">
    </div>
    <div class="md-content">
        <h4 class="md-content-header">MODERN DESIGN</h4>
        <p class="md-content-text">Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque mnesarchum eu, diam erant convenire et vis. Et essent evertitur sea, vis cu ubique referrentur, sed eu dicant expetendis.Eum cu tantas legere complectitur, hinc utamur ea eam.</p>
        <p class="md-content-text">Ynesarchum eu, diam erant convenire et vis. Et essent evertitur sea, vis cu ubique referrentur, sed eu dicant expetendis.</p>
    </div>
</section>

<section class="wcs-bgc">
    <div class=" wcs container">
        <h3 class="wcs-header header-text">What clients say</h3>
        <p class="wcs-subheader subheader">Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque mnesarchum eu, diam erant convenire et vis. Et essent evertitur sea, vis cu ubique referrentur, sed eu dicant expetendis.</p>
        <div class="wcs-feedback">
            <div class="wcs-feedback-item">
                <p class="wcs-feedback-item-head">Anya Stoen</p>
                <p class="wcs-feedback-item-subheader">Graphic Designer</p>
                <p class="wcs-feedback-item-text">“Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque mnesarchum eu, diam erant convenire et vis. Et essent evertitur sea.”</p>
            </div>
            <div class="wcs-feedback-item">
                <p class="wcs-feedback-item-head">Anya Stoen</p>
                <p class="wcs-feedback-item-subheader">Graphic Designer</p>
                <p class="wcs-feedback-item-text">“Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque mnesarchum eu, diam erant convenire et vis. Et essent evertitur sea.”</p>
            </div>
            <div class="wcs-feedback-item">
                <p class="wcs-feedback-item-head">Anya Stoen</p>
                <p class="wcs-feedback-item-subheader">Graphic Designer</p>
                <p class="wcs-feedback-item-text">“Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque mnesarchum eu, diam erant convenire et vis. Et essent evertitur sea.”</p>
            </div>
        </div>
    </div>
</section>

<section class="subscribe">
    <h3 class="subscribe-header">Want to hear more story,subscribe for our newsletter</h3>
    <button class="subscribe-button button">Subbscribe</button>
</section>

<section class="cu-bgc">
    <div class="cu">
        <h2 class="cu-header header-text">Contact Us</h2>
        <p class="cu-subheader subheader">Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque mnesarchum eu, diam erant convenire et vis. Et essent evertitur sea, vis cu ubique referrentur, sed eu dicant expetendis.</p>
        <form action="addSql.php" method="post" class="cu-form">
            <div class="cu-form-first-row">
                <div class="cu-form-first cu-form-border">
                    <input type="text" name="name" class="cu-form-input" maxlength="32" placeholder="Yor name here" required>
                </div>
                <div class="cu-form-first cu-form-border">
                    <input type="email" name="mail" class="cu-form-input" placeholder="Yor mail here" required>
                </div>
            </div>
            <div class="cu-form-border-2">
                <input type="text" class="cu-form-second cu-form-input" name="text" placeholder="Yor message here" required>
            </div>
            <input type="submit" class="cu-form-submit cu-form-input button" value="Send Message">
        </form>
    </div>
</section>

<section class="address-bgc">
    <div class="address">
        <p class="address-text">Awesome Address 432</p>
        <a href="mailto:ourmail@sometype.com" class="address-text">ourmail@sometype.com</a>
        <a href="tel:+321(0)32 123 343 492" class="address-text">+321(0)32 123 343 492</a>
    </div>
</section>

<footer class="footer">
    <p>&copy;2014 - <span class="blue-text">Kat</span> All Right Reserved</p>
</footer>

<script src="js/1_jquery.js"></script>
<script src="js/script.js"></script>
</body>
</html>
