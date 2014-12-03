angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Animals', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var animals = [
    { id: 0, name: 'Scruff McGruff', img: "dog.jpeg", race: "Bu", age: "3", place: "R. 123", description: "asdsadsadasdsadsadasdsadsadasdsadsadasd" },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return animals;
    },
    get: function(animalId) {
      // Simple index lookup
      return animals[animalId];
    }
  }
})

.service('Users', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var users = [
    { id: 1, name: 'Administrador', user: "admin", password: "123456" },
  ];

  return {
    all: function() {
      return users;
    },
    get: function(userId) {
      // Simple index lookup
      return users[userId];
    },
    autentica: function(username, pass){
      var autentica = false;
      for(i = 0; i < users.length; i++){
        if(users[i].name == username && users[i].password == pass)
            return autentica = true;
      }
      return autentica;
    },
    set: function(user){
        users.push(user);
    }
  }
})

.factory('Util', function(){
    return {
        updateEditor: function(element) {
            element.style.height = element.scrollHeight + "px";
        }
    };
})

.factory('Login', [ 'Users', function(){
    // Form data for the login modal
    var loginData = {};
    
    return {
        getLoginData: function(){
            return loginData;
        },
        doLogin:  function(loginData, timeout, login) {

            if(Users.autentica(loginData.username, loginData.password)){
                // Simulate a login delay. Remove this and replace with your login
                // code if using a login system
                timeout(function() {
                    alert('Login efetuado com sucesso!');
                    return login = false;
                }, 1000);
            }else{
                timeout(function() {
                    alert('Usuário ou senha incorreto!');
                    return login = true;
                }, 1000);
            }
        }
    };
}]);
