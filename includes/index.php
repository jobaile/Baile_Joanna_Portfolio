<?php
include 'connect.php';

    if (isset($_GET['id'])) {
        $query = $conn->prepare('SELECT * FROM tbl_portfolio WHERE port_id = ?');
        $query->execute([$_GET['id']]);
    }

    $rows = array();
    while ($row = $query->fetch() ) {
        $rows[] = $row;
    }


header('Content-Type: application/json; charset=UTF-8');
echo json_encode($rows);


?>