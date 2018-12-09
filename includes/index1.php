<?php
    include 'functions.php';

    if (isset($_GET['testimonial'])) {
        $data = get_testimonials($conn, $_GET["testimonial"]);
        echo json_encode($data);
    } else {
        $data = get_all_testimonials($conn);
        echo json_encode($data);
    }

    //returns the portfolio work
    if (isset($_GET["port"])) {
        $data = get_one_work($conn, $_GET["port"]);
        echo json_encode($data);
    } else {
        $data = get_all_work($conn);
        echo json_encode($data);
    }

    if (isset($_GET["services"])) {
        $data = get_one_service($conn, $_GET["services"]);
        echo json_encode($data);
    } else {
        $data = get_all_services($conn);
        echo json_encode($data);
    }

?>