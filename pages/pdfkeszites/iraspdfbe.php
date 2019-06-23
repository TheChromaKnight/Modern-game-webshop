<?php

// Optionally define the filesystem path to your system fonts
// otherwise tFPDF will use [path to tFPDF]/font/unifont/ directory
// define("_SYSTEM_TTFONTS", "C:/Windows/Fonts/");

include "../../alap/kapcsolat.php"; 

require('tfpdf.php');
$bevitel1=$_POST['bevitel1']; 


$sql="SELECT rendeles_id,rendeles_vegosszeg,rendeles_felhasznaloid FROM rendeles";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        echo "id: " . $row["rendeles_id"]. " - Name: " . $row["rendeles_vegosszeg"]. " " . $row["rendeles_felhasznaloid"]. "<br>";
    }
} else {
    echo "0 results";
}




$pdf = new tFPDF();
$pdf->AddPage();

// Add a Unicode font (uses UTF-8)
$pdf->AddFont('DejaVu','','DejaVuSansCondensed.ttf',true);
$pdf->SetFont('DejaVu','',14);

// Load a UTF-8 string from a file and print it
$txt = 'Hello';
$txt .= 'Na mi van???';
$pdf->Write(8,$txt);


$pdf->Ln(10);
$pdf->Write(5,$result);
$pdf->Write(6,$bevitel1);

//$pdf->Output();

$path = "Rendelesek.pdf"; 
$pdf->Output($path,'F');
print $path;

mysqli_close($conn);
?>
