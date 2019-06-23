<?php
session_start();
require 'PHPMailerAutoload.php';

// $email_cim=$_SESSION["email_cim"];
// $felh_nev=$_SESSION["login_nev"];

$mail = new PHPMailer();
$mail->IsSMTP();                                          // SMTP-n keresztuli kuldes
$mail->Host     = 'tls://smtp.gmail.com';                     // SMTP szerverek
$mail->SMTPAuth = true;                                   // SMTP

$mail->SMTPSecure = 'tls';
$mail->Port = 587;

$mail->Username = 'szakos.benjamin987@gmail.com';            // SMTP felhasználo
$mail->Password = 'Knight99';                               // SMTP jelszo

$mail->From     = 'szakos.benjamin987@gmail.com';            // Felado e-mail cime
$mail->FromName = 'Szakos Benjámin';                // Felado neve
$mail->AddAddress('bebb99@freemail.hu', 'valami');         // Cimzett es neve
//$mail->AddAddress('ellen@site.com');                      // Meg egy cimzett
$mail->AddReplyTo('szakos.benjamin987@gmail', 'Válasz'); // Valaszlevel ide

//$mail->WordWrap = 80;                                     // Sortores allitasa
//$mail->AddAttachment('/var/tmp/file.tar.gz');             // Csatolas
//$mail->AddAttachment('/tmp/image.jpg', 'new.jpg');        // Csatolas mas neven
//$mail->IsHTML(true);                                      // Kuldes HTML-kent

$mail->Subject = 'Modern Game regisztráció';                   // A level targya
$mail->Body    = 'This is the <b>HTML body</b>';          // A level tartalma
$mail->AltBody = 'This is the text-only body';            // A level szoveges tartalma

if (!$mail->Send()) {
  echo 'A levél nem került elküldésre';
  echo 'A felmerült hiba: ' . $mail->ErrorInfo;
  exit;
}

echo 'A levelet sikeresen kiküldtük';
?>