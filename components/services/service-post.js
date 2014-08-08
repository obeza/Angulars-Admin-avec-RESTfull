app.factory('postService', ['$resource', function($resource){


return $resource(
        "http://localhost:8888/laravel-blog/laravel/public/bigadminpon/article/:id",
        {id: '@id'},
        { 'update': {method: 'PUT' }}
        
    );

}]);
