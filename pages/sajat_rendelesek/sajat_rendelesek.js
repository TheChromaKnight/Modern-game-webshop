$(document).ready(function(){
    
	$.post("pages/sajat_rendelesek/lekerdez.php", function(data, status){
        //alert("Data: " + data + "\nStatus: " + status);
		
		var tomb=JSON.parse(data);
		//alert("A legelső adat: "+tomb[0].film_cim);
		
		var szoveg="";
		szoveg+='<div style="overflow-x:auto;">';
		szoveg+='<table class="table table-hover">';
		szoveg+='<thead>';
		szoveg+='<tr>';
        szoveg+='<th>Rendeles azonosító</th>';
		 szoveg+='<th>Részletek</th>';
		szoveg+='<th>Rendelés végösszeg</th>';
        szoveg+='<th>Rendelés Dátum</th>';
        szoveg+='<th>Rendelés Státusz</th>';
		szoveg+='<th>Rendelés Típus név</th>';
		szoveg+='</tr>';
		szoveg+='</thead>';
		szoveg+='<tbody>';
		for (var i=0;i<tomb.length;i++)
		{
		szoveg+='<tr>';
		szoveg+='<td>'+tomb[i].rendeles_id+'</td>';
        szoveg+='<td><button id="'+tomb[i].rendeles_id+'"  class="reszletes_lista" type="button"  data-toggle="modal" data-target="#reszletes_modal1">Részletek</button></td>';
		szoveg+='<td>'+tomb[i].rendeles_vegosszeg+'</td>';
        szoveg+='<td>'+tomb[i].rendeles_datum+'</td>';
		szoveg+='<td>'+tomb[i].statusz_nev+'</td>';
		szoveg+='<td>'+tomb[i].utanvet_tipusnev+'</td>';
		
		
		
		szoveg+='</div>';
		
		}
		szoveg+='</table>';
		szoveg+='</div>';
 		szoveg+='</tbody><div id="reszletes_modal_helye"></div>';
		
		
		
		$("#tablazat").html(szoveg);
		$("#reszletes_modal_helye").load("pages/sajat_rendelesek/reszletes_modal1.html")
		
		$(".reszletes_lista").click(function(){
			// alert(this.id);
			var adatok=
			{
				rendeles_id:this.id
			}
			$.post("pages/rendelesek/reszletes_lekerdez.php",adatok,function(eredmeny2){
				 // alert(eredmeny2);
				
				
				var tomb=JSON.parse(eredmeny2);
				var reszletes_szoveg="";
				reszletes_szoveg+='Felhasználónév: ';
				reszletes_szoveg+=tomb[0].szemely_felh;
				reszletes_szoveg+='<br>'+'';
				reszletes_szoveg+='Email-cím: ';
				reszletes_szoveg+=tomb[0].rendeles_emailcim;
				reszletes_szoveg+='<br>';
				reszletes_szoveg+='Játék(ok) neve(i): ';
				for (var i = 0;i<tomb.length; i++)
				{
					reszletes_szoveg+=tomb[i].jatek_nev;
					reszletes_szoveg+=' ';		
				}
				
				reszletes_szoveg+='<br>';
				reszletes_szoveg+='Játék ár: ';
				for (var i = 0;i<tomb.length; i++)
				{
					reszletes_szoveg+=tomb[i].jatek_ar;
					reszletes_szoveg+=' ';
				}
				
				reszletes_szoveg+='<br>';
				reszletes_szoveg+='Keresztnév: ';
				reszletes_szoveg+=tomb[0].rendeles_keresztnev;
				reszletes_szoveg+='<br>';
				reszletes_szoveg+='Vezetéknév: ';
				reszletes_szoveg+=tomb[0].rendeles_vezeteknev;
				reszletes_szoveg+='<br>';
				reszletes_szoveg+='Telefonszám: ';
				reszletes_szoveg+=tomb[0].rendeles_telefonszam;
				reszletes_szoveg+='<br>';
				reszletes_szoveg+='Irányítószám: ';
				reszletes_szoveg+=tomb[0].rendeles_iranyitoszam;
				reszletes_szoveg+='<br>';
				reszletes_szoveg+='Település: ';
				reszletes_szoveg+=tomb[0].rendeles_telepules;
				reszletes_szoveg+='<br>';
				reszletes_szoveg+='Lakcím:';
				reszletes_szoveg+=tomb[0].rendeles_cim;
				reszletes_szoveg+='<br>';
				if(tomb[0].rendeles_megjegyzes)
				{
					reszletes_szoveg+='Megjegyzés: ';
					reszletes_szoveg+=tomb[0].rendeles_megjegyzes;
					reszletes_szoveg+='<br>';
				}
				else
				{
				
				}
				reszletes_szoveg+='Rendelés dátuma: ';
				reszletes_szoveg+=tomb[0].rendeles_datum;
				reszletes_szoveg+='<br>';
				// reszletes_szoveg+='<img src="kepek/'+tomb[0].film_kep+'">';
				$("#reszletes_modal_tartalma1").html(reszletes_szoveg);
				
				
			});
			
			
			
			
		});
		
		
    });
	
	
	
	
	
});