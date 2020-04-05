app.config(function($routeProvider) {
    $routeProvider
    .when("/",{
	templateUrl : "view/main.html",
        controller: 'myCtrl'
    })
    .when("/single_product/:id",{
	templateUrl : "view/single_product.html",
        controller: 'myCtrl'
    })
    .when("/category/:id",{
	templateUrl : "view/category.html",
        controller: 'myCtrl'
    })
    .when("/home2",{
        templateUrl : "view/main2.html",
            controller: 'myCtrl'
        })
        .when("/home3",{
            templateUrl : "view/main3.html",
                controller: 'myCtrl'
            })
    .when("/zelencuk",{
        templateUrl : "view/zelencuk.html",
            controller: 'myCtrl'
            })
        .when("/dieta_online",{
        templateUrl : "view/dieta_online.html",
          controller: 'myCtrl'
         })
    
    .otherwise("/",{
	templateUrl : "view/main.html",
        controller: 'myCtrl'
    })
    });