<div ng-app="jatek_tablazat" ng-controller="jatek_kezeles">
<input id="gyorskereses" type="text" placeholder="Keresés...">
<h1>Jelenlegi játékaink<h1>
 
 
  

  

<table>
 
   <th>
       <button class = "rendezesgomb" ng-click="sortBy('jatek_nev')">Játék név</button>
        <span class="sortorder" ng-show="propertyName === 'jatek_nev'" ng-class="{reverse: reverse}"></span>
      </th>
	 
	   
	
      <th>
        <button class = "rendezesgomb" ng-click="sortBy('jatek_ev')">Játék megjelenés</button>
        <span class="sortorder" ng-show="propertyName === 'jatek_ev'" ng-class="{reverse: reverse}"></span>
      </th>
	 
	  
		
	   <th>
        <button class = "rendezesgomb" ng-click="sortBy('tipus_nev')">Játék típus</button>
        <span class="sortorder" ng-show="propertyName === 'tipus_nev'" ng-class="{reverse: reverse}"></span>
      </th>
	 
	   
	  
	  <th>
		<button class = "rendezesgomb" ng-click="sortBy('jatek_ar')">Játék ár</button>
		<span class="sortorder" ng-show="propertyName === 'jatek_ar'" ng-class="{reverse: reverse}"></span>
	  </th>
	   
	   <tbody id = "tablazat_kereses">
	
  <tr   ng-repeat="x in adatok | orderBy:propertyName:reverse">
	
    <td style = "font-size:20px;padding:10px;"> {{ x.jatek_nev }}</td>
	
    <td style = "font-size:20px;padding:10px;">{{ x.jatek_ev }}</td>
	
	<td style = "font-size:20px;padding:10px;">{{ x.tipus_nev }}</td>
	
	<td style = "font-size:20px;padding:10px;">{{ x.jatek_ar }}</td>
	
	
	<td><input type='button' class = "torlesgomb" ng-click='remove($index,x.jatek_id);' value='Törlés'><td>
     
  </tr>
  </tbody>
</table>



<script src = "pages/jatektorles/jatektorles.js"></script>