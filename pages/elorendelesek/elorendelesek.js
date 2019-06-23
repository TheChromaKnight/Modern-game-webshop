$(document).ready(function(){
    
	$.post("pages/elorendelesek/lekerdez.php", function(data, status){
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
			//ide megy a kosárba gomb
			szoveg+='<td> <button type="button" class = "tablazat_kosargomb" id="'+tomb[i].jatek_id+'_'+tomb[i].jatek_nev+'_'+tomb[i].jatek_ar+'_'+tomb[i].jatek_kep+'" >Kosárba</button><td>';
		
		
		
			szoveg+='</div>';
		
		
			
		}
		szoveg+='</tbody>';
		szoveg+='</table>';
		szoveg+='</div>';
		
		
		
		$("#tablazat").html(szoveg);
		
		//Keresés funkció
		$("#gyorskereses").on("keyup", function() {
			var value = $(this).val().toLowerCase();
			$("#tablazat_kereses tr").filter(function() {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
			});
		});

		
		$(".tablazat_kosargomb").click(function(){
				
				
       // alert(this.id);
		 var z=this.id.split("_");
		 // alert(z[0]);
		
		var adatok=
			{
			termekid:z[0],
			termeknev:z[1],
			termekar:z[2],
			termekkep:z[3]
			}
		
			
			
			 $.post("pages/elorendelesek/kosarba_beszuras.php",adatok,function(eredmeny){
				location.reload(false);
			});
			
    });
		
    });
	
	
	
	
	
});