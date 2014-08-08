app.controller('categoriesController', ['$scope', 'categoriesResolve', function($scope,categoriesResolve){
	
	$scope.titre = "Catégories";

	$scope.categories = categoriesResolve;

}]);