'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:AddCtrl
 * @description
 * # AddCtrl
 * Controller of the pooIhmExemplesApp
 */

angular.module('pooIhmExemplesApp')
  .controller('AddCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.userToAdd = {
      name: null,
      surname: null
    };

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

  }]);
