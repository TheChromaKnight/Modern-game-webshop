$(document).ready(function(){
 //oszlopdiagram   
	$.get("pages/nezettseg/lekerdez.php", function(data, status){
		//JSon-os kiiratas
		// alert("Data: " + data + "\nStatus: " + status);
		var tomb=JSON.parse(data);
		//alert(tomb[0].mnev+":"+tomb[0].darabszam);
		
		var xtengely=[];
		var ytengely=[];
		for (var i=0;i<tomb.length;i++)
		{
			xtengely[i]=tomb[i].jatek_nev;
			ytengely[i]=tomb[i].jatek_nezettseg;
		}
				
		var data = [{
  x: xtengely,
  y: ytengely,
  type: 'bar'
}];

Plotly.newPlot('nezettseg', data);
		
		
		
		
    });
	
	/*
//kordiagram	
	$.get("lekerdez2.php", function(data, status){
		//JSon-os kiiratas
		//alert("Data: " + data + "\nStatus: " + status);
		var tomb=JSON.parse(data);
		//alert(tomb[0].mnev+":"+tomb[0].darabszam);
		
		var xtengely=[];
		var ytengely=[];
		for (var i=0;i<tomb.length;i++)
		{
			xtengely[i]=tomb[i].mnev;
			ytengely[i]=tomb[i].darabszam;
		}
				
		var data = [{
  values: ytengely,
  labels: xtengely,
  type: 'pie'
}];

Plotly.newPlot('myDiv2', data);
		
		
		
    });	
	
	*/
	
	
	
	
	
	
	$("p").click(function(){
        $(this).hide();
    });
	
	
	
	$("h1").click(function(){
    $("p").show();
}); 
	
	
});