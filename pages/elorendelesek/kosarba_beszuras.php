<?php 
session_start();
$termekid= $_POST["termekid"];
$termeknev= $_POST["termeknev"];
$termekar= $_POST["termekar"];
$termekkep=$_POST["termekkep"];

//ha a kosár még üres
if (!isset($_SESSION["kosardarabszam"]))
{
	$_SESSION["kosardarabszam"]=1;
}
else // a kosár már nem üres
{
		$_SESSION["kosardarabszam"]=$_SESSION["kosardarabszam"]+1;
}

$hanyadik=$_SESSION["kosardarabszam"]-1;
$_SESSION["termek_".$hanyadik]=$termekid;
$_SESSION["termekneve_".$hanyadik]=$termeknev;
$_SESSION["termekara_".$hanyadik]=$termekar;
$_SESSION["termekkep_".$hanyadik]=$termekkep;


$szoveg=  "Kosár tartalma:".$_SESSION["kosardarabszam"];

// kosarlistázás
$darab=$_SESSION["kosardarabszam"];
for  ($i = 0; $i<$darab; $i++)
{
	$szoveg.=$_SESSION["termek_".$i];
}
echo $szoveg;

/*
Pl. 3 terméknél, termékek id-jét tároljuk
$_SESSION["kosardarabszam"]=3
$_SESSION["termek_0"]=1;
$_SESSION["termek_1"]=3;
$_SESSION["termek_2"]=8;
*/

?>