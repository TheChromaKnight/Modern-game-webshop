 <?php
session_start();
include "../../alap/kapcsolat.php"; 

$session_felhasznaloid=$_SESSION["login_id"];
 
$sql = "SELECT * FROM szemely WHERE szemely_id = $session_felhasznaloid";
$result = mysqli_query($conn, $sql);

$kimenet=array();

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        //echo "id: " . $row["film_id"]. " - Name: " . $row["film_cim"]. " " . $row["film_ev"]. "<br>";
		
		array_push($kimenet,$row);
	}
	print json_encode($kimenet);
}
 else {
    print 0;
}

mysqli_close($conn);
?> 