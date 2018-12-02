<?php
    include 'functions.php';

    //one work
    if (isset($_GET["work"])) {
        $data = get_one_work($conn, $_GET["work"]);
        echo json_encode($data);
    } else {
        $data = get_all_work($conn);
        echo json_encode($data);
    }

?>