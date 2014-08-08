app.controller('PostModifierController', ['$scope','$stateParams', 'postService', 'categorieService', '$state', function($scope, $stateParams, postService, categorieService, $state ){
	
	$scope.msg = "post " + $stateParams.id;

	$scope.article = postService.get({id:$stateParams.id});

	$scope.categories = categorieService.query();

	$scope.modifier = function(){
		$scope.article.$update();
		$state.transitionTo("posts");
	};

}]);