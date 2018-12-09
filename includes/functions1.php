<?php  
include 'connect.php';

    //get a single portfolio work
    function get_one_work($pdo, $work) {
        $query = "SELECT * FROM tbl_work WHERE work_id = '$work'"; //select the table

        $get_work = $pdo->query($query);
        $results = array();

        while($row = $get_work->fetch(PDO::FETCH_ASSOC)){
            $results[] = $row;
        }

        return $results;
    }

    //get all the work
    function get_all_work($pdo) {
        $query = "SELECT * FROM tbl_work"; //select the table

        $get_work = $pdo->query($query);
        $results = array();

        while($row = $get_work->fetch(PDO::FETCH_ASSOC)){
            $results[] = $row;
        }

        return $results;
    }
?>