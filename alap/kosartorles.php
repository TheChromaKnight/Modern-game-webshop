<?php
session_start();
$darab=$_SESSION["kosardarabszam"];

for ($i=0; $i<$darab; $i++)
{
unset($_SESSION['termek_'.$i]);
unset($_SESSION['termekneve_'.$i]);
unset($_SESSION['termekara_'.$i]);

}
unset($_SESSION['vegosszeg']);
unset($_SESSION['kosardarabszam']);

?>