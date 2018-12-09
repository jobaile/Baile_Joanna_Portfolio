<?php  
include 'connect.php';

function get_one_work($pdo, $work) {
    $arr = [];

    $query = $pdo->prepare("SELECT * FROM tbl_portfolio WHERE port_id = '$work'");

    $get_section = $query->execute([]);

    while($row = $query->fetch(PDO::FETCH_ASSOC)) {
        $arr[] = $row;
    }
   return $arr;
   if(!$arr) exit('No rows');
   $query = null;
}

function get_all($pdo) {
    $arr = [];
    $query = 'SELECT 
    * FROM tbl_portfolio';
    $get_all = $pdo->query($query);
    //Parsing data from associative array 
    while($row = $get_all->fetch(PDO::FETCH_ASSOC)) {
        $arr[] = $row;
    }
   return $arr;
   if(!$arr) exit('No rows');
   $query = null;
}



?>