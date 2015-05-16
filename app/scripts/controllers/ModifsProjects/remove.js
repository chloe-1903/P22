'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:RemoveCtrl
 * @description
 * # RemoveCtrl
 * Controller of the pooIhmExemplesApp
 */

angular.module('pooIhmExemplesApp')
  .controller('RemoveProjectCtrl', ['$scope', '$http','$routeParams', function ($scope, $http, $routeParams) {

    $scope.idToDelete=null;

    if($routeParams.projectId) {
      $scope.idToDelete = $routeParams.projectId;
    }

    $scope.msg = '';

    $scope.deleteProject = function() {
      $scope.url = "http://poo-ihm-2015-rest.herokuapp.com/api/Projects/" + $scope.idToDelete;
      $scope.msg = '...';
      $scope.res = $http.delete($scope.url)
        .success(function (data) {
          if (data.status == "success") {
            $scope.msg = "Suppression effectuée.";
          }
          else {
            $scope.msg = "Un problème est survenu, le projet n'a pas pu être supprimé de la liste.";
          }
        })
        .error(function (data) {
          alert("failure message: " + JSON.stringify({data: data}));
        });
    };

  }]);
