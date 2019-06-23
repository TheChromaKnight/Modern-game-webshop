  <?php
//echo "hali";

include "../../alap/kapcsolat.php"; 
 
 
$sql = "SELECT jatek_id,jatek_nev,jatek_ev,tipus_nev,jatek_ar FROM jatek,tipus WHERE tipus_id = jatek_tipusid ORDER BY jatek_id DESC ";
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