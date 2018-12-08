<?php
    include 'functions.php';

    if (isset($_GET['id'])) {
        $query = $conn->prepare('SELECT * FROM tbl_portfolio WHERE port_id = ?');
        $query->execute([$_GET['id']]);
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

    $rows = array();
    while ($row = $query->fetch() ) {
        $rows[] = $row;
    }


header('Content-Type: application/json; charset=UTF-8');
echo json_encode($rows);
?>