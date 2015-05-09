'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:ChangeCtrl
 * @description
 * # ChangeCtrl
 * Controller of the pooIhmExemplesApp
 */

angular.module('pooIhmExemplesApp')
  .controller('ChangeCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.idToChange= null;

    $scope.msg = '';

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

  }]);