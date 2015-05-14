'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:RemoveCtrl
 * @description
 * # RemoveCtrl
 * Controller of the pooIhmExemplesApp
 */

angular.module('pooIhmExemplesApp')
  .controller('RemoveCtrl', ['$scope', '$http','$routeParams', function ($scope, $http, $routeParams) {

    $scope.idToDelete=null;

    if($routeParams.userId) {
      $scope.idToDelete = $routeParams.userId;
    }

    $scope.msg = '';

    $scope.deleteUser = function() {
      $scope.url = "http://poo-ihm-2015-rest.herokuapp.com/api/Users/" + $scope.idToDelete;
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
