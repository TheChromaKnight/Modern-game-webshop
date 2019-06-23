<?php 
if (isset($_SESSION["login_nev"]) && $_SESSION["login_rang"]==1)
{
?>
	

<div class="row">
  <div class="col-xs-0 col-sm-0 col-lg-1"></div>
  <div class="col-xs-12 col-sm-12 col-lg-10">

 <div class="row" id = "adminkeret">
  <div class="col-sm-6" > <!-- egyik fele -->
   <div class="row">
  <div class="col-sm-4">Játék Címe:</div>
  <div class="col-sm-8"> <input type="text" id="jatekcim"  placeholder="Játék Címe..." class="felviteldoboz"  ><br><span id="hiba1" class="hibaszoveg" >&nbsp;</span></div>
</div> 

 <div class="row">
  <div class="col-sm-4">Megjelenés:</div>
  <div class="col-sm-8"><input type="date" id="jatekdatum"  class="felviteldoboz"><br><span id="hiba2" class ="hibaszoveg"  >&nbsp;</span></div>
</div> 

<div class="row">
  <div class="col-sm-4">Játék Ára:</div>
  <div class="col-sm-8"><input type="text" id="jatekar" placeholder="Játék ára..." class="felviteldoboz"><br><span id="hiba3" class ="hibaszoveg"  >&nbsp;</span></div>
</div> 

	<!-- Kiadó feltöltés -->
<div class="row">
  <div class="col-sm-4"><button  id  = "ujkiadogomb" class = "lenyito_gomb" data-toggle="collapse" data-target="#ujkiado">Új kiadó</button></div> 
  <br>
  <div class="col-sm-8">
  <div id="ujkiado" class="collapse">
<input type="text" id="ujkiadonev" placeholder = "Új kiadó"  class="felviteldoboz"><br><span id="hiba7" class ="hibaszoveg">&nbsp;</span>
<br>
<button id = "kiadofeltoltesgomb" class = "atlag_gomb">Feltöltés</button>
<br>

</div> 
</div>  
</div> 

	<!-- Típus feltöltés -->
<div class="row">
  <div class="col-sm-4"><button id = "ujtipusgomb" class = "lenyito_gomb" data-toggle="collapse" data-target="#ujtipus">Új típus</button></div> 
  <div class="col-sm-8">
  <div id="ujtipus" class="collapse">
<input type="text" id="ujtipusnev" placeholder = "Új típus"  class="felviteldoboz"><br><span id="hiba6" class ="hibaszoveg"  >&nbsp;</span>
<br>
<button id = "tipusfeltoltesgomb" class = "atlag_gomb">Feltöltés</button>
<br>
<br>

</div> 
</div>  
</div> 

<div class="row">
  <div class="col-sm-4"> Típus:</div>
  <div class="col-sm-8"> <div id="tipushelye"></div><br><span >&nbsp;</span></div>
</div> 

   <div class="row">
  <div class="col-sm-4"> Kiadó:</div>
  <div class="col-sm-8"> <div id="kiadohelye" ></div><br><span   >&nbsp;</span></div>
</div> 

 <div class="row">
  <div class="col-sm-4"> Stílus:</div>
  <div class="col-sm-8"> <div id="stilushelye" ></div><br><span   >&nbsp;</span></div>
</div> 

 <div class="row">
  <div class="col-sm-4"> DLC:</div>
  <div class="col-sm-8"> <div id="dlchelye" ></div><br><span   >&nbsp;</span></div>
</div> 

  </div>
  <div class="col-sm-6"> <!-- második fele -->
<div class="row">
  <div class="col-sm-4"> Életkor:</div>
  <div class="col-sm-8"> <div id="eletkorhelye" ></div><br><span   >&nbsp;</span></div>
</div> 

<div class="row">
  <div class="col-sm-4">Darabszám:</div>
  <div class="col-sm-8"><input type="text" id="jatek_darab" placeholder="Darabszám..." class="felviteldoboz"><br><span id="hiba4" class ="hibaszoveg"  >&nbsp;</span></div>
</div> 

 



 <div class="row">
  <div class="col-sm-4">Játék leírás:</div>
  <div class="col-sm-8"><textarea  id="jatekleiras"  class = "felviteldoboz" rows="7" cols="20">
  </textarea><br><span  >&nbsp;</span></div>
</div> 

<input type="file" id="bevitel" name="bevitel"><br><span id="hiba5" class ="hibaszoveg"  >&nbsp;</span>
<br>

<div class="row">
  <div class="col-sm-4">Játék készlet:</div>
  <div class="col-sm-8"> 
  <input type="radio" name="jatek_keszletid" value="0"> Kifogyott<br>
  <input type="radio" name="jatek_keszletid" value="1"> Készleten<br> 
  <input type="radio" name="jatek_keszletid" value="2" checked> Előrendelhető<br>
  <input type="radio" name="jatek_keszletid" value="3" > Előrendelésben elfogyott<br> 
  </div>
</div></br> 

<div class="row">
  <div class="col-sm-4">Játék ingyen szállítás:</div>
  <div class="col-sm-8"> 
  <input type="radio" name="jatek_ingyen_szallitas" value="1"> igen<br>
  <input type="radio" name="jatek_ingyen_szallitas" value="0" checked> nem<br> 
  </div>
</div> 

<br>




<!--
   <div class="row">
  <div class="col-sm-4"> Típus:</div>
  <div class="col-sm-8"> <div id="tipushelye"></div><br><span  class="hibaszoveg" >&nbsp;</span></div>
</div> 
 
 <div class="row">
  <div class="col-sm-4">Ajánlom:</div>
  <div class="col-sm-8"> 
  <input type="radio" name="bevitel6" value="1"> igen<br>
  <input type="radio" name="bevitel6" value="0"> nem<br> 
  </div>
</div> 
<div class="row">
  <div class="col-sm-4">Korcsoport:</div>
  <div class="col-sm-8"> 
   <input type="checkbox" name="bevitel7" value="1"> gyerekek<br>
<input type="checkbox" name="bevitel8" value="1"> 20-40 év<br>
<input type="checkbox" name="bevitel9" value="1" > 40 fölött<br> 
  </div>
</div> 

-->



  <input type="submit" value="Adatok felvitele" id="gomb" class = "lenyito_gomb">
  
<br>
  <div id="siker"></div></div>
  <div class="col-sm-4"></div>
  </div>
   <div class="col-xs-0 col-sm-0 col-lg-1"></div>
</div> <!-- vége -->
</div>
</br>

<script src="pages/jatekfeltoltes/jatekfeltoltes.js"></script> 

<?php
}
else 
	echo "Hozzáférés megtagadva...";
?>




