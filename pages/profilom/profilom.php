<?php 
if (isset($_SESSION["login_nev"]) && $_SESSION["login_rang"]==0)
{
?>
	


 <div class="row" >
  <div class="col-xs-1 col-sm-1 col-lg-4" > <!-- egyik fele -->
</div>
  <div class="col-xs-10 col-sm-10 col-lg-4" id = "simakeret"	> <!-- második fele -->
  
    <div class="row"> <!-- újabb igazítás -->
      <div class="col-xs-1 col-sm-4 col-md-4"></div>
	  
	  
      <div class="col-xs-10 col-sm-4 col-md-4" > <!-- közép -->
		<div class="row" >
			<div class="col-sm-12">Felhasználónév*</div>
			
		</div> 
		<div class="row">
			<div class="col-sm-12"> <input type="text" id="felh_nev"  placeholder="Felhasználónév..." class="felviteldoboz"  ><br><span id="felh_nev_hiba" class="hibaszoveg" >&nbsp;</span></div>
		</div> 

		<div class="row">
			<div class="col-sm-12">Email-cím*</div>
		</div>

		<div class="row">
			<div class="col-sm-12"><input type="text" id="email_cim"  placeholder="Email-cím..." class="felviteldoboz"  ><br><span id="email_hiba" class="hibaszoveg" >&nbsp;</span></div>
		</div>
		<div class="row">
			<div class="col-sm-12">Jelszó*</div>
		</div>
		

		<div class="row">
			<div class="col-sm-12"><input type="password" id="jelszo"  placeholder="Jelszó..." class = "felviteldoboz"  ><br><span id="jelszo_hiba" class="hibaszoveg" >&nbsp;</span></div>
		</div>
		
		<div class="row">
			<div class="col-sm-12">Jelszó mégegyszer*</div>
		</div>
		

		<div class="row">
			<div class="col-sm-12"><input type="password" id="jelszo_megegyszer"  placeholder="Jelszó újra..." class = "felviteldoboz"  ><br><span id="jelszo_hiba1" class="hibaszoveg" >&nbsp;</span></div>
		</div>
		
		
		
		 <input type="submit" value="Frissítés" id="frissitgomb">
	  
	  
	  </div>
	  <div class="col-xs-1 col-sm-4 col-lg-4"></div>
    </div>

  
			
		
		
			
			
		
  
<!--<div class="row">
  <div class="col-sm-4"> Életkor:</div>
  <div class="col-sm-8"> <div id="eletkorhelye" ></div><br><span   >&nbsp;</span></div>
</div>  -->

  </div>
   <div class="col-xs-1 col-md-4"></div> <!-- harmadik fele -->	
  </div>
  
 

<script src="pages/profilom/profilom.js"></script> 

<?php
}
else 
	echo "Hozzáférés megtagadva...";
?>




