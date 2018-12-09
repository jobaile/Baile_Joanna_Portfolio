<?php  
include 'connect.php';

    function get_one_work($pdo, $work) {
        $query = "SELECT * FROM tbl_portfolio WHERE port_id = '$work'"; //this means ?part=ID
        //make sure this matches database

        $get_single_work = $pdo->query($query);
        $results = array();

        while($row = $get_single_work->fetch(PDO::FETCH_ASSOC)){
            $results[] = $row;
        }

        return $results;
    }

    function get_all_work($pdo) {
        $query = "SELECT * FROM tbl_portfolio"; 
        //make sure this matches database

        $get_all_work= $pdo->query($query);
        $results = array();

        while($row = $get_all_work->fetch(PDO::FETCH_ASSOC)){
            $results[] = $row;
        }

        return $results;
    }

    function get_one_testimonial($pdo, $testimonial) {
        $query = "SELECT * FROM tbl_testimonial WHERE testim_id = '$testimonial'"; //this means ?part=ID
        //make sure this matches database

        $get_single_testim = $pdo->query($query);
        $results = array();

        while($row = $get_single_testim->fetch(PDO::FETCH_ASSOC)){
            $results[] = $row;
        }

        return $results;
    }

    function get_all_testimonials($pdo) {
        $query = "SELECT * FROM tbl_testimonial"; 
        //make sure this matches database

        $get_testimonial = $pdo->query($query);
        $results = array();

        while($row = $get_testimonial->fetch(PDO::FETCH_ASSOC)){
            $results[] = $row;
        }

        return $results;
    }
?>