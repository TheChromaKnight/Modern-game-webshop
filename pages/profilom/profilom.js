$(document).ready(function(){	
	
		//Betölteni kívánt adatok lekérdezése
	
	$.post("pages/profilom/lekerdez.php",function(eredmeny){
			// alert(eredmeny);			
			var tomb=JSON.parse(eredmeny);
			
				var felh_nev=tomb[0].szemely_felh;
				var felh_email_cim=tomb[0].szemely_email_cim;
				var felh_jelszo=tomb[0].szemely_jelszo;
			
			$("#felh_nev").val(felh_nev);
			$("#email_cim").val(felh_email_cim);
			// $("#jelszo").val(felh_jelszo);
			 // alert(felh_nev);
		});
		
		
	
    $("#frissitgomb").click(function(){
        //alert("meg lett nyomva");
		var adatok=
		{
			felhasznalonev:$("#felh_nev").val(),
			emailcim:$("#email_cim").val(),
			jelszo:$("#jelszo").val()
		}
		 // alert (adatok.felhasznalonev);
		 
		 // Hibakezelés
		
		var felhasznalonevhiba = 0;
		var felhasznalonevhiba1 = 0;
		
		var emailcimhiba = 0;
		var emailcimhiba1 = 0;
		var emailcimhiba2 = 0;
		
		var jelszohiba = 0;
		var jelszohiba1 = 0;
		var jelszohiba2 = 0;
		var jelszohiba3 = 0;
		//email pattern
			var email = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
		//jelszó pattern
			var jelszo_patt = /\d/;
		
					
		$("#felh_nev_hiba").html("&nbsp;");
		$("#email_hiba").html("&nbsp;");
		$("#jelszo_hiba").html("&nbsp;");
		
				//Felhasználónév vizsgálata
		
			if(adatok.felhasznalonev=="")
			{
				$("#felh_nev_hiba").html("A felhasználónév nem lehet üres!");
				felhasznalonevhiba = 1;
			}			
			else if (adatok.felhasznalonev.length<5)
			{
				$("#felh_nev_hiba").html("A felhasználónévnek legalább 5 karakternek kell lennie!");
				felhasznalonevhiba1 = 1;
			}
			else 
			{
				felhasznalonevhiba = 0;
				felhasznalonevhiba1 = 0;
			}
			
				//Email cím vizsgálat
			if(adatok.emailcim=="")
			{
				$("#email_hiba").html("Az Email cím mező nem lehet üres!");
				emailcimhiba = 1;
			}
			
			else if(adatok.emailcim.length<7)
			{
				$("#email_hiba").html("Az Email cím mezőnek legalább 7 karakterből kell állnia!");
				emailcimhiba1 = 1;
			}
			else if (!email.test($("#email_cim").val()))
			{
				$("#email_hiba").html("Az Email címben kötelező @ jelet megadni.");
				emailcimhiba2 = 1;
			}
			else
			{
				emailcimhiba = 0;
				emailcimhiba1 = 0;
				emailcimhiba2 = 0;
			}
			
				//Jelszó vizsgálat
			if($("#jelszo").val()=="")
			{
				$("#jelszo_hiba").html("A jelszó mező nem lehet üres!");
				jelszohiba = 1;
			}
			
			else if($("#jelszo").val().length<5)
			{
				$("#jelszo_hiba").html("A jelszónak legalább 5 karakterből kell állnia!");
				jelszohiba1 = 1;
			}
			else if(!jelszo_patt.test($("#jelszo").val()))
			{
				$("#jelszo_hiba").html("A jelszónak tartalmaznia kell számot!");
				jelszohiba2 = 1;
			}
			else if ($("#jelszo").val()!=$("#jelszo_megegyszer").val())
			{
				$("#jelszo_hiba1").html("A két jelszó nem egyezik meg!");
				jelszohiba3 = 1;
			}
			else 
			{
				jelszohiba = 0;
				jelszohiba1 = 0;
				jelszohiba2 = 0;
				jelszohiba3 = 0;
			}
		 
		 if(felhasznalonevhiba == 0 && felhasznalonevhiba1 == 0 && emailcimhiba == 0 && emailcimhiba1 == 0 && emailcimhiba2 == 0 && jelszohiba == 0 && jelszohiba1 == 0 && jelszohiba2 == 0 && jelszohiba3 == 0)
		 {
			 $.post("pages/profilom/modosit.php",adatok,function(eredmeny){
				if(eredmeny==1)
				{
					$.post("pages/profilom/kilepes.php",function(eredmeny2) {
						alert(eredmeny2);
						location.reload(true);
						
					});
				}
				else if (eredmeny==2)
				{
					$("#felh_nev_hiba").html("Ilyen felhasználónév már létezik!");
				}
				else
				{
					alert("A felvitelben hiba történt!");
				}
			});
		 }
		
		
		});
	
	
	
	
	
});