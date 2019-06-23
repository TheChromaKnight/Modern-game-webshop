	$(document).ready(function(){
	   $("#kosarlistazas").click(function(){
		   // alert("asdad");
		   $.post("alap/kosartartalma.php",function(eredmeny){
			   // alert("asdasd");
			   
			   
			    
			   
			   $("#kosartartalma").html(eredmeny);
			   
			  
			   
		   });
		   
		   
	   });
	   
	   
	$(".session_torles_gomb").click(function () {
			// alert("megy");
			 $.post("alap/kosartorles.php",function(e){
				location.reload(false);
				 
				 
			 });
			
			
		});
	
	   
	 
	 
	   $("#megrendelgomb").click(function() {
		    // var atiranyitas = "";
		    // atiranyitas+='<div id = "atiranyitas"></div>';
				   $("#kosar_modal").modal("hide");
				  
				  $("#rendeles_bevitel_helye").load("pages/rendeles_mezo/rendeles_mezo.php ");
				  
				  
				  $("#tablazat").hide();
				  
				
				   
				  
				  
			   });
		
		 $("#felulkeres_gomb").on("keyup", function() {
			var value = $(this).val().toLowerCase();
			$("#tablazat").filter(function() {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
			});
		});
		
			   
		
			   
			   
	
	
	
	
$("#logingomb").keypress(function (e) {
  if (e.which == 13) {
          $("#logingomb").click();
  }
        });	
$("#email_cim").keypress(function (e) {
  if (e.which == 13) {
          $("#logingomb").click();
  }
        });	
$("[name='pass']").keypress(function (e) {
  if (e.which == 13) {
          $("#logingomb").click();
		  
  }
        });	

$("#registergomb").keypress(function (e) {
  if (e.which == 13) {
          $("#registergomb").click();
  }
        });

$("#reg_jelszo_megegyszer").keypress(function (e) {
  if (e.which == 13) {
          $("#registergomb").click();
  }
        });	
		
	 $("#registergomb").click(function(){
		 //alert("ok");
		 
		 var patt = /\d/;
		 var email = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
		 //alert(patt.test($("#reg_felh").val())); 


		 var hibaszoveg="";
		 if ($("#reg_felh").val()=="")
			 hibaszoveg="A Felhasználónév mező üres.";
		 else if ($("#reg_felh").val().length<5)
			 hibaszoveg="A Felhasználónév minimum 5 karakter.";
		 else if ($("#email_cim").val()== "")
			  hibaszoveg="Az Email cím mező üres";
		 else if (!email.test($("#email_cim").val()))
			  hibaszoveg="Az Email címben kötelező @ jelet megadni.";
		 else if ($("#reg_felh").val().length<5)
			  hibaszoveg="Az Email cím minimum 5 karakter.";
		 else if ($("#reg_jelszo").val()=="")
			 hibaszoveg="A jelszó mező üres.";
		 else if ($("#reg_jelszo").val().length<5)
			 hibaszoveg="A jelszó minimum 5 karakter.";
		 else if (!patt.test($("#reg_jelszo").val()))
			 hibaszoveg="A jelszóban kötelező számot megadni.";
		 else if ($("#reg_jelszo").val()!=$("#reg_jelszo_megegyszer").val())
			 hibaszoveg="A két jelszónak meg kell egyeznie.";
		 
		 
		 
		 
		 $("#hibaszoveg").html(hibaszoveg);
		 if (hibaszoveg=="")
		 {
		 var adatok=
		 {
			 reg_felh:$("#reg_felh").val(),
			 email_cim:$("#email_cim").val(),
			 reg_jelszo:$("#reg_jelszo").val()
		 }
		 $.post("alap/felhasznalo_felvitel.php",adatok,function(eredmeny){
			//alert(eredmeny); 
			if (eredmeny==1)
			{
				// $.post("../../pages/email_regisztracio/emailkuld.php",function(eredmeny, status){
					// alert(eredmeny);
				// });
				alert("A regisztráció sikerült, kérem jelentkezzen be.");
				$("#register-modal").modal("hide");
				$("#login-modal").modal();
				
				
				
			}
			else if (eredmeny==2)
			{
				alert("A felhasználónév már létezik.");
			}
			else
				alert("A felvitelben hiba történt.");
			
		 });
		 }
		 
	 });
	
	 $("#reg").click(function(){
		 
		 $("#login-modal").modal("hide");
		 $("#register-modal").modal();
		 return false;
	 });
	
	
	  $("#logoutgomb").click(function(){
        //alert("megnyomva");
		$.post("alap/kilepes.php",function(eredmeny){
			if (eredmeny==1)
				location.reload();
		});
		
	  });
		
    $("#logingomb").click(function(){
        //alert("megnyomva");
		var adatok=
		{
			felhasznalonev:$("[name='user']").val(),
			jelszo:$("[name='pass']").val()
		}
		//alert(adatok.felhasznalonev+" "+adatok.jelszo);
		$.post("alap/belepes.php",adatok,function(eredmeny){
			//alert(eredmeny);
			if (eredmeny==0)
				alert("Hiba");
			else
			{
				$("#login-modal").hide();
				location.reload(true);
			}
			
		});
		
    });
});