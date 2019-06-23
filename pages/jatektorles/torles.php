<?php 
include "../../alap/kapcsolat.php";

$data = json_decode(file_get_contents("php://input"));
$jatekid = $data->jatekid;

$sql = "DELETE FROM jatek WHERE jatek_id=$jatekid ";
$result = mysqli_query($conn, $sql);
if ($result)
	$kimenet=1;
else
	$kimenet=0;

print $kimenet;
mysqli_close($conn);



?>