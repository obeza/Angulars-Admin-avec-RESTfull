app.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    .state('accueil', {
      url: "/accueil",
      templateUrl: "components/accueil/template.html",
      controller: "accueilController"
    })
    .state('posts', {
      url: "/posts",
      templateUrl: "components/posts/template-posts.html",
      controller: "postsController",
      resolve:{

                postService: 'postService',
                postsResolve: function(postService){
                    return postService.query();
                }
            }
    })
    .state('post/creer', {
      url: "/post/creer",
      templateUrl: "components/post-creer/template-post-creer.html",
      controller: "PostCreerController"
    })
    .state('post', {
      url: "/post/:id",
      templateUrl: "components/post-modifier/template-post-modifier.html",
      controller: "PostModifierController"
    })
    .state('categories', {
      url: "/categories",
      templateUrl: "components/categories/template-categories.html",
      controller: "categoriesController",
      resolve:{

                categorieService: 'categorieService',
                categoriesResolve: function(categorieService){
                    return categorieService.query();
                }
            }
    })
    .state('categorie/creer', {
      url: "/categorie/creer",
      templateUrl: "components/categorie-creer/template-categorie-creer.html",
      controller: "CategorieCreerController"
    })
    .state('categorie', {
      url: "/categorie/:id",
      templateUrl: "components/categorie/template-categorie.html",
      controller: "categorieController"
    })
    ;

    $urlRouterProvider.otherwise("/accueil");

});


