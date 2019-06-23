 <?php
//echo "hali";

include "../../alap/kapcsolat.php"; 
$jatek_id =$_POST["jatek_id"];
 
$sql = "SELECT jatek_leiras FROM jatek WHERE jatek_id = $jatek_id";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        echo $row["jatek_leiras"];
    }
} else {
    echo "0 results";
}

mysqli_close($conn);
?> 