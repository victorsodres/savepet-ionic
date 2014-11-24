angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('AnimalCtrl', function($scope, Animals) {
  $scope.animals = Animals.all();
})

.controller('AnimalDetailCtrl', function($scope, $stateParams, Animals, Util) {
    $scope.animal = Animals.get($stateParams.animalId);
    
    $scope.updateEditor = function(){
        var element = document.getElementById("description");
        Util.updateEditor(element);
    };
    
})

.controller('LoginController', function($scope, $timeout, Login){
  // Form data for the login modal
    $scope.loginData = Login.getLoginData;

    $scope.login = true;
        
  // Perform the login action when the user submits the login form
    $scope.doLogin = function(){
        $scope.login = Login.doLogin($scope.loginData, $timeout, $scope.login);
    }
      
})

.controller('AccountCtrl', function($scope) {
})

.controller('OngsCtrl', function($scope) {
})

.controller('ReportCtrl', function($scope, Util) {
//    $scope.updateEditor = function() {
//        var element = document.getElementById("description");
//        element.style.height = element.scrollHeight + "px";
//    };
    
    $scope.updateEditor = function(){
        var element = document.getElementById("description");
        Util.updateEditor(element);
    };
});
