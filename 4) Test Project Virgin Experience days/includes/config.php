<?php
switch (explode("?",basename($_SERVER["REQUEST_URI"]))[0]) {
    case "category.php":
        $CURRENT_PAGE = "Category";
        $PAGE_TITLE = "Category";
        break;
    case "help-center-and-contact.php":
        $CURRENT_PAGE = "Contact";
        $PAGE_TITLE = "Contact Us";
        break;
    case "partnership.php":
        $CURRENT_PAGE = "Partnership";
        $PAGE_TITLE = "Partnership";
        break;
    default:
        $CURRENT_PAGE = "Home";
        $PAGE_TITLE = "Virgin Experience days";
}
?>
