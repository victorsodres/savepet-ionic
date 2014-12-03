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

.controller('LoginController', function($scope, $timeout, Login, $ionicModal){
  // Form data for the login modal
    $scope.loginData = Login.getLoginData;

    $scope.login = true;
        
  // Perform the login action when the user submits the login form
    $scope.doLogin = function(){
        $scope.login = Login.doLogin($scope.loginData, $timeout, $scope.login);
    }
    
    
    //Modal esqueceu a senha
    $ionicModal.fromTemplateUrl('templates/forgotPass.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal){
        $scope.modal = modal;
    });
    
    $scope.openModal = function(){
        $scope.modal.show();
    }
    
    $scope.closeModal = function(){
        $scope.modal.hide();
    }
    
    $scope.$on('$destroy', function(){
        $scope.modal.remove();
    });
    
    $scope.doRecoveryPass = function(){
        if(Login.doRecoveryPass($scope.loginData, $timeout))
            $scope.closeModal();
    }
    
})

.controller('AccountCtrl', function($scope, $ionicModal) {

})

.controller('RegisterCtrl', function($scope){
    $scope.submitRegister = function(){
    
    }
})
            
.controller('OngsCtrl', function($scope, Ongs) {
    $scope.ongs = Ongs.all();
    
    $scope.getOng = function(id){
        $scope.ongDescription = Ongs.get(id).description;
    }
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
