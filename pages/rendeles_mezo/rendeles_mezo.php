<!-- Modálisban az adatok visszaíratása majd feldolgozása -->
<div class="row" style = "padding:20px;">

  <div class="col-sm-6">
  
   <div class="row">
  <div class="col-sm-4">Keresztnév</div>
  <div class="col-sm-8"> <input type="text" id="keresztnev"  placeholder="Keresztnév" class="felviteldoboz"  ><br><span id="keresztnevhiba" class="hibaszoveg" >&nbsp;</span></div>
</div> 
  
   <div class="row">
  <div class="col-sm-4">Vezetéknév</div>
  <div class="col-sm-8"><input type="text" id="vezeteknev" placeholder = "Vezetéknév" class="felviteldoboz"><br><span id="vezeteknevhiba" class ="hibaszoveg"  >&nbsp;</span></div>
</div> 

 <div class="row">
  <div class="col-sm-4">Telefonszám</div>
  <div class="col-sm-8"><input type="tel" id="telefonszam" placeholder="Telefonszám" class="felviteldoboz"><br><span id="telefonszamhiba" class ="hibaszoveg"  >&nbsp;</span></div>
</div> 


<div class="row">
  <div class="col-sm-4"> Irányítószám</div>
  <div class="col-sm-8"> <input type="num" id="iranyitoszam" placeholder="Irányítószám" class="felviteldoboz"><br><span id="iranyitoszamhiba" class ="hibaszoveg"  >&nbsp;</span></div>
</div> 

   <div class="row">
  <div class="col-sm-4"> Település</div>
  <div class="col-sm-8"> <input type="text" id="telepules" placeholder="Település" class="felviteldoboz"><br><span id="telepuleshiba" class ="hibaszoveg"  >&nbsp;</span></div>
</div> 
  </div>
  
	<!-- jobb oldal -->
  <div class="col-sm-6"> 
  
  <div class="row">
  <div class="col-sm-4"> Cím</div>
  <div class="col-sm-8"><input type="text" id="cim" placeholder="Cím" class="felviteldoboz"><br><span id="cimhiba" class ="hibaszoveg"  >&nbsp;</span></div>
</div> 

<div class="row">
  <div class="col-sm-4"> E-mail cím</div>
  <div class="col-sm-8"> <input type="email" id="email_cim" placeholder="Valaki@email.com" class="felviteldoboz"><br><span id="emailcimhiba" class ="hibaszoveg"  >&nbsp;</span></div>
</div> 

<div class="row">
  <div class="col-sm-4"> megjegyzés</div>
  <div class="col-sm-8"> <textarea id = "megjegyzes" rows="4" cols="35">

</textarea></div>
</div> <br>

<div class="row">
  <div class="col-sm-4">
	<strong>Utánvét típusa:</strong>
	</div>
  
  <div class="col-sm-8"> 
 <input type="radio" name="utanvet" value="1" checked> Bankkártyával történő fizetés<br>
  <input type="radio" name="utanvet" value="2"> Készpénzzel történő fizetés<br>
  </div>
</div> 

<br>



<div class="row">
  <div class="col-sm-4"><strong>A felhasználási feltételeket elolvastam és elfogadtam</strong></div>
  <div class="col-sm-8"> 
  <input type="checkbox" name="felh_feltetel" value="1"><br><span id="felh_feltetelhiba" class ="hibaszoveg"  >&nbsp;</span>
  </div>
</div> 

<br>

  <input type="submit" value="Tovább" id="tovabb_gomb" style = "float:right;">
  
<br>
</div>
  
</div> 
</br>

<!-- modal -->
<div class="modal" id = "kiirat_modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title"><strong>Adat egyeztetés</strong></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" id = "modal_body_rendeles">
	  
        <p>Keresztnév: <span></span></p>
		<p>Vezetéknév: <span></span></p>
		<p>Telefonszám: <span></span></p>
		<p>Irányítószám: <span></span></p>
		<p>Település: <span></span></p>
		<p>Cím: <span></span></p>
		<p>E-mail cím: <span></span></p>
		
		
      </div>
      <div class="modal-footer">
        <button type="button" id = "megrendel_veglegesit_gomb" class="btn btn-primary">Megrendel</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Mégse</button>
      </div>
    </div>
  </div>
</div>

<!-- modal -->


<script src="pages/rendeles_mezo/rendeles_mezo.js"></script> 






