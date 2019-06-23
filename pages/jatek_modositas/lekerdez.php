 <?php
//echo "hali";

include "../../alap/kapcsolat.php"; 
 
 
$sql = "SELECT jatek.jatek_id,jatek.jatek_kep,jatek.jatek_nev,eletkor.eletkor_csoport,tipus.tipus_nev,kiado.kiado_nev,jatek.jatek_ev,jatek.jatek_ar,jatek_keszlet.jatek_keszlet_nev,jatek.jatek_darab,jatek_ingyen_szallitas.jatek_ingyen_szallitas_tipus
 FROM jatek
 INNER JOIN eletkor ON eletkor.eletkor_id=jatek.jatek_eletkor_id
 INNER JOIN tipus ON tipus.tipus_id=jatek.jatek_tipusid
 INNER JOIN kiado ON kiado.kiado_id=jatek.jatek_kiadoid
 INNER JOIN jatek_ingyen_szallitas ON jatek_ingyen_szallitas.jatek_ingyen_szallitas_id = jatek.jatek_ingyen_szallitas
 INNER JOIN jatek_keszlet ON jatek_keszlet.jatek_keszlet_id = jatek.jatek_keszletid
 ORDER BY jatek.jatek_nev ASC";
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