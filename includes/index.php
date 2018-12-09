<?php
    include 'functions.php';

    //single movie route
    if (isset($_GET["work"])) {
        $data = get_one_part($conn, $_GET["work"]);
        echo json_encode($data);
    } else {
        $data = get_all_parts($conn);
        echo json_encode($data);
    }

?>