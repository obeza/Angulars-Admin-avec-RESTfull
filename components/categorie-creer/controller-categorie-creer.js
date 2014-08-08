app.controller('CategorieCreerController', ['$scope','categorieService', '$state', function($scope, categorieService, $state ){
	
	$scope.titre = "Creer catégorie ";

	$scope.ajouter = function(){
		var ajouter = categorieService.save( null, $scope.categorie, function(){
			console.log('msg : ' + ajouter);
			$state.transitionTo("categories");
		});
		
	};

}]);