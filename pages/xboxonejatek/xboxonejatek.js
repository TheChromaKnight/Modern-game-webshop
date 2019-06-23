$(document).ready(function(){
    // https://getbootstrap.com/docs/4.0/components/card/ EZT KELL CSINÁLNI LEGKÖZELEBB!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	$.post("pages/xboxonejatek/lekerdez.php", function(data, status){
        //alert("Data: " + data + "\nStatus: " + status);
		
		var tomb=JSON.parse(data);
		//alert("A legelső adat: "+tomb[0].film_cim);
		
		var szoveg="";
		var doboz = "";
		szoveg+='<div class="row">';
		szoveg+='<div class=" col-sm-0 col-md-2"></div>'; // 1.rész
		
		
		
		
		
		szoveg+='<div class=" col-sm-12 col-md-8">'; // 2.rész

		for (var i=0;i<tomb.length;i++)
		{
		if (i%3==0)	
			szoveg+='<div class="row">';
	if(tomb[i].jatek_keszletid == 0 || tomb[i].jatek_keszletid == 3 || tomb[i].jatek_ar ==0)
		{
			szoveg+='<div class="col-sm-4"><div class="jatekkeret" id="'+tomb[i].jatek_id+'">';
		}
		else 
			szoveg+='<div class="col-sm-4"><div class="jatekkeret_disabled" id="'+tomb[i].jatek_id+'">';
		
		szoveg+='<img class = "jatekkep" id = "'+tomb[i].jatek_id+'" src="kepek/'+tomb[i].jatek_kep+'"">';
		szoveg+='<br><div class="jatekcimstilus">'+tomb[i].jatek_nev+'</div>';
		
	if(tomb[i].jatek_keszletid ==0)
			szoveg+='<div ><img class = "keszletkep" src="kepek/x.png"><span class = "keszlet_leiras">Kifogyott<span></div>';
		else if (tomb[i].jatek_keszletid ==1)
			szoveg+='<div ><img class = "keszletkep" src="kepek/yes.png"><span class = "keszlet_leiras">Készleten<span></div>';
		else if (tomb[i].jatek_keszletid ==2)
			szoveg+='<div ><img class = "keszletkep" src="kepek/elorendel.png"><span class = "keszlet_leiras">Előrendelhető<span></div>';
		else  
			szoveg+='<div ><img class = "keszletkep" src="kepek/x.png"><span class = "keszlet_leiras">Előrendelésben elfogyott<span></div>';
		
		if(tomb[i].jatek_ingyen_szallitas ==1)
		{
		szoveg+='<div><img class = "keszletkep" src="kepek/ingyen_szallitas.png"><span class = "szallitas_leiras">Ingyenes házhoz szállítás<span></div>';
		}
		else
			szoveg+='<br>';
		
		szoveg+='<hr>';
		if(tomb[i].jatek_ar == 0)
		{
			szoveg+='<div class = "jatekcimstilus">Besorolás alatt<span></span></div>';
		}
		else	
		szoveg+='<div class = "jatekarstilus">'+tomb[i].jatek_ar+'<span> Ft</span>'+'</div>';
		szoveg+='<span class = "jatekegyebstilus">Bruttó ár</span>';
		
	if(tomb[i].jatek_keszletid == 0 || tomb[i].jatek_keszletid == 3 || tomb[i].jatek_ar == 0)
		{
			szoveg+=' <button type="button" class = "rejtettgomb"   style = "float:right";>Kosárba</button>';
			$('.rejtettgomb').prop('disabled', true);
		}
		else
			szoveg+=' <button type="button" class = "kosargomb" id="'+tomb[i].jatek_id+'_'+tomb[i].jatek_nev+'_'+tomb[i].jatek_ar+'"  style = "float:right";>Kosárba</button>';
		
		szoveg+='<div class = "urester"></div>'
		//szoveg+='<td><button type="button" id="'+tomb[i].film_id+'"class="btn btn-info btn-lg sajat" data-toggle="modal" data-target="#myModal">Open Modal</button></td>';
		szoveg+='</div></div>';
		if (i%3==2)
			szoveg+='</div>'; 	
		}
		//ITT JÖN A GRID!!!!!!!!!!!!!!!4444!!!!! 3. RÉSZE
		szoveg+='<div class="col-sm-0 col-md-2"></div>';
		szoveg+='</div>';
		
		
				
		$("#tablazat").html(szoveg);
		
		$(".jatekkep").click(function(){
			
			
			// alert(this.id);
			var adatok1=
			{
				jatek_id:this.id
			}
			$.post("pages/xboxonejatek/nezettseg_novel.php",adatok1,function(){
						
			});
			$.post("pages/xboxonejatek/leiras_lekerdez.php",adatok1,function(eredmeny1){
				
					$("#leiras_modal").modal();
						 
					$("#leiras_modal_tartalma").html(eredmeny1);
					
					
				
				
			});
			
			
			
		});
		
		
		
		$(".kosargomb").click(function(){
				
				
       // alert(this.id);
		 var z=this.id.split("_");
		 // alert(z[0]);
		
		var adatok=
			{
			termekid:z[0],
			termeknev:z[1],
			termekar:z[2]
			}
		
			
			
			 $.post("pages/xboxonejatek/kosarba_beszuras.php",adatok,function(eredmeny){
				 location.reload(false);
			});
			
    });
		
		
		
    });
	
	
	
	
	
	
});