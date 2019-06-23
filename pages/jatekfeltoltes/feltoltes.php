<?php 
	include "../../alap/kapcsolat.php";
	$jatekcim=mysqli_real_escape_string($conn,$_POST["jatekcim"]);
	$jatekdatum=$_POST["jatekdatum"];
	$jatekar=$_POST["jatekar"];
	$jatektipus=$_POST["jatektipus"];
	$jatekkiado=$_POST["jatekkiado"];
	$jatek_stilusid=$_POST["jatek_stilusid"];
	$jatek_dlcid=$_POST["jatek_dlcid"];
	$jatek_eletkor_id=$_POST["jatek_eletkor_id"];
	$jatek_darab=$_POST["jatek_darab"];
	$jatekleiras=$_POST["jatekleiras"];
	$bevitel=$_POST["bevitel"];
	$jatek_keszletid=$_POST["jatek_keszletid"];
	$jatek_ingyen_szallitas=$_POST["jatek_ingyen_szallitas"];
	
	
	$sql = "INSERT INTO jatek
VALUES ( NULL, '$jatekcim','$jatekdatum',$jatekar,$jatektipus,$jatekkiado,$jatek_stilusid,$jatek_dlcid,$jatek_eletkor_id,$jatek_darab,'$jatekleiras','$bevitel',$jatek_keszletid,$jatek_ingyen_szallitas,0);";
	$result = mysqli_query($conn, $sql);
	
	$kimenet=0;
	if ($result)
		$kimenet=1;

	print $kimenet;
	mysqli_close($conn);


?>