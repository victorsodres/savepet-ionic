angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Animals', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var animals = [
    { id: 1, name: 'Tobias', img: 'dog.jpeg', race: 'Golden Retriever', age: '4', place: 'R. Cascão Golias', description: '- Vacinado \n - Dócil \n - Hiperativo' },
    { id: 2, name: 'Golias', img: 'gato2cab01.jpg', race: 'Gato', age: '2',  place: 'Avenida Tamahocos, 3234', description: '' },
    { id: 3, name: 'Petros', img: 'viralata1.jpg', race: 'Vira-lata', age: '2',  place: 'Rua Sinsalabim, 12', description: '' },
    { id: 4, name: 'Negoblu', img: 'viralata2.jpg', race: 'Vira-lata', age: '3',  place: 'Rua Procópio Nilton, 985', description: '' },
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

<<<<<<< HEAD
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
=======
.factory('Ongs', function(){
    var ongs = [
        { id: 1, name: 'Vida de Bicho', description: 'A associação de proteção de animais e meio ambiente Vida de Bicho, tem realizado trabalhos de proteção de animais, como castrações, assistência veterinária, resgates, doação de animais perdidos e abandonados e que sofreram maus tratos, além dos trabalhos citados, tem realizados outros trabalhos educativos, através de panfletos, palestras, vídeos e site , com a finalidade de orientar a sociedade, proprietários e futuros proprietários de animais , assim também na causa ambiental. Site: vidadebicho.org' },
        { id: 2, name: 'Aubrigo', description: 'Desde 1992 a empresária Silvia Rigetto, presidente e fundadora do Aubrigo Franslázaro, adotava seu primeiro cachorro abandonado. Era a Meme, uma vira-lata que aparecia no seu portão todo dia no mesmo horário para receber comida. Como Meme estava debilitada, Camila, filha de Silvia Rigetto, decidiu levar Meme ao veterinário para uma avaliação e qual não foi a surpresa: Meme estava para ser mamãe. Conclusão, Meme e seus filhotes ganharam um lar. Assim foi dado o primeiro passo. Daí por diante Silvia não parou mais de recolher os cachorros da rua, para que eles pudessem ter uma melhor condição de sobrevivência. O Aubrigo recebe amimais abandonados, assim como recolhe animais em situação precária das ruas. A entrada de novos animais entretanto, depende da disponibilidade de local, já que uma superpopulação pode resultar em riscos para os próprios animais. Neste momento mantém cerca de 180 cachorros e a recepção de novos animais depende de investimentos em novos canis. Site: aubrigo.org.br' },
        { id: 3, name: 'Viva Bicho', description: 'A Viva Bicho abriga atualmente quase 700 animais, entre cães e gatos e precisa de apoio para continuar nesta luta. Para adotar, compareça ao abrigo com RG, CPF e comprovante de residência. Site: vivabicho.org' },
        { id: 4, name: 'Olhar Animal', description: 'Olhar Animal - em defesa dos seres sencientes -- Senciência é um conceito chave para a discussão ética sobre os animais. Trata-se da junção de dois outros conceitos: o da sensibilidade e o da consciência. Sencientes são os organismos vivos que, além de apresentarem reações orgânicas ou físico-químicas aos processos que afetam o seu corpo (sensibilidade), percebem estas reações como estados mentais positivos ou negativos (consciência). É um indício de que naquele ser existe um indivíduo (um eu) que vivencia e experimenta as sensações, diferenciando-o assim de coisas vivas, como as plantas. A ONG Olhar Animal nasceu em 2006, primeiro como Sentiens Defesa Animal, recebendo o novo nome em 15/06/2009, quando este site ficou online. Porém, nosso trabalho pelos animais se iniciou em 2001, por meio da Sociedade Animal, organização já extinta, e depois pelo Instituto É o Bicho, esta ainda ativa, mas com a qual não mantemos mais vínculos diretos. Nosso ativismo é PELOS animais e não diretamente COM animais. Atuamos na propagação de informação, organização de eventos, campanhas, mobilizações, proposições legislativas, entre outras atividades. Buscamos a conscientização e sensibilização das pessoas para os interesses dos animais e para a necessidade e o dever moral de defendê-los. Site: olharanimal.org' },
        { id: 5, name: 'ABEAC', description: 'A ABEAC - Associação Bem Estar Animal - Amigos da Célia é uma ONG legalmente constituída, fundada em 2003 para assumir os animais da protetora Célia Sciumbata, que faleceu repentinamente e deixou 300 cães órfãos. Hoje temos mais de 1.100 cães sob nossa responsabilidade, a  maioria em Caucaia do Alto, bem pertinho da capital paulista. Paralelamente aos trabalhos nos abrigos, a ABEAC promove ações para a adoção responsável de seus cães. Site: abeac.org.br' }
    ];
    
    return {
        all: function(){
            return ongs;
        },
        get: function(ongId){
            return ongs[ongId];
        }
    }
>>>>>>> d15a79f2a30080ed127911994f3a7c287549c04a
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
    
    var verificaEmail = function(email){
        if(email == null){
            alert('Email incorreto!');
            return false;
        }
        if(email.trim == ""){
            alert('Email incorreto!');
            return false;
        }
        if(email.indexOf("@") == -1){
            alert('Email incorreto!');
            return false;
        }
        return true;
    };
    
    return {
        getLoginData: function(){
            return loginData;
        },
        doLogin:  function(loginData, timeout, login) {
<<<<<<< HEAD

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
=======
            console.log('Doing login', loginData.username, loginData.password);

            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            timeout(function() {
                alert('Login efetuado com sucesso!');
                return login = false;
            }, 1000);
        },
        doRecoveryPass: function(loginData, timeout){
            valido = verificaEmail(loginData.email);
            if (valido){
                timeout(function(){
                    alert('Email com orientação sobre o reset de senha foi enviado para ' + loginData.email);
                }, 1000);
                return valido;
            }else{
                return valido;
>>>>>>> d15a79f2a30080ed127911994f3a7c287549c04a
            }
        }
    };
}]);
