$(document).ready(function(){
    
 $("#pdfkeszitesgomb").click(function(){
	 
	 var adatok=
			{
				bevitel1:"atkuldott"
			}
			$.post("pages/pdfkeszites/iraspdfbe.php", adatok,function(eredmeny){
				//alert(eredmeny);
				window.open("pages/pdfkeszites/Rendelesek.pdf", '_blank');
			});		
		
});	
});	