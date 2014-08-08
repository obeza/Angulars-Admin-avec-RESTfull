app.controller('PostCreerController', ['$scope','$state', 'postService', 'categorieService', function($scope, $state, postService, categorieService ){
	
	//$scope.msg = "post " + $stateParams.id;

	//$scope.article = postService.get({id:$stateParams.id});

	$scope.categories = categorieService.query();

	$scope.postCreer = function(){
		var ajouter = postService.save( null, $scope.article, function(){
			console.log('msg : ' + ajouter);
			$state.transitionTo("posts");
		});

	};

}]);