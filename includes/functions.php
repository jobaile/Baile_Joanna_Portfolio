<?php  
include 'connect.php';

    function get_one_part($pdo, $work) {
        $query = "SELECT * FROM tbl_portfolio WHERE port_id = '$work'"; //this means ?part=ID
        //make sure this matches database

        $get_part = $pdo->query($query);
        $results = array();

        while($row = $get_part->fetch(PDO::FETCH_ASSOC)){
            $results[] = $row;
        }

        return $results;
    }

    function get_all_parts($pdo) {
        $query = "SELECT * FROM tbl_portfolio"; 
        //make sure this matches database

        $get_part= $pdo->query($query);
        $results = array();

        while($row = $get_part->fetch(PDO::FETCH_ASSOC)){
            $results[] = $row;
        }

        return $results;
    }
?>