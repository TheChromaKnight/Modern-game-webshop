<?php 
session_start();

	include "../../alap/kapcsolat.php";	
	$session_felh_id=$_SESSION["login_id"];
	$felhasznalonev=$_POST["felhasznalonev"];
	$email_cim=$_POST["emailcim"];
	$jelszo=md5($_POST["jelszo"]);
	
	$sql="select * from szemely where szemely_felh='$felhasznalonev'"; 
	$result=mysqli_query($conn,$sql);
 
if (mysqli_num_rows($result)==0)
{	
	$sql = "UPDATE szemely SET szemely_felh = '$felhasznalonev' , szemely_email_cim = '$email_cim',szemely_jelszo = '$jelszo' WHERE szemely_id = $session_felh_id";

if (mysqli_query($conn, $sql)) {
    echo 1;//sikerult felvinni az uj felhasználót
} else {
    echo 0;//adatb hiba
}
}
else
	echo 2;//a felhasználó már létezik
	mysqli_close($conn);


?>