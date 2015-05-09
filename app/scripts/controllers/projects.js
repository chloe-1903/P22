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

    $scope.getRole = function(projectId, userId){
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + userId+ '/Roles')
        .success(function(data) {
          if (data.status == "success") {
            $scope.roles = data.data;
          }
        })
      $scope.projectIndex=0;
      /*angular.forEach($scope.roles, function(value,key){
      Pb: on entre pas dans le forEach
        if (value.id==projectId){
          $scope.projectIndex=key;
        }
      });*/
      return $scope.roles[$scope.projectIndex].name;
    };


  }]);


