$(document).ready(function(){
    
	$.post("pages/jatek_modositas/lekerdez.php", function(data, status){
        //alert("Data: " + data + "\nStatus: " + status);
		
		var tomb=JSON.parse(data);
		//alert("A legelső adat: "+tomb[0].film_cim);
		
		var szoveg="";
		szoveg='<input id="gyorskereses" type="text" placeholder="Keresés..." style = "margin-bottom:15px;">';
		szoveg+='<div style="overflow-x:auto;">';
		szoveg+='<table class="table" style = "background-color:orange;">';
		szoveg+='<thead>';
		szoveg+='<tr class = "tablazat_teteje">';
        szoveg+='<th></th>';
		 szoveg+='<th>Cím</th>';
		szoveg+='<th>Besorolás</th>';
        szoveg+='<th>Platform</th>';
        szoveg+='<th>Kiadó</th>';
		szoveg+='<th>Megjelenés</th>';
		szoveg+='<th>Ár</th>';
		szoveg+='<th>Darab</th>';
		szoveg+='<th>Készlet</th>';
		szoveg+='<th>Ingyen szállítás</th>';
		szoveg+='<th></th>';
		szoveg+='</tr>';
		szoveg+='</thead>';
		szoveg+='<tbody id = "tablazat_kereses">';
		for (var i=0;i<tomb.length;i++)
		{
			szoveg+='<tr><span id="'+tomb[i].jatek_id+'"></span>';
			szoveg+='<td><img class = "jatek_tablazat_kep" src="kepek/'+tomb[i].jatek_kep+'""></td>';
			szoveg+='<td><span class = "jatek_tablazat_nev">'+tomb[i].jatek_nev+'</span></td>';
			szoveg+='<td><span class = "jatek_tablazat_leiras">'+tomb[i].eletkor_csoport+'</span></td>';
			if(tomb[i].tipus_nev=="PC")
			{
				szoveg+='<td><img class = "jatek_logo_kep" src = "kepek/pc_logo.jpeg"></td>';
			}
			else if(tomb[i].tipus_nev=="PS4")
			{
				szoveg+='<td><img class = "jatek_logo_kep" src = "kepek/ps4_logo.png"></td>';
			}
			else if(tomb[i].tipus_nev=="Xbox One")
			{
				szoveg+='<td><img class = "jatek_logo_kep" src = "kepek/xbox_one_logo.png"></td>';
			}
			else if(tomb[i].tipus_nev=="Nintendo Switch")
			{
				szoveg+='<td><img class = "jatek_logo_kep" src = "kepek/nintendo_switch_logo.png"></td>';
			}
			
			szoveg+='<td><span class = "jatek_tablazat_leiras">'+tomb[i].kiado_nev+'</span></td>';
			szoveg+='<td><span class = "jatek_tablazat_ev">'+tomb[i].jatek_ev+'</span></td>';
			szoveg+='<td><span class = "jatek_tablazat_ar">'+tomb[i].jatek_ar+'</span></td>';
			szoveg+='<td><span class = "jatek_tablazat_leiras">'+tomb[i].jatek_darab+'</span></td>';
			szoveg+='<td><span class = "jatek_tablazat_leiras">'+tomb[i].jatek_keszlet_nev+'</span></td>';
			szoveg+='<td><span class = "jatek_tablazat_leiras">'+tomb[i].jatek_ingyen_szallitas_tipus+'</span></td>';
			szoveg+='<td><button id = "'+tomb[i].jatek_id+'" class = "modositas" data-toggle="modal" data-target="#modosit_modal">Módosítás</button></td>';
		
		
		
		
			szoveg+='</div>';
		
		
			
		}
		szoveg+='</tbody>';
		szoveg+='</table>';
		szoveg+='</div>';
		szoveg+='<div id = "modosit_modal_helye"></div>';
		
		
		
		
		$("#tablazat").html(szoveg);
		
		$("#modosit_modal_helye").load("pages/jatek_modositas/modosit_modal.html");
		
		 $("#gyorskereses").on("keyup", function() {
			var value = $(this).val().toLowerCase();
			$("#tablazat_kereses tr").filter(function() {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
			});
		});
		
		
		$(".modositas").click(function(){
			
			var jatek_adat =
			{
				jatek_id:this.id
			}
			// alert(jatek_adat.jatek_id);
			$.post("pages/jatek_modositas/modositas_lekerdez.php",jatek_adat,function(eredmeny) {
				// alert(eredmeny);
				var tomb_modosit=JSON.parse(eredmeny);
				
				var jatek_nev = tomb_modosit[0].jatek_nev;
				var jatek_datum = tomb_modosit[0].jatek_ev;
				var jatek_ar = tomb_modosit[0].jatek_ar;
				var jatek_darab = tomb_modosit[0].jatek_darab;
				
				  // alert(jatek_keszletid);
				
			
			
			var modositas = "";
			modositas+='<strong>Cím:</strong><br>';
				modositas+='<input type="text" id="jatekcim"  placeholder="Játék Címe..." class="felviteldoboz"  ><br><span id="hiba1" class="hibaszoveg" >&nbsp;</span><br>';
			modositas+='<strong>Dátum:</strong><br>';
				modositas+='<input type="date" id="jatekdatum"  class="felviteldoboz"><br><span id="hiba2" class ="hibaszoveg"  >&nbsp;</span><br>';
			modositas+='<strong>Ár:</strong><br>';
				modositas+='<input type="text" id="jatekar" placeholder="Játék ára..." class="felviteldoboz"><br><span id="hiba3" class ="hibaszoveg"  >&nbsp;</span><br>';
			modositas+='<strong>Darab:</strong><br>';
				modositas+='<input type="text" id="jatek_darab" placeholder="Darabszám..." class="felviteldoboz"><br><span id="hiba4" class ="hibaszoveg"  >&nbsp;</span><br>';
			
			modositas+='<strong>Készlet:</strong><br>';
				modositas+='<input type="radio" name="jatek_keszletid" value="0" checked> Kifogyott<br>';
				modositas+='<input type="radio" name="jatek_keszletid" value="1"> Készleten<br> ';
				modositas+='<input type="radio" name="jatek_keszletid" value="2"> Előrendelhető<br>';
				modositas+='<input type="radio" name="jatek_keszletid" value="3"> Előrendelésben elfogyott<br><br>';
			
			modositas+='<strong>Ingyen szállítás:</strong><br>';
				modositas+='<input type="radio" name="jatek_ingyen_szallitas" value="1"> igen<br>';
				modositas+='<input type="radio" name="jatek_ingyen_szallitas" value="0" checked> nem<br>';
			
			
			
			
			$("#modosit_modal_tartalma").html(modositas);
			//Változók tartalmának betöltése
			$("#jatekcim").val(jatek_nev);
			$("#jatekdatum").val(jatek_datum);
			$("#jatekar").val(jatek_ar);
			$("#jatek_darab").val(jatek_darab);
			
			$("#modosit_gomb").click(function(){
				// alert("megy");
				var modositas_adatok=
				{
					jatekid1:jatek_adat.jatek_id,
					jatekcim:$("#jatekcim").val(),
					jatekdatum:$("#jatekdatum").val(),
					jatekar:$("#jatekar").val(),
					jatekdarab:$("#jatek_darab").val(),
					jatek_keszletid:$("[name='jatek_keszletid']:checked").val(),
					jatek_ingyen_szallitas:$("[name='jatek_ingyen_szallitas']:checked").val()
				}
				// alert(modositas_adatok.jatekcim);
				var jatekcimhiba = 0;
				var jatekcimhiba2 = 0;
				var jatekdatumhiba = 0;
				var jatekarhiba = 0;
				var jatekarhiba1 = 0;
				var jatekdarabhiba = 0;
				var jatekdarabhiba1 = 0;
				
				$("#hiba1").html("&nbsp;");
				$("#hiba2").html("&nbsp;");
				$("#hiba3").html("&nbsp;");
				$("#hiba4").html("&nbsp;");	
				
				
				// játék cím vizsgálata		
				if (modositas_adatok.jatekcim=="")
				{
					$("#hiba1").html("Üres mező!");
					jatekcimhiba = 1;
				}
				else if (modositas_adatok.jatekcim.length<2)
				{
					$("#hiba1").html("Túl rövid!");
					jatekcimhiba2=1;
				}
				else {
					jatekcimhiba = 0;
					jatekcimhiba2 = 0;
				}
					
			
					// Játék dátum vizsgálata
				
				if (modositas_adatok.jatekdatum=="")
				{
					$("#hiba2").html("Üres dátumot nem adhatsz meg!");
					jatekdatumhiba=1;
				}
				else {
					jatekdatumhiba=0;
				}
					// Játék ár vizsgálata
				if (modositas_adatok.jatekar=="")
				{
					$("#hiba3").html("Nem adtál meg árat!");
					jatekarhiba1=1;
				}
				else {
					jatekarhiba1=0;
				}
				
				if (isNaN(modositas_adatok.jatekar))
				{
					$("#hiba3").html("Csak számot adhatsz meg!");
					jatekarhiba=1;
				}
				else{
					
					jatekarhiba = 0;
				}
				//Darab vizsgálata
				if (modositas_adatok.jatekdarab=="")
				{
					$("#hiba4").html("Nem adtál meg Darabszámot!");
					jatekdarabhiba1=1;
				}
				else {
					jatekdarabhiba1=0;
				}
				if (isNaN(modositas_adatok.jatekdarab))
				{
					$("#hiba4").html("Csak számot adhatsz meg!");
					jatekdarabhiba=1;
				}
				else{
					
					jatekdarabhiba = 0;
					
				}
				
				// if (jatekcimhiba == 0 && jatekcimhiba2 == 0 && jatekdatumhiba == 0   && jatekarhiba == 0 && jatekarhiba1 == 0 && jatekdarabhiba == 0 && jatekdarabhiba1 == 0) 
				// {		
				
					$.post("pages/jatek_modositas/modositas_feltolt.php",modositas_adatok,function(eredmeny2){
						if(eredmeny2==1)
						{
							alert("Módosítás sikerült!");
						}
							
						else {
							alert("Valami hiba történt!");
						}
						
					});
				// }
				
				
				
			});
		});
			});

		
		
		
		
    });
	
	
	
	
	
});