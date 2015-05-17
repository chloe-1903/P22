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
        .success(function(data) {
          if (data.status == "success") {
            $scope.msg = "Modification effectuée.";
          }
        })
        .error(function(data) {
          alert( "failure message: " + JSON.stringify({data: data}));
        });
    };

    $scope.addUser = function(){
      $scope.msg = "...";
      $scope.url= "http://poo-ihm-2015-rest.herokuapp.com/api/Projects/"+ $scope.idToChange + "/Users/" + $scope.userToAdd.id;
      $scope.res=$http.put($scope.url, $scope.userToAdd)
        .success(function(data) {
          if (data.status == "success") {
            $scope.msg = "Ajout effectué.";
          }
        })
        .error(function(data) {
          alert( "failure message: " + JSON.stringify({data: data}));
        });
    };

    $scope.removeUser = function(){
      $scope.msg = "...";
      $scope.url= "http://poo-ihm-2015-rest.herokuapp.com/api/Projects/"+ $scope.idToChange + "/Users/" + $scope.userToRemove.id;
      $scope.res=$http.delete($scope.url)
        .success(function(data) {
          if (data.status == "success") {
            $scope.msg = "Suppression effectuée.";
          }
        })
        .error(function(data) {
          alert( "failure message: " + JSON.stringify({data: data}));
        });
    };

    $scope.roleToChange=null;
    $scope.changeRoleUser = function(){
      $scope.msg='...';
      //Récupération de tous les roles de l'utilisateur
      $scope.res=$http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $scope.userToChange.id+ '/Roles')
        .success(function(data) {
          if (data.status == "success") {
            $scope.roles = data.data;
          }
        })
     /* $scope.msg=$scope.roles.length;
      for($scope.i= 0; scope.i < $scope.roles.length; $scope.i=$scope.i+1)
      {
        $scope.msg="j";
        if (roles[i].ProjectId== $scope.idToChange){
          $scope.role=roles[i];
        }
      };*/;
      //pb avec roles.length, essayer $filter('limitTo')(input, limit, begin)

       $scope.res=$http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $scope.userToChange.id+ '/Roles/'+roleToChange.id, $scope.roleToChange)
       .success(function(data) {
       if (data.status == "success") {
          $scope.msg = "Modification effectué.";
       }
       })
       .error(function(data) {
       alert( "failure message: " + JSON.stringify({data: data}));
       });
    }
  }]);
