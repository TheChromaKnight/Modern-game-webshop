<?php 
	include "../../alap/kapcsolat.php";
	$ujtipusnev=$_POST["ujtipusnev"];
	
	
	
	$sql = "INSERT INTO tipus
VALUES ( NULL,'$ujtipusnev');";
	$result = mysqli_query($conn, $sql);
	
	$kimenet=0;
	if ($result)
		$kimenet=1;

	print $kimenet;
	mysqli_close($conn);


?>