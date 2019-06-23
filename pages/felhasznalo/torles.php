<?php 
include "../../alap/kapcsolat.php";

$data = json_decode(file_get_contents("php://input"));
$szemelyid = $data->szemelyid;

$sql = "DELETE FROM szemely WHERE szemely_id=$szemelyid ";
$result = mysqli_query($conn, $sql);
if ($result)
	$kimenet=1;
else
	$kimenet=0;

print $kimenet;
mysqli_close($conn);



?>