'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:AddProjectCtrl
 * @description
 * # AddProjectCtrl
 * Controller of the pooIhmExemplesApp
 */

angular.module('pooIhmExemplesApp')
  .controller('AddProjectCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.projectToAdd = {
      title: null,
      description: null,
      year: null
    };

    $scope.msg = '';

    $scope.addProject = function(){
      $scope.msg = '...';
      $scope.res=$http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/', $scope.projectToAdd)
        .success(function(data) {
          if (data.status == "success") {
            $scope.msg = "Le nouveau projet a bien été entré.";
          }
          else {
            $scope.msg = "Un problème est survenu, le projet n'a pas pu être ajouté à la liste.";
          }
        })
        .error(function(data, status, headers, config) {
          alert( "failure message: " + JSON.stringify({data: data}));
        });
      //$scope.userToAdd.name='';
      //$scope.userToAdd.surname='';
    };

  }]);
