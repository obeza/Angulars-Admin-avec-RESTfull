app.factory('categorieService', ['$resource', function($resource){

//	 

return $resource(
        "http://localhost:8888/laravel-blog/laravel/public/bigadminpon/categorie/:id",
        {id: '@id'},
        { 'update': {method: 'PUT' }}
    );

}]);
