app.controller('categorieController', ['$scope', 'categorieService','$stateParams','$state', function($scope, categorieService, $stateParams, $state){
	
	$scope.titre = "Modifier une catégorie";

	$scope.categorie = categorieService.get({id:$stateParams.id});

	$scope.modifier = function(){
		$scope.categorie.$update();
		$state.transitionTo("categories");
	};

}]);