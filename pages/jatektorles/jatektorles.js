var app = angular.module('jatek_tablazat', []);
app.controller('jatek_kezeles', function($scope, $http) {
    $http.get("pages/jatektorles/lekerdez.php")
    .then(function (response) {$scope.adatok = response.data;});
	
	$scope.sortBy = function(propertyName) {
    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
  };
	
	
	// Remove record
	$scope.remove = function(index,jatekid) {
	  if (confirm("Biztos hogy törölni akarod?")) 
	{	
 
  $http({
   method: 'post',
   url: 'pages/jatektorles/torles.php',
   data: {jatekid:jatekid},
  }).then(function successCallback(response) {
   $scope.adatok.splice(index, 1);
  }); 
 }
	}
	
	
	 
	
	
});

$(document).ready(function(){
	// alert("megy!");
  $("#gyorskereses").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#tablazat_kereses tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
