 <?php
//echo "hali";

include "../../alap/kapcsolat.php"; 
 // Csinálni otthon még 2 dolgot (top 25,top 100)
 
$sql = "SELECT jatek_nev,SUM(rendeles_vegosszeg) as osszeg FROM jatek,rendeles WHERE rendeles_jatekid = jatek_id Group By jatek_nev order by rendeles_vegosszeg desc limit 20";
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