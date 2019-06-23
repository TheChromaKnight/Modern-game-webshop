 <?php
//echo "hali";

include "../../alap/kapcsolat.php"; 
 
 
$sql = "SELECT rendeles.rendeles_id,rendeles.rendeles_vegosszeg,rendeles.rendeles_datum,statusz.statusz_nev,utanvet_tipus.utanvet_tipusnev
 FROM rendeles
 INNER JOIN tetel ON rendeles_id = tetel.tetel_rendeles_id
 INNER JOIN statusz ON statusz.statusz_id = rendeles.rendeles_statuszid
 INNER JOIN utanvet_tipus ON utanvet_tipus.utanvet_tipusid = rendeles.rendeles_utanvet_tipusid
 GROUP BY rendeles.rendeles_id ";
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