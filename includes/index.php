<?php
    include 'functions.php';

    //single movie route
    if (isset($_GET["work"])) {
        $data = get_one_work($conn, $_GET["work"]);
        echo json_encode($data);
    } else {
        $data = get_all_work($conn);
        echo json_encode($data);
    }

    if (isset($_GET["testimonial"])) {
        $data = get_($conn, $_GET["testimonial"]);
        echo json_encode($data);
    } 
?>