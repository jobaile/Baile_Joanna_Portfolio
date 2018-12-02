<?php  
include 'connect.php';

    //grabbing a single work for portfolio
    function get_one_work($pdo, $work) {
        $query = "SELECT * FROM tbl_work WHERE work_id = '$work'";

        $get_work = $pdo->query($query);
        $results = array();
        
        while($row = $get_video->fetch(PDO::FETCH_ASSOC)){
            $results[] = $row;
        }

        return $results;
    }

    //grab all the work for portfolio
    function get_all_work($pdo) {
        $query = "SELECT * FROM tbl_work";

        $get_work = $pdo->query($query);
        $results = array();

        while($row = $get_work->fetch(PDO::FETCH_ASSOC)){
            $results[] = $row;
        }

        return $results;
    }
?>