<?php
    include 'functions.php';

    //returns the portfolio work
    if (isset($_GET["port"])) {
        $data = get_one_work($conn, $_GET["port"]);
        echo json_encode($data);
    } else {
        $data = get_all_work($conn);
        echo json_encode($data);
    }

?>