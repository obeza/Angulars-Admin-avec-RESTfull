app.controller('postsController', ['$scope', 'postsResolve', function($scope, postsResolve){
	
	$scope.titre = "Gestions des posts :";

	$scope.articles = postsResolve;

}]);