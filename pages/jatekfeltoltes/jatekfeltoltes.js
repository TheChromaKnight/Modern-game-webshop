$(document).ready(function(){	
	frissit();
	function frissit ()
	{
		//Kiadó lista
	$.post("pages/jatekfeltoltes/kiadolekerdez.php",function(eredmeny){
			// alert(eredmeny);			
			var tomb=JSON.parse(eredmeny);
			var szoveg="";
			
			szoveg+='<select id="jatekkiado">';
			
			for (var i=0;i<tomb.length;i++)
			{
				szoveg+='<option value="'+tomb[i].kiado_id+'">'+tomb[i].kiado_nev+'</option>';	
			}
			
			szoveg+='</select>'; 
		
			$("#kiadohelye").html(szoveg);
		});
		// Stílus lista
		$.post("pages/jatekfeltoltes/stiluslekerdez.php",function(eredmeny){
			// alert(eredmeny);			
			var tomb=JSON.parse(eredmeny);
			var szoveg="";
			
			szoveg+='<select id="jatek_stilusid">';
			
			for (var i=0;i<tomb.length;i++)
			{
				szoveg+='<option value="'+tomb[i].stilus_id+'">'+tomb[i].stilus_nev+'</option>';
			}
			
			szoveg+='</select>'; 
		
			$("#stilushelye").html(szoveg);
		});
		//DLC lista
	$.post("pages/jatekfeltoltes/dlclekerdez.php",function(eredmeny){
			// alert(eredmeny);			
			var tomb=JSON.parse(eredmeny);
			var szoveg="";
			
			szoveg+='<select id="jatek_dlcid">';
			
			for (var i=0;i<tomb.length;i++)
			{
				szoveg+='<option value="'+tomb[i].dlc_id+'">'+tomb[i].dlc_nev+'</option>';
			}
			
			szoveg+='</select>'; 
		
			$("#dlchelye").html(szoveg);
		});
		
		//Típus lista
		$.post("pages/jatekfeltoltes/tipuslekerdez.php",function(eredmeny){
			// alert(eredmeny);			
			var tomb=JSON.parse(eredmeny);
			var szoveg="";
			
			szoveg+='<select id="jatektipus">';
			
			for (var i=0;i<tomb.length;i++)
			{
				szoveg+='<option value="'+tomb[i].tipus_id+'">'+tomb[i].tipus_nev+'</option>';
			}
			
			szoveg+='</select>'; 
		
			$("#tipushelye").html(szoveg);
		});
		//Életkor lista
		$.post("pages/jatekfeltoltes/eletkorlekerdez.php",function(eredmeny){
			// alert(eredmeny);			
			var tomb=JSON.parse(eredmeny);
			var szoveg="";
			
			szoveg+='<select id="jatek_eletkor_id">';
			
			for (var i=0;i<tomb.length;i++)
			{
				szoveg+='<option value="'+tomb[i].eletkor_id+'">'+tomb[i].eletkor_csoport+'</option>';
			}
			
			szoveg+='</select>'; 
		
			$("#eletkorhelye").html(szoveg);
		});
		
	}
	
    $("#gomb").click(function(){
        //alert("meg lett nyomva");
		var adatok=
		{
			jatekcim:$("#jatekcim").val(),
			jatekdatum:$("#jatekdatum").val(),
			jatekar:$("#jatekar").val(),
			jatektipus:$("#jatektipus").val(),
			jatekkiado:$("#jatekkiado").val(),
			jatek_stilusid:$("#jatek_stilusid").val(),
			jatek_dlcid:$("#jatek_dlcid").val(),
			jatek_eletkor_id:$("#jatek_eletkor_id").val(),
			jatek_darab:$("#jatek_darab").val(),
			jatekleiras:$("#jatekleiras").val(),
			bevitel:$("#bevitel").val(),
			jatek_keszletid:$("[name='jatek_keszletid']:checked").val(),
			jatek_ingyen_szallitas:$("[name='jatek_ingyen_szallitas']:checked").val()
		}
		// alert (adatok.jatekcim);
		// alert(adatok.jatekdatum);
		// alert(adatok.jatekar);
		// alert(adatok.jatektipus);
		// alert(adatok.jatekkiado);
		// alert(adatok.jatek_stilusid); 
		// alert(adatok.jatek_dlcid); 
		// alert(adatok.jatek_eletkor_id);
		// alert(adatok.jatek_letoltheto_id);
		// alert(adatok.jatekleiras);
		// alert(adatok.bevitel);
		// alert(adatok.jatek_keszletid);
		// alert(adatok.jatek_ingyen_szallitas);
		// Hibakezelés
		
		var jatekcimhiba = 0;
		var jatekcimhiba2 = 0;
		var jatekdatumhiba = 0;
		var jatekarhiba = 0;
		var jatekarhiba1 = 0;
		var jatekdarabhiba = 0;
		var jatekdarabhiba1 = 0;
		var bevitelhiba = 0;
		
		 $("#hiba1").html("&nbsp;");
		 $("#hiba2").html("&nbsp;");
		 $("#hiba3").html("&nbsp;");
		 $("#hiba4").html("&nbsp;");	
		 $("#hiba5").html("&nbsp;");
			 
		
		
		
		
			
			// játék cím vizsgálata		
		if (adatok.jatekcim=="")
		{
			$("#hiba1").html("Üres mező!");
			jatekcimhiba = 1;
		}
		else if (adatok.jatekcim.length<2)
		{
			$("#hiba1").html("Túl rövid!");
			jatekcimhiba2=1;
		}
		else {
			jatekcimhiba = 0;
			jatekcimhiba2 = 0;
		}
			
	
			// Játék dátum vizsgálata
		
		if (adatok.jatekdatum=="")
		{
			$("#hiba2").html("Üres dátumot nem adhatsz meg!");
			jatekdatumhiba=1;
		}
		else {
			jatekdatumhiba=0;
		}
			// Játék ár vizsgálata
		if (adatok.jatekar=="")
		{
			$("#hiba3").html("Nem adtál meg árat!");
			jatekarhiba1=1;
		}
		else {
			jatekarhiba1=0;
		}
		
		if (isNaN(adatok.jatekar))
		{
			$("#hiba3").html("Csak számot adhatsz meg!");
			jatekarhiba=1;
 		}
		else{
			
			jatekarhiba = 0;
		}
		//Darab vizsgálata
		if (adatok.jatek_darab=="")
		{
			$("#hiba4").html("Nem adtál meg Darabszámot!");
			jatekdarabhiba1=1;
		}
		else {
			jatekdarabhiba1=0;
		}
		if (isNaN(adatok.jatek_darab))
		{
			$("#hiba4").html("Csak számot adhatsz meg!");
			jatekdarabhiba=1;
 		}
		else{
			
			jatekdarabhiba = 0;
			
		}
			//Kép vizsgálata
		
		
			//Hibakezelés vége
		
			//fajl
		var file_data=$("#bevitel").prop("files")[0];
	if (adatok.bevitel!="")
		{
		adatok.bevitel=file_data["name"];
		}
		//fajl kezeles vege
		
		
		// pop-up ha sikeres
		
		

		
		if (jatekcimhiba == 0 && jatekcimhiba2 == 0 && jatekdatumhiba == 0   && jatekarhiba == 0 && jatekarhiba1 == 0 && jatekdarabhiba == 0 && jatekdarabhiba1 == 0 && adatok.bevitel!="") 
		{
		$.post("pages/jatekfeltoltes/feltoltes.php",adatok,function(eredmeny){
			//alert(eredmeny);			
			if (eredmeny==1)
			{
				//fajl feltoltes kezdete, kell hozza az upload file			
				//fájl felvitele a web szerver kepek almappájába , csak azután történjen meg, miután sikeresen felvittük a fájl nevét adatb-be!!!
				//le kellene vizsgálni, hogy csak pl. "jpg", "jpeg", "gif", "png" kiterjesztések lehessenek és pl. csak max méret alattiak pl 3MB
				//alert("Fájl mérete: "+file_data['size']); 
    var form_data = new FormData();                  
    form_data.append('file', file_data);
	$.ajax({
                url: 'pages/jatekfeltoltes/upload.php', 
                dataType: 'text', 
                cache: false,
                contentType: false,
                processData: false,
                data: form_data,                         
                type: 'post',
                success: function(php_script_response){
                    //alert(php_script_response); // display response from the PHP script, if any
                }
     });

				//fájl feltoltese vege	
				
				 
			
			
				//Ha sikeres
			$("#jatekcim").val("");
			$("#jatekdatum").val("");
			$("#jatekar").val("");
			$("#jatek_darab").val("");
			$("#jatekleiras").val("");
			$("#bevitel").val("");
			
			
					
			}
			
			
		});
		}
		
		
    });
		//Kiadó Feltöltés --------------------------------------------
	
	$("#kiadofeltoltesgomb").click(function(){
        //alert("meg lett nyomva");
		var kiadohiba = 0;
		 $("#hiba7").html("&nbsp;");
		 
		var adatok=
		{
			
			ujkiadonev:$("#ujkiadonev").val()
		}
			//Játék Kiadó feltöltés vizsgálata	
		if(adatok.ujkiadonev=="")
		{
			$("#hiba7").html("Üres mező!");	
			kiadohiba++;
		}
		else if (adatok.ujkiadonev.length<2)
		{
			$("#hiba7").html("Túl rövid!");
			kiadohiba++;
		}	
		if (kiadohiba == 0)
		{
		$.post("pages/jatekfeltoltes/kiadofeltoltes.php",adatok,function(eredmeny){
			//alert(eredmeny);			
			if (eredmeny==1)
			{
	
				// Ha sikeres																						
			$("#ujkiadonev").val("");
			$("#ujkiadogomb").click();
			frissit();
			}		
		});	
		}
    });
	
	//Típus feltöltés --------------------------------------------
	
	$("#tipusfeltoltesgomb").click(function(){
        //alert("meg lett nyomva");
		var tipushiba = 0;
		$("#hiba6").html("&nbsp;");
		var adatok=
		{
			
			ujtipusnev:$("#ujtipusnev").val()
		}
		//Játék típus feltöltés vizsgálata
			if(adatok.ujtipusnev=="")
		{
			$("#hiba6").html("Üres mező!");	
			tipushiba++;
		}
		else if (adatok.ujtipusnev.length<2)
		{
			$("#hiba6").html("Túl rövid!");
			tipushiba++;
		}
		if (tipushiba == 0)
		{			
		$.post("pages/jatekfeltoltes/tipusfeltoltes.php",adatok,function(eredmeny){
			//alert(eredmeny);			
			if (eredmeny==1)
			{
	
				// Ha sikeres
			$("#ujtipusnev").val("");
			$("#ujtipusgomb").click();
			frissit();
			
			}						
		});	
		}		
    });
	
	
	
	
	
});