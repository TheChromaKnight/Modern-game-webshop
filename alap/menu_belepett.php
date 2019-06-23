<nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#"><span class="menuszoveg" id = "brand">Modern Game</span> </a>
	  
	  
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <div class="navbar-form navbar-left">
        
      </div> 
	  
	 <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="menuszoveg">PC</span>  <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li ><a href="./pcjatek" ><img src = "./kepek/pc_menu_kep.jpg" style = " height:80px; padding-left:60px;"> </a></li>
             <li ><a href="./pcjatek" ><span class="menuszoveg-drop">PC játékok</span> </a></li>
			  <li ><a href="./legnepsz_pcjatek" ><span class="menuszoveg-drop">Legnépszerűbb PC játékok</span> </a></li>
			   <li ><a href="./leguj_pcjatek" ><span class="menuszoveg-drop">Legújabb PC játékok</span> </a></li>
			    <li ><a href="./elorendel_pcjatek" ><span class="menuszoveg-drop">PC előrendelések</span> </a></li>
            <!--<li role="separator" class="divider"></li>
            <li><a href="#"></a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#"></a></li> -->
          </ul>
        </li>
		
		 <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="menuszoveg">Xbox</span>  <span class="caret"></span></a>
          <ul class="dropdown-menu">
            
             <li ><a href="./xboxonejatek" ><img src = "./kepek/xbox_menu_kep.jpeg" style = " height:80px; padding-left:70px; "> </a></li>
             <li ><a href="./xboxonejatek" ><span class="menuszoveg-drop">Xbox One játékok</span> </a></li>
			  <li ><a href="./legnepsz_xboxonejatek" ><span class="menuszoveg-drop">Legnépszerűbb Xbox One játékok</span> </a></li>
			   <li ><a href="./leguj_xboxonejatek" ><span class="menuszoveg-drop">Legújabb Xbox One játékok</span> </a></li>
			    <li ><a href="./elorendel_xboxonejatek" ><span class="menuszoveg-drop">Xbox One előrendelések</span> </a></li>
				<li ><a href="./hasznalt_xboxonejatek" ><span class="menuszoveg-drop">Használt Xbox One Játékok</span> </a></li>
          </ul>
        </li>
		
		 <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="menuszoveg">Playstation</span>  <span class="caret"></span></a>
          <ul class="dropdown-menu">
            
              <li ><a href="./ps4jatek" ><img src = "./kepek/ps4_menu_kep.jpg" style = " height:80px; padding-left:80px; "> </a></li>
             <li ><a href="./ps4jatek" ><span class="menuszoveg-drop">Playstation 4 játékok</span> </a></li>
			  <li ><a href="./legnepsz_ps4jatek" ><span class="menuszoveg-drop">Legnépszerűbb Playstation 4 játékok</span> </a></li>
			   <li ><a href="./leguj_ps4jatek" ><span class="menuszoveg-drop">Legújabb Playstation 4 játékok</span> </a></li>
			    <li ><a href="./elorendel_ps4jatek" ><span class="menuszoveg-drop">Playstation 4 előrendelések</span> </a></li>
				<li ><a href="./hasznalt_ps4jatek" ><span class="menuszoveg-drop">Használt Playstation 4 Játékok</span> </a></li>
          </ul>
        </li>
		
		 <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="menuszoveg">Nintendo</span>  <span class="caret"></span></a>
          <ul class="dropdown-menu">
            
             <li ><a href="./nintendoswitchjatek" ><img src = "./kepek/nintendo_menu_kep.jpg" style = " height:80px; padding-left:70px; "> </a></li>
             <li ><a href="./nintendoswitchjatek" ><span class="menuszoveg-drop">Nintendo Switch játékok</span> </a></li>
			  <li ><a href="./legnepsz_nintendoswitchjatek" ><span class="menuszoveg-drop">Legnépszerűbb Switch játékok</span> </a></li>
			   <li ><a href="./leguj_nintendoswitchjatek" ><span class="menuszoveg-drop">Legújabb Switch játékok</span> </a></li>
			    <li ><a href="./elorendel_nintendoswitchjatek" ><span class="menuszoveg-drop"> Switch előrendelések</span> </a></li>
				
          </ul>
        </li>
		
		 <li class="dropdown">
          <a href="./elorendelesek"><span class="menuszoveg">Előrendelések</span></a>
        </li>
	   
		
	  
        
      </ul>
	  
    
      <ul class="nav navbar-nav navbar-right">
	  <!-- jobb oldali profilom fül sima bejelentkezetteknek -->
	  <?php 
	  if ($_SESSION["login_rang"]==0)
	  {
	   print'<li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="menuszoveg">Profilom</span>  <span class="caret"></span></a>
          <ul class="dropdown-menu">
            
             <li ><a href="./sajat_rendelesek" ><span class="menuszoveg-drop">Saját rendeléseim</span> </a></li>
			 <li ><a href="./profilom" ><span class="menuszoveg-drop">Profilom</span> </a></li>	
          </ul>
        </li>';
	  }
	  ?>
	  <!-- admin felület -->
      <?php
	  if ($_SESSION["login_rang"]==1)
		  
		  {
			  
			  
			  
			  print'<li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="menuszoveg">Admin</span>  <span class="caret"></span></a>
          <ul class="dropdown-menu">
             <li><a href="./jatekfeltoltes"><span class="menuszoveg-drop"> Új Játék feltöltés</span> </a></li>
			 <li><a href="./jatektorles"><span class="menuszoveg-drop">Játék törlése </span> </a></li>
			  <li><a href="./jatek_modositas"><span class="menuszoveg-drop">Játék módosítás</span> </a></li>
          
            <li role="separator" class="divider"></li>
            <li><a href="./nezettseg"><span class="menuszoveg-drop">Nézettség</span></a></li>
			<li><a href="./felhasznalo"><span class="menuszoveg-drop">Felhasználók</span></a></li>
			<li><a href="./arbevetel"><span class="menuszoveg-drop">Árbevétel</span></a></li>
			<li><a href="./rendelesek"><span class="menuszoveg-drop">Rendelések</span></a></li>
            <li role="separator" class="divider"></li>
        
          </ul>
        </li>';
		  }
?>
	  
	  
	  <li>
	 
	  <a href="" id = "logoutgomb" style="display: inline;"><span class="glyphicon glyphicon-log-out"></span> <?php
	  print '<span style="color:#000000;font-size:16px; text-transform: capitalize;">'.$_SESSION["login_nev"].'</span>';
	  ?> </a>
	  
	  
	
	 
	 
	    <!--kosár modális  -->
	  
		<button type="button" id = "kosarlistazas" class="btn btn-demo" data-toggle="modal" data-target="#kosar_modal">
			 <img src = "./kepek/kosar.png"  style = "width:50px; height:50px;display: inline;">
		</button>

	<!-- Modal -->
	
	
	
	
	<div class="modal right fade" id="kosar_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel2">
		<div class="modal-dialog" role="document">
			<div class="modal-content">

				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="myModalLabel2">Kosár</h4>
				</div>

				<div class="modal-body"> 
					<p>
					<?php
					if (!isset($_SESSION["kosardarabszam"]))
					{
						
					}
					else if ($_SESSION["kosardarabszam"]>=1)
					{
						echo '<button class = "session_torles_gomb">Kosár kiürítése</button>';
					}
					?>
					<div id = "kosartartalma"></div>
				
					<br>
					<?php
					$rendelesgomb = '<button id = "megrendelgomb" style ="float:right;">Megrendelem</button>';
					if (!isset($_SESSION["kosardarabszam"]))
						{
						
						}
					else if ($_SESSION["kosardarabszam"]>=1)
					{
						 echo $rendelesgomb;
					}
					?>
					</p> 
				</div>

			</div>
		</div>
	</div> 
	
	<!-- Modal -->



       
	   <!-- kosár vége -->
	  </li>
	
       
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>

<!-- Rendelés bevitel helye-->
 
 <div id = "rendeles_bevitel_helye"></div>	
 
<!--
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    
    <ul class="nav navbar-nav">
      <li class="active"> <a href="#">Lap 1</a></li>
      
      <li><a href="#">Lap 2</a></li>
	  <li><a href="#">Lap 3</a></li>

	  
	  
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a href=""id = "logoutgomb"><span class="glyphicon glyphicon-user"></span> kilépés</a></li>
      
    </ul>
  </div>
</nav>
-->
