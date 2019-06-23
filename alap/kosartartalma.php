<?php 
session_start();

// kosarlistázás
if (isset($_SESSION["kosardarabszam"]))
{
$darab=$_SESSION["kosardarabszam"];
$szoveg = "";
$vegosszeg=0;
// $vegosszeg_kezeles=$_SESSION["vegosszeg"];

for  ($i = 0; $i<$darab; $i++)
{
	// $szoveg.=$_SESSION["termekkep_".$i]."<br>";
	
	//Ez a termék ID
	// $szoveg.=$_SESSION["termek_".$i]."<br>";
	
	$szoveg.=$_SESSION["termekneve_".$i]."<br>";

	
	$szoveg.=$_SESSION["termekara_".$i]."<br>";
	$vegosszeg+=intval($_SESSION["termekara_".$i]);
}
//echo "<div class = 'kosar_tablazat'>";
$szoveg.="Végösszeg: ".$vegosszeg;

$_SESSION["vegosszeg"]=$vegosszeg;
//echo "</div>";
echo $szoveg;

/*
Pl. 3 terméknél, termékek id-jét tároljuk
$_SESSION["kosardarabszam"]=3
$_SESSION["termek_0"]=1;
$_SESSION["termek_1"]=3;
$_SESSION["termek_2"]=8;

$_SESSION["termekneve_1"]="pc jatekneve";
$_SESSION["termekneve_2"]=8;

*/
?>


<?php
}
else
	 print "A kosár tartalma üres";

?>