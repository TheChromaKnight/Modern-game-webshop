<?php
session_start();
	include "../../alap/kapcsolat.php";
	
	 $keresztnev=$_POST["keresztnev"];
	 $vezeteknev=$_POST["vezeteknev"];
	 $telefonszam=$_POST["telefonszam"];
	 $iranyitoszam=$_POST["iranyitoszam"];
	 $telepules=$_POST["telepules"];
	 $cim=$_POST["cim"];
	 $email_cim=$_POST["email_cim"];
	 $megjegyzes=$_POST["megjegyzes"];
	 $utanvet=$_POST["utanvet"];
	 $vegosszeg=$_SESSION["vegosszeg"];
	 $felh_id=$_SESSION["login_id"];
	 
	// if (isset($_SESSION["kosardarabszam"])==2)
	// {
	 // $termeknev1=$_SESSION["termekneve_1"];
	// }
	
	$sql2 = "INSERT INTO `rendeles` (`rendeles_id`, `rendeles_vegosszeg`, `rendeles_felhasznaloid`, `rendeles_keresztnev`, `rendeles_vezeteknev`, `rendeles_telefonszam`, `rendeles_iranyitoszam`, `rendeles_telepules`, `rendeles_cim`, `rendeles_emailcim`,  `rendeles_megjegyzes`, `rendeles_statuszid`, `rendeles_utanvet_tipusid`, `rendeles_datum`) VALUES (NULL, $vegosszeg, $felh_id, '$keresztnev', '$vezeteknev', '$telefonszam', $iranyitoszam, '$telepules', '$cim', '$email_cim', '$megjegyzes', 1, $utanvet, NOW())";
	$result1 = mysqli_query($conn, $sql2);
	echo $result1;
	
	$sql = "Select rendeles_id from rendeles order by rendeles_id desc limit 1";
	$result = mysqli_query($conn, $sql);
	
	//$i = 0;
	$row = mysqli_fetch_assoc($result);
	
	$rendelesid = $row['rendeles_id'];
	//
	/*foreach($_SESSION["kosardarabszam"] as $keys => $values) 
	{
		$id = $values['termek_'.$i];
		$ar = $values['termekara_'.$i];
		
		$sql = "INSERT INTO tetel
		VALUES ( NULL, $rendelesid, $id,  $ar); ";
		$result = mysqli_query($conn, $sql);	 
		
			if(!$result) {
				echo mysql_error();
			}
			$i++;
	}*/
	for($i = 0; $i < $_SESSION['kosardarabszam']; $i++)
	{
		$id = $_SESSION['termek_'.$i];
		$ar = $_SESSION['termekara_'.$i];
		
		$sql = "INSERT INTO tetel
		VALUES ( NULL, $rendelesid, $id,  $ar); ";
		$result = mysqli_query($conn, $sql);	 
		
			if(!$result) {
				echo mysql_error();
			}
	}
	
	



/*
$sql = "INSERT INTO tetel 
  VALUES(NULL, 1,2,5555);";
  

	print $result0." ".$result1;
	*/
	
	mysqli_close($conn);
	
	

?>