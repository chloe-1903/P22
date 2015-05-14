'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:ChangeCtrl
 * @description
 * # ChangeCtrl
 * Controller of the pooIhmExemplesApp
 */

angular.module('pooIhmExemplesApp')
  .controller('ChangeProjectsCtrl', ['$scope', '$http','$routeParams', function ($scope, $http, $routeParams) {

    $scope.idToChange= null;

    $scope.msg = '';

    if($routeParams.projectId) {
      $scope.idToChange = $routeParams.projectId;
    } //sinon, afficher un message d'erreur

    if($scope.idToChange!= null) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + $scope.idToChange)
        .success(function (data) {
          if (data.status == "success") {
            $scope.projectToChange= data.data;
          }
          else {
            $scope.msg = "Un problème est survenu, le projet ne peut pas être modifié.";
          }
        });
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + $scope.idToChange +"/Users")
        .success(function (data) {
          if (data.status == "success") {
            $scope.usersInProject= data.data;
          }
          else {
            $scope.msg = "Un problème est survenu, le projet ne peut pas être modifié.";
          }
        });
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users')
        .success(function (data) {
          if (data.status == "success") {
            $scope.users= data.data;
          }
          else {
            $scope.msg = "Un problème est survenu, le projet ne peut pas être modifié.";
          }
        });
    }

    $scope.changeProject = function(){
      $scope.msg = "...";
      $scope.url= "http://poo-ihm-2015-rest.herokuapp.com/api/Projects/"+ $scope.idToChange;
      $scope.res=$http.put($scope.url, $scope.projectToChange)
        .success(function(data, status, headers, config) {
          if (data.status == "success") {
            $scope.msg = "Modification effectuée.";
          }
        })
        .error(function(data, status, headers, config) {
          alert( "failure message: " + JSON.stringify({data: data}));
        });
    };

    $scope.userToAdd=null;

    $scope.addUser = function(){
      $scope.msg = "...";
      $scope.url= "http://poo-ihm-2015-rest.herokuapp.com/api/Projects/"+ $scope.idToChange + "/Users/" + $scope.userToAdd.id;
      $scope.res=$http.put($scope.url, $scope.userToAdd)
        .success(function(data, status, headers, config) {
          if (data.status == "success") {
            $scope.msg = "Ajout effectué.";
          }
        })
        .error(function(data, status, headers, config) {
          alert( "failure message: " + JSON.stringify({data: data}));
        });
    };

    $scope.userToRemove=null;

    $scope.removeUser = function(){
      $scope.msg = "...";
      $scope.url= "http://poo-ihm-2015-rest.herokuapp.com/api/Projects/"+ $scope.idToChange + "/Users/" + $scope.userToRemove.id;
      $scope.res=$http.delete($scope.url)
        .success(function(data, status, headers, config) {
          if (data.status == "success") {
            $scope.msg = "Suppression effectuée.";
          }
        })
        .error(function(data, status, headers, config) {
          alert( "failure message: " + JSON.stringify({data: data}));
        });
    };

  }]);
