angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Animals', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var animals = [
    { id: 0, name: 'Scruff McGruff', img: "dog.jpeg", race: "Bu", age: "3", place: "R. 123", description: "asdsadsadasdsadsadasdsadsadasdsadsadasdsadsadasdsadsadasdsadsadasdsadsadasdsadsadasdsadsadasdsadsadasdsadsadasdsadsadasdsadsad" },
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

.factory('Util', function(){
    return {
        updateEditor: function(element) {
            element.style.height = element.scrollHeight + "px";
        }
    };
})

.factory('Login', function(){
    // Form data for the login modal
    var loginData = {};
    
    return {
        getLoginData: function(){
            return loginData;
        },
        doLogin:  function(loginData, timeout, login) {
            console.log('Doing login', loginData.username, loginData.password);

            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            timeout(function() {
                alert('Login efetuado com sucesso!');
                return login = false;
            }, 1000);
        }
    };
});
