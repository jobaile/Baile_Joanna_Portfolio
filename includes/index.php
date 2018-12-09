<?php
    include 'functions.php';
    //returns the portfolio work
    
    if (isset($_GET['work'])) {
    // pass the connection and the movie id to a function 
    $data = get_one_work($pdo, $_GET['work']);
    echo json_encode($data);
    }
    else {
    // pass the connection and the movie id to a function 
    $data = get_all($pdo);
    echo json_encode($data);
}


?>