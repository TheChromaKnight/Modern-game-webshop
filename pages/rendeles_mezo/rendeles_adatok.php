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
	$darab=$_SESSION["kosardarabszam"];
	$termeknev = "";
	for ($i=0; $i<$darab; $i++)
{
	$termeknev.=$_SESSION["termekneve_".$i].'<br>';
	
}
	// if (isset($_SESSION["kosardarabszam"])==2)
	// {
	 // $termeknev1=$_SESSION["termekneve_1"];
	// }
	$vegosszeg=$_SESSION["vegosszeg"];

	

	// az összes SESSION változó nevének és értékének kiíratása
	
    // echo "<h3> PHP List All Session Variables</h3>";
    // foreach ($_SESSION as $key=>$val)
    // echo $key." ".$val."<br/>";
	
	print "Termék(ek) neve(i):".'<br>';
	echo $termeknev;
	echo "<p id = 'ureshely'>";
	print "Teljes Név:";
	echo $vezeteknev."&nbsp;";
	echo $keresztnev;	
	echo "</p>";
	print "Telefonszám:";
	echo $telefonszam.'<br>';	
	print "Irányítószám:";
	echo $iranyitoszam.'<br>';	
	print "Település:";
	echo $telepules.'<br>';	
	print "Cím:";
	echo $cim.'<br>';	
	print "E-mail cím:";
	echo $email_cim.'<br>';	
	
	// echo $termeknev.'<br>';
	if($utanvet ==1)
	{
		echo "Bankkártyával történő fizetés".'<br>';
	}
	else
	{
		echo "Készpénzzel történő fizetés".'<br>';
	}
	
		// if (isset($_SESSION["kosardarabszam"])==2)
	// {
	 // echo $termeknev1.'<br>';
	// }
	echo "Végösszeg:";
	echo $vegosszeg.'<br>';
	
	if (isset($megjegyzes))
	{
		print "Megjegyzés:";
		echo $megjegyzes.'<br>';
	}
	else
	{
	
	}

	
	
	
	
	



?>