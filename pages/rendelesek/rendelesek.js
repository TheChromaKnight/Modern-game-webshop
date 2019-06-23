$(document).ready(function(){
    frissit();
	function frissit()
	{
	$.post("pages/rendelesek/lekerdez.php", function(data, status){
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
		szoveg+='<th>rendelés végösszeg</th>';
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
        szoveg+='<td><button id="'+tomb[i].rendeles_id+'"  class="reszletes_lista" type="button"  data-toggle="modal" data-target="#reszletes_modal">Részletek</button></td>';
		szoveg+='<td>'+tomb[i].rendeles_vegosszeg+'</td>';
        szoveg+='<td>'+tomb[i].rendeles_datum+'</td>';
		szoveg+='<td>'+tomb[i].statusz_nev+'</td>';
		szoveg+='<td>'+tomb[i].utanvet_tipusnev+'</td>';
		szoveg+='<td><button type="button" id="pdf_'+tomb[i].rendeles_id+'"class = "pdf_keszites"">PDF letöltése</button></td>';
		szoveg+='<td><button type="button"  data-toggle="modal" data-target="#modosit_modal" id="'+tomb[i].rendeles_id+'" class = "statusz_modosit_gomb"">Módosítás</button></td>';
		
		
		
		szoveg+='</div>';
		
		
		}
		szoveg+='</table>';
		szoveg+='</div>';
		
 		szoveg+='</tbody><div id="reszletes_modal_helye"></div>';
		szoveg+='<div id = "modosit_modal_helye"></div>';
		
		
		
		
		$("#tablazat").html(szoveg);
		$("#reszletes_modal_helye").load("pages/rendelesek/reszletes_modal.html");
		$("#modosit_modal_helye").load("pages/rendelesek/modosit_modal.html");
		
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
				reszletes_szoveg+='Játék név: ';
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
				reszletes_szoveg+='Megjegyzés: ';
				reszletes_szoveg+=tomb[0].rendeles_megjegyzes;
				reszletes_szoveg+='<br>';
				reszletes_szoveg+='Rendelés dátuma: ';
				reszletes_szoveg+=tomb[0].rendeles_datum;
				reszletes_szoveg+='<br>';
				// reszletes_szoveg+='<img src="kepek/'+tomb[0].film_kep+'">';
				$("#reszletes_modal_tartalma").html(reszletes_szoveg);
				
				
			});
			
			
			
			
		});
		
		$(".pdf_keszites").click(function(){
	
		 var adatok=
			{
				bevitel1:"atkuldott"
			}
			$.post("pages/pdfkeszites/iraspdfbe.php", adatok,function(eredmeny){
				alert(eredmeny);
				window.open("pages/pdfkeszites/Rendelesek.pdf", '_blank');
				
				});		
						
			});
			
		$(".statusz_modosit_gomb").click(function(){
			
			var statuszadatok = 
			{
				rendeles_id:this.id
			}
			// alert(statuszadatok.rendeles_id);
			
			$.post("pages/rendelesek/statuszlekerdez.php",function(statusz_eredmeny){
				// alert(statusz_eredmeny);
				var tomb = JSON.parse(statusz_eredmeny);
				var statusz = "";
				
				statusz +='<select id = "statuszid">';
				
				for(var i = 0; i<tomb.length;i++)
				{
					statusz+='<option value ="'+tomb[i].statusz_id+'">'+tomb[i].statusz_nev+'</option>';
				}
				statusz+='</select>';
				
				$("#modosit_modal_tartalma").html(statusz);
			});
			
			$("#modosit_gomb").click(function(){
				var modosit_adat = 
				{
					statuszid:$("#statuszid").val(),
					rendeles_id1:statuszadatok.rendeles_id
				}
				 // alert(modosit_adat.rendeles_id1);
				
				$.post("pages/rendelesek/statuszmodosit.php",modosit_adat,function(modosit_eredmeny){
					
					// location.reload(true);
					frissit();
					
				});
			});
			
			
		});
		
		
		
    });
	}
	
	
	
	
	
});