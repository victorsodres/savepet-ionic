angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('AnimalCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('AnimalDetailCtrl', function($scope, $stateParams, Animals) {
  $scope.animal = Animals.get($stateParams.animalId);
})

.controller('LoginController', function($scope, $timeout, Login){
  // Form data for the login modal
    $scope.loginData = Login.getLoginData;

    $scope.login = true;
        
  // Perform the login action when the user submits the login form
    $scope.doLogin = function(){
        $scope.login = Login.doLogin($scope.loginData, $timeout, $scope.login);
    }
    
//    $scope.loginData = {};
//    
//    $scope.doLogin = function() {
//        console.log('Doing login', $scope.loginData);
//
//        // Simulate a login delay. Remove this and replace with your login
//        // code if using a login system
//        $timeout(function() {
//            $scope.login = false;
//            alert('Login!');
//        }, 1000);
//    }
      
})

.controller('AccountCtrl', function($scope) {
})

.controller('OngsCtrl', function($scope) {
})

.controller('ReportCtrl', function($scope) {
    $scope.updateEditor = function() {
        var element = document.getElementById("description");
        element.style.height = element.scrollHeight + "px";
    };
});
