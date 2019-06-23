 <?php
//echo "hali";

include "../../alap/kapcsolat.php"; 
$jatek_id=$_POST["jatek_id"];
 
$sql = "UPDATE jatek SET jatek_nezettseg = (jatek_nezettseg +1) WHERE jatek_id = $jatek_id";
$result = mysqli_query($conn, $sql);
if ($result)
	$kimenet=1;
else
	$kimenet=0;

print $kimenet;
mysqli_close($conn);
?> 