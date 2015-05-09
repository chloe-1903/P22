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
      window.open('http://localhost:9000/#/users/'+num,'Détails Elève','menubar=no, scrollbars=no, top=100, left=100, width=360, height=350');
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
    }

  }]);


