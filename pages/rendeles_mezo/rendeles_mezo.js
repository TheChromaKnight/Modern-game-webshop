$(document).ready(function(){	
 $("#tovabb_gomb").click(function() {
	 
	var adatok = {
		keresztnev:$("#keresztnev").val(),
		vezeteknev:$("#vezeteknev").val(),
		telefonszam:$("#telefonszam").val(),
		iranyitoszam:$("#iranyitoszam").val(),
		telepules:$("#telepules").val(),
		cim:$("#cim").val(),
		email_cim:$("#email_cim").val(),
		megjegyzes:$("#megjegyzes").val(),
		utanvet:$("[name='utanvet']:checked").val(),
		felh_feltetel:$("[name='felh_feltetel']:checked").val()
		
		
	}
	// alert(adatok.keresztnev);
	
	//Hibák vizsgálata
	
	var keresztnevhiba = 0;
	var keresztnevhiba1 = 0
	
	var vezeteknevhba = 0;
	var vezeteknevhiba1 = 0;
	
	var telefonszamhiba = 0;
	var telefonszamhiba1 = 0;
	
	var iranyitoszamhiba = 0;
	var iranyitoszamhiba1 = 0;
	
	var telepuleshiba = 0;
	var telepuleshiba1 = 0;
	
	var cimhiba = 0;
	var cimhiba1 = 0;
	
	
	var emailcimhiba = 0;
	var emailcimhiba1 = 0;
	
	var felh_feltetelhiba = 0;
	
	var email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
	
		 $("#keresztnevhiba").html("&nbsp;");
		 $("#vezeteknevhiba").html("&nbsp;");
		 $("#telefonszamhiba").html("&nbsp");
		 $("#iranyitoszamhiba").html("&nbsp");
		 $("#telepuleshiba").html("&nbsp");
		 $("#cimhiba").html("&nbsp");
		 $("#emailcimhiba").html("&nbsp");
		 $("#felh_feltetelhiba").html("&nbsp");
		 
		 //Keresztnév vizsgálat
		 
	if(adatok.keresztnev=="")
	{
		$("#keresztnevhiba").html("Üres mező!");
		keresztnevhiba = 1;
	}
	else if (adatok.keresztnev.length <=1)
	{
		$("#keresztnevhiba").html("Túl rövid!");
		keresztnevhiba1 = 1;
	}
	else 
	{
		keresztnevhiba = 0;
		keresztnevhiba1 = 0;
	}
	
	//Vezetéknév vizsgálata
	
	if(adatok.vezeteknev=="")
	{
		$("#vezeteknevhiba").html("Üres mező!");
		vezeteknevhiba = 1;
	}
	else if (adatok.vezeteknev.length <=1)
	{
		$("#vezeteknevhiba").html("Túl rövid!");
		vezeteknevhiba1 = 1;
	}
	else 
	{
		vezeteknevhiba = 0;
		vezeteknevhiba1 = 0;
	}
	
	//Telefonszám vizsgálata
	
	if(adatok.telefonszam=="")
	{
		$("#telefonszamhiba").html("Üres mező!");
		telefonszamhiba = 1;
	}
	else if (adatok.telefonszam.length <=9)
	{
		$("#telefonszamhiba").html("Túl rövid!");
		telefonszamhiba1 = 1;
	}
	else 
	{
		telefonszamhiba = 0;
		telefonszamhiba1 = 0;
	}
	
	//Irányítószám vizsgálata
	
	if (adatok.iranyitoszam=="")
	{
			$("#iranyitoszamhiba").html("Üres mező!");
			iranyitoszamhiba=1;
	}		
	if (isNaN(adatok.iranyitoszam))
	{
			$("#iranyitoszamhiba").html("Csak számot adhatsz meg");
			iranyitoszamhiba1=1;
 	}
	else
	{
			
			iranyitoszamhiba = 0;
			iranyitoszamhiba1 = 0;
	}
	
	//Település vizsgálata
	
	if(adatok.telepules=="")
	{
		$("#telepuleshiba").html("Üres mező!");
		telepuleshiba = 1;
	}
	else if (adatok.telepules.length <=1)
	{
		$("#telepuleshiba").html("Túl rövid!");
		telepuleshiba1 = 1;
	}
	else 
	{
		telepuleshiba = 0;
		telepuleshiba1 = 0;
	}
	
	//Cím vizsgálata
	
	if(adatok.cim=="")
	{
		$("#cimhiba").html("Üres mező!");
		cimhiba = 1;
	}
	else if (adatok.cim.length <=5)
	{
		$("#cimhiba").html("Túl rövid!");
		cimhiba1 = 1;
	}
	else 
	{
		cimhiba = 0;
		cimhiba1 = 0;
	}
	
	//Email vizsgálata
	
	if(adatok.email_cim=="")
	{
		$("#emailcimhiba").html("Üres mező!");
		emailcimhiba = 1;
	}
	else if (!email_regex.test(adatok.email_cim))
	{
		$("#emailcimhiba").html("Nem helyes e-mail formátum!");
		emailcimhiba1 = 1;
	}
	else 
	{
		emailcimhiba = 0;
		emailcimhiba1 = 0;
	}
	
	//Felhasználói feltétel vizsgálata
	
	if(adatok.felh_feltetel!=1)
	{
		$("#felh_feltetelhiba").html("Nem fogadtad el a felhasználási feltételeket!");
		felh_feltetelhiba = 1;
	}
	else 
	{
		felh_feltetelhiba = 0;
	}
	
	
	
	
	
	
	//Hibák vizsgálata
	if(keresztnevhiba == 0 && keresztnevhiba1 == 0 && vezeteknevhiba == 0 && vezeteknevhiba1 == 0 && telefonszamhiba == 0 && telefonszamhiba1 == 0 && iranyitoszamhiba == 0 && iranyitoszamhiba1 == 0 && telepuleshiba == 0 && telepuleshiba1 == 0 && cimhiba == 0 && cimhiba1 == 0 && emailcimhiba == 0 && emailcimhiba1 == 0 && felh_feltetelhiba == 0)
	{
		$("#kiirat_modal").modal();
	
	  $.post("pages/rendeles_mezo/rendeles_adatok.php",adatok,function(eredmeny){
			   // alert("asdasd");
			   
			   
			    
			   
			   $("#modal_body_rendeles").html(eredmeny);
			   
			  
			  
			   
		});
	}

		   
		    
			   });
		   
	 
 });
 $("#megrendel_veglegesit_gomb").click(function() {
				   
			   // alert("megy");
			   
			   	$.post("pages/rendeles_mezo/rendeles_mezo_feltoltes.php",{keresztnev:$("#keresztnev").val(),vezeteknev:$("#vezeteknev").val(),telefonszam:$("#telefonszam").val(),iranyitoszam:$("#iranyitoszam").val(),telepules:$("#telepules").val(),cim:$("#cim").val(),email_cim:$("#email_cim").val(),megjegyzes:$("#megjegyzes").val(),utanvet:$("[name='utanvet']:checked").val()},function(eredmeny){
					if(eredmeny==1)
					{
						 alert("Köszönjük a rendelését! Hamarosan küldünk önnek egy e-mailt.");
						 $(".session_torles_gomb").click();
						 
					}
					
					// alert(eredmeny);			
			
			
			   
					});
			      
});
