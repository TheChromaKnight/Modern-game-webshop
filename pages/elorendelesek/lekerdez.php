 <?php
//echo "hali";

include "../../alap/kapcsolat.php"; 
 
 
$sql = "SELECT jatek.jatek_id,jatek.jatek_kep,jatek.jatek_nev,eletkor.eletkor_csoport,tipus.tipus_nev,kiado.kiado_nev,jatek.jatek_ev,jatek.jatek_ar
 FROM jatek
 INNER JOIN eletkor ON eletkor.eletkor_id=jatek.jatek_eletkor_id
 INNER JOIN tipus ON tipus.tipus_id=jatek.jatek_tipusid
 INNER JOIN kiado ON kiado.kiado_id=jatek.jatek_kiadoid
 WHERE jatek.jatek_keszletid = 2 OR jatek.jatek_keszletid = 3
 ORDER BY jatek.jatek_ev ASC,jatek.jatek_ar";
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