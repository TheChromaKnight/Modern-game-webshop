<?php 
	include "../../alap/kapcsolat.php";
	$ujkiadonev=$_POST["ujkiadonev"];
	
	
	
	$sql = "INSERT INTO kiado
VALUES ( NULL,'$ujkiadonev');";
	$result = mysqli_query($conn, $sql);
	
	$kimenet=0;
	if ($result)
		$kimenet=1;

	print $kimenet;
	mysqli_close($conn);


?>