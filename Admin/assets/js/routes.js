
app.config(function($routeProvider) {
    $routeProvider

    .when("/",{
        templateUrl : "view/main.html",
            controller: 'myCtrl'
        })
    .when("/Users",{
	templateUrl : "view/users.html",
        controller: 'myCtrl'
    })
    .when("/Insert_users",{
        templateUrl : "view/insert_users.html",
            controller: 'myCtrl'
        })
    .when("/Categories",{
        templateUrl : "view/categories.html",
            controller: 'myCtrl'
        })
    .when("/Insert_category",{
            templateUrl : "view/insert_category.html",
                controller: 'myCtrl'
            })
        
    .when("/Products",{
            templateUrl : "view/products.html",
                controller: 'myCtrl'
            })
    .when("/Insert_products",{
                templateUrl : "view/insert_products.html",
                    controller: 'myCtrl'
                })
    .when("/Blog",{
                    templateUrl : "view/blog.html",
                        controller: 'myCtrl'
                    })
    .when("/Profile",{
        templateUrl : "view/profile.html",
            controller: 'myCtrl'
        })
            
        .otherwise("/",{
         templateUrl : "view/main.html",
         controller: 'myCtrl'
                })
});