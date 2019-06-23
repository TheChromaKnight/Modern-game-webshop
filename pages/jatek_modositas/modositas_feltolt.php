<?php 
	include "../../alap/kapcsolat.php";
	$jatekid=$_POST["jatekid1"];
	$jatekcim=mysqli_real_escape_string($conn,$_POST["jatekcim"]);
	$jatekdatum=$_POST["jatekdatum"];
	$jatekar=$_POST["jatekar"];
	$jatek_darab=$_POST["jatekdarab"];
	$jatek_keszletid=$_POST["jatek_keszletid"];
	$jatek_ingyen_szallitas=$_POST["jatek_ingyen_szallitas"];
	
	
	$sql = "update jatek
	SET jatek.jatek_nev = '$jatekcim', jatek.jatek_ev = '$jatekdatum',jatek.jatek_ar = $jatekar,jatek.jatek_darab = $jatek_darab,jatek.jatek_keszletid = $jatek_keszletid,jatek.jatek_ingyen_szallitas = $jatek_ingyen_szallitas
	WHERE jatek.jatek_id = $jatekid";
	
	$result = mysqli_query($conn, $sql);
	
	$kimenet=0;
	if ($result)
		$kimenet=1;

	print $kimenet;
	mysqli_close($conn);


?>