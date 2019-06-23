<?php

include "../../alap/kapcsolat.php"; 

$statuszid=$_POST["statuszid"];
$rendeles_id=$_POST["rendeles_id1"];
 
$sql = "UPDATE rendeles SET rendeles.rendeles_statuszid = $statuszid  WHERE rendeles.rendeles_id = $rendeles_id";
$result = mysqli_query($conn, $sql);

$kimenet=array();

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        //echo "id: " . $row["film_id"]. " - Name: " . $row["film_cim"]. " " . $row["film_ev"]. "<br>";
		
		array_push($kimenet,$row);
	}
	print json_encode($kimenet);
} else {
    print 0;
}

mysqli_close($conn);
?> 