'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the pooIhmExemplesApp
 */

angular.module('pooIhmExemplesApp')
  .controller('UsersCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

    $scope.showUser = function(num){
      window.open('#/users/'+num,'Détails Elève','menubar=no, scrollbars=no, top=100, left=100, width=440, height=470');
    };

    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users')
      .success(function(data) {
        $scope.users = data.data;
      });

    if($routeParams.userId) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $routeParams.userId)
      .success(function(data) {
        if (data.status == "success") {
          $scope.currentUser = data.data;
        }
      });
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $routeParams.userId +'/Roles')
        .success(function(data) {
          if (data.status == "success") {
            $scope.roles = data.data;
          }
        });
    }

    $scope.getProjectName= function(projectId){
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + projectId)
        .success(function(data) {
          if (data.status == "success") {
            return data.data.title;
          }
        });
      return projectId;
    }

  }]);


