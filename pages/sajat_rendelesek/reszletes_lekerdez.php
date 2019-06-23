<?php

include "../../alap/kapcsolat.php"; 
 
$rendeles_id=$_POST['rendeles_id']; 
$sql = "SELECT jatek.jatek_nev,jatek.jatek_ar,rendeles.rendeles_keresztnev,rendeles.rendeles_vezeteknev,rendeles.rendeles_telefonszam,rendeles.rendeles_iranyitoszam,rendeles.rendeles_telepules,rendeles.rendeles_cim,rendeles.rendeles_megjegyzes,rendeles.rendeles_datum
 FROM rendeles
 INNER JOIN tetel ON rendeles_id = tetel.tetel_rendeles_id
 INNER JOIN statusz ON statusz.statusz_id = rendeles.rendeles_statuszid
 INNER JOIN utanvet_tipus ON utanvet_tipus.utanvet_tipusid = rendeles.rendeles_utanvet_tipusid
 INNER JOIN szemely ON szemely.szemely_id = rendeles.rendeles_felhasznaloid
 INNER JOIN jatek ON jatek.jatek_id = tetel.tetel_jatek_id
 INNER JOIN tipus ON jatek.jatek_tipusid = tipus.tipus_id
 WHERE rendeles_id = $rendeles_id";
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