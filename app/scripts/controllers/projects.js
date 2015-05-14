'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the pooIhmExemplesApp
 */

angular.module('pooIhmExemplesApp')
  .controller('ProjectsCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

    $scope.showProject = function(num){
      window.open('http://localhost:9000/#/projects/'+num,'Détails Elève','menubar=no, scrollbars=no, top=100, left=100, width=380, height=400');
    };

    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects')
      .success(function(data) {
        $scope.projects = data.data;
      });


    if($routeParams.projectId) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + $routeParams.projectId)
        .success(function(data) {
          if (data.status == "success") {
            $scope.currentProject = data.data;
          }
        });
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + $routeParams.projectId+ '/Users')
        .success(function(data) {
          if (data.status == "success") {
            $scope.currentProjectUsers = data.data;
          }
        });
    };

    $scope.userWorking=null;

      $scope.roles="1";
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $scope.userWorking+ '/Roles')
        .success(function(data) {
          $scope.roles="2";
          if (data.status == "success") {
            $scope.roles = data.data;
          }
        });
  }]);


