var app = angular.module("myApp", ["ngRoute"]);

app.controller('myCtrl',[ '$scope', function($scope) {

 
  $scope.insert_users=function(Name,Surname,Email,Password,Phone){
    
      
    alert(Name+" "+Surname+" "+Email+" "+Password+" "+Phone);
    
  $scope.success=true;
}

$scope.insert_products=function(Product,Category,Price){
    
      
  alert(Product+" "+Category+" "+Price);
  
$scope.success=true;
}
$scope.insert_category=function(Category){
    
      
  alert(Category);
  
$scope.success=true;
}



/**************************************************************************/
/*******************ЏЕЈСОНИИИИИИИИИИ*****************/
/**************************************************************************/

$scope.users=[
    {'Name':'Igor','Surname':'Sivevski','Email':'Sivevski@gmail.com','Password':'jajcavareni','Phone':'078587458'},
     {'Name':'Nikolce','Surname':'Sivevski','Email':'Niko@gmail.com','Password':'jhjkd988','Phone':'070852241'},
     {'Name':'Trajan','Surname':'Ristevski','Email':'Ristevski@gmail.com','Password':'uiuhk','Phone':'047240587'},
     {'Name':'Milena','Surname':'Nedelkovska','Email':'Nedelkovska@gmail.com','Password':'erugks8','Phone':'074521193'},
     {'Name':'Jagoda','Surname':'Lozanovska','Email':'Lozanovska@gmail.com','Password':'loz_kj','Phone':'071254478'},
     {'Name':'Angele','Surname':'Petkovski','Email':'Petkovski@gmail.com','Password':'petko_an','Phone':'078521152'},
     {'Name':'Stojan','Surname':'Mitrevski','Email':'Mitrevski@gmail.com','Password':'mit_re','Phone':'078587458'},
     {'Name':'Kole','Surname':'Pandevski','Email':'Pandevski@gmail.com','Password':'kole_pn','Phone':'077852544'} 
]
$scope.categories=[
  {'Category':'Овошје'},
  {'Category':'Зеленчук'},
  {'Category':'Жита'},
  {'Category':'Легуминози'},
  {'Category':'Мед'},
  {'Category':'Зачини'},
  {'Category':'Чаеви'}
  
]
$scope.products=[
  {'Photo':'domati.jpg','Name':'Домати','Category':'Зеленчук','Price':'100'},
  {'Photo':'piperka.jpg','Name':'Пиперки','Category':'Зеленчук','Price':'120'},
  {'Photo':'dinja.jpg','Name':'Дињи','Category':'Овошје','Price':'70'}
  
]
$scope.blog_category=[
  {'Blog_category':'Здравје'},
  {'Blog_category':'Спортска активност'},
  {'Blog_category':'Рецепти'},
  {'Blog_category':'Природна медицина'}
  
  
]
$scope.blog=[
  {'Blog_id':'1','Title':'Витамин Ц','Blog_category':'Здравје','Date':'10/05/19'},
  {'Blog_id':'2','Title':'Придобивки од трчање','Blog_category':'Спортска активност','Date':'12/05/19'}
  
  
]


   

    
    }]);



    
