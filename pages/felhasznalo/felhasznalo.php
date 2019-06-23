<div ng-app="jatek_tablazat" ng-controller="jatek_kezeles">
<input id="gyorskereses" type="text" placeholder="Keresés...">
<h1>Regisztrált felhasználók:<h1>

<table class = "table">

   <th>
        <button class = "rendezesgomb" ng-click="sortBy('szemely_felh')">Felhasználó név</button>
        <span class="sortorder" ng-show="propertyName === 'szemely_felh'" ng-class="{reverse: reverse}"></span>
      </th>
      <th>
        <button class = "rendezesgomb" ng-click="sortBy('szemely_rang')">Felhasználó rang</button>
        <span class="sortorder" ng-show="propertyName === 'szemely_rang'" ng-class="{reverse: reverse}"></span>
      </th>
	  
	  <tbody id = "tablazat_kereses">
  <tr ng-repeat="x in adatok | orderBy:propertyName:reverse">

    <td > {{ x.szemely_felh }}</td>
    <td >{{ x.szemely_rang }}</td>
	<td><input type='button' class = "torlesgomb" ng-click='remove($index,x.szemely_id);' value='Törlés'><td>
  </tr>
   </tbody>
</table>

</div>


<script src = "pages/felhasznalo/felhasznalo.js"></script>

