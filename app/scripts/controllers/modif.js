'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pooIhmExemplesApp
 */
angular.module('pooIhmExemplesApp')
  .controller('ModifCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

   $scope.userToAdd = {
     name: null,
     surname: null
   };

    $scope.userToDelete= {
      id:null
    };

    $scope.idToChange= null;

    $scope.msg = '';

    $scope.addUser = function(){
      $scope.msg = '...';
      $scope.res=$http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Users/', $scope.userToAdd)
      .success(function(data) {
          if (data.status == "success") {
            $scope.msg = "Le nouvel élève a bien été entré.";
          }
          else {
            $scope.msg = "Un problème est survenu, l'étudiant n'a pas pu être ajouté à la liste.";
          }
      })
      .error(function(data, status, headers, config) {
        alert( "failure message: " + JSON.stringify({data: data}));
      });
      //$scope.userToAdd.name='';
      //$scope.userToAdd.surname='';
    };

    $scope.changeUser1 = function() {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $scope.idToChange)
        .success(function (data) {
          if (data.status == "success") {
              $scope.msg = "Vous pouvez maintenant modifier les données de l'élève.";
              $scope.userToChange= data.data;
          }
          else {
            $scope.msg = "Un problème est survenu, l'étudiant ne peut pas être modifié.";
          }
        });
    };

    $scope.changeUser = function(){
      $scope.msg = "...";
      $scope.url= "http://poo-ihm-2015-rest.herokuapp.com/api/Users/"+ $scope.idToChange;
      $scope.res=$http.put($scope.url, $scope.userToChange)
      .success(function(data, status, headers, config) {
          if (data.status == "success") {
            $scope.msg = "Modification effectuée.";
          }
      })
      .error(function(data, status, headers, config) {
        alert( "failure message: " + JSON.stringify({data: data}));
      });
      $scope.userToChange=null;
      $scope.idToChange=null;
    };

    $scope.deleteUser = function() {
      $scope.url = "http://poo-ihm-2015-rest.herokuapp.com/api/Users/" + $scope.userToDelete.id;
      $scope.msg = '...';
      $scope.res = $http.delete($scope.url)
        .success(function (data) {
          if (data.status == "success") {
            $scope.msg = "Suppression effectuée.";
          }
          else {
            $scope.msg = "Un problème est survenu, l'étudiant n'a pas pu être supprimé de la liste.";
          }
        })
        .error(function (data, status, headers, config) {
          alert("failure message: " + JSON.stringify({data: data}));
        });

      $scope.userToDelete.id=null;
    };

  }]);

    /*$http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Users', userToAdd)
      .success(function(data) {
        $scope.msg = reussi;
      });/*


//var app = angular.module('pooIhmExemplesApp', []);

/* $http ajax calls really belongs in a service,
 but I'll be using them inside the controller for this demo */

/*app.controller('ModifCtrl', function($scope, $http) {
  //inputting json directly for this example
  $scope.languages = [
    {name:"English", value:0},
    {name:"Spanish", value:1},
    {name:"German", value:3},
    {name:"Russian", value:2},
    {name:"Korean", value:1}
  ];
  $scope.save = function() {
    /*$http.post('path/to/server/file/to/save/json', $scope.languages).then(function(data) {
     $scope.msg = 'Data saved';
     });*/
    /*$scope.msg = 'Data sent: '+ JSON.stringify($scope.languages);
  };
});*/

