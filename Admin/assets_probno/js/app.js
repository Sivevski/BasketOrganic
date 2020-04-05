var app = angular.module("myApp", ["ngRoute"]);

app.controller('myCtrl',[ '$scope','$routeParams', function($scope,$routeParams) {

 $scope.url=$routeParams.id;

 $scope.getValue = function(getID){
    $scope.searchById=getID;
 }
/**************************************************************************/
/*******************ЏЕЈСОНИИИИИИИИИИ*****************/
/**************************************************************************/
    $scope.products=[
    {'product_id':1, 'category_id':1, 'Cover_Photo':'domat.jpg','Product':'Домати','Manufacturer':'Deni-mebel', 'Categories':'Зеленчук','Price':'1000','Shop':'Atpazar','Contact':'Mile','long_txt':'bhybvtvtyfyt','Phone':'078587458'},
    {'product_id':2, 'category_id':1,  'Cover_Photo':'piperka.jpg','Product':'Пиперки','Manufacturer':'Ikea','Categories':'Зеленчук','Price':'15000','Shop':'Nova Bitola','Contact':'Kire','Phone':'078224478'},
    {'product_id':3,'category_id':2, 'Cover_Photo':'dinji.jpg','Product':'Дињи','Manufacturer':'Simpo','Categories':'Овошје','Price':'11000','Shop':'Karpos','Contact':'Aleksandra','Phone':'071254895'},
    {'product_id':4,'category_id':2, 'Cover_Photo':'grozje.jpg','Product':'Грозје','Manufacturer':'Marbi','Categories':'Овошје','Price':'120000','Shop':'Atpazar','Contact':'Mile','Phone':'078587458'}
    
        
        ]
    
     $scope.category=[
    {'category_id':1,'Cover_Photo':'zelencuk.jpg','long_txt':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ea sint optio asperiores, fugiat, corrupti dolorum facere a earum qui amet ratione. Explicabo laboriosam dolorem labore eum, ducimus tempore illo!','Category_Photo':'zelencuci.jpg','Categories':'Зеленчук'},
    {'category_id':2,'Cover_Photo':'ovosje.jpg','long_txt':' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos reprehenderit exercitationem blanditiis?','Category_Photo':'ovosja2.jpg','Categories':'Овошје'},
    {'category_id':3,'Cover_Photo':'zitarici.jpg','long_txt':' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos reprehenderit exercitationem blanditiis?','Category_Photo':'zitarki.jpg','Categories':'Житарици'},
    {'category_id':4,'Cover_Photo':'pcelni_proizvodi.jpg','long_txt':' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos reprehenderit exercitationem blanditiis?','Category_Photo':'pceli.jpg','Categories':'Пчелни производи'}
    
    
        
        ]
     $scope.product_price=[
    {'product_id':1, 'price':"1кг(100 ден)"},
    {'product_id':1, 'price':"3кг(240 ден)"},
    {'product_id':1, 'price':"5кг(200 ден)"},
         
         
    {'product_id':2, 'price':"1кг(200 ден)"},
    {'product_id':2, 'price':"3кг(340 ден)"},
    {'product_id':2, 'price':"5кг(300 ден)"},
         
    {'product_id':3, 'price':"1кг(400 ден)"},
    {'product_id':3, 'price':"3кг(540 ден)"},
    {'product_id':3, 'price':"5кг(500 ден)"},
         ]
         
         
         
    
     $scope.shop=[
    {'Cover_Photo':'harvey_norman.jpg','Shop':'Harvey Norman','Adress':'Atpazar','Contact':'Darko','Phone':'078524145'},
    {'Cover_Photo':'home_living.jpg','Shop':'Home Living','Adress':'Nova Bitola','Contact':'Boris','Phone':'071245878'},
    {'Cover_Photo':'pilgrim.jpg','Shop':'Pilgrim','Adress':'Karpos','Contact':'Ile','Phone':'072545878'}
    
    
        
        ]
    $scope.subcategory=[
    {'category':'Chairs','subcategory':'Balcony chairs'},
    { 'category':'Tables','subcategory':'Dining tables'},
    { 'category':'Sofas','subcategory':'Living room sofas'},
    { 'category':'Beds','subcategory':'Sleeping beds'},
    { 'category':'Carpets','subcategory':'Bathroom carpets'},
    { 'category':'Lamps','subcategory':'Table lamps'}
]
    $scope.dieta_online=[
        {"dieta_id":1, "dieta_title":"keto","kg_od":0,"kg_do":500,"pol":'maski',"visina_od":50,"visina_do":80,"dieta_descritpion":"kdfdfdfdfssossfjsofosjfjs","Cover_Photo":"domat.jpg"},
        {"dieta_id":1, "dieta_title":"keto1","kg_od":0,"kg_do":600,"pol":'maski',"visina_od":50,"visina_do":80,"dieta_descritpion":"kdfdfdfdfssossfjsofosjfjs","Cover_Photo":"piperka.jpg"},
        {"dieta_id":1, "dieta_title":"UN dieta","kg_od":50,"kg_do":700,"pol":'maski',"visina_od":50,"visina_do":80,"dieta_descritpion":"kdfdfdfdfssossfjsofosjfjs","Cover_Photo":"dinji.jpg"}
    ]
    
    }]);



    
