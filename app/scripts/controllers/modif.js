'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pooIhmExemplesApp
 */
angular.module('pooIhmExemplesApp')
  .controller('ModifCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

   $scope.userToAdd = {
     name: "",
     surname: "",
     email:"",
     website:""
   };

    $scope.msg = 'Hello World!';


    $scope.addUser = function(){
      var res = $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Users', userToAdd);
      res.success(function(data, status, headers, config) {
        $scope.msg = data;
      });
      res.error(function(data, status, headers, config) {
        alert( "failure message: " + JSON.stringify({data: data}));
      });
      // Making the fields empty
      //
      $scope.userToAdd.name='';
      $scope.userToAdd.surname='';
      $scope.userToAdd.email='';
      $scope.userToAdd.website='';
    };
  }]);

    /*$http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Users', userToAdd)
      .success(function(data) {
        $scope.msg = reussi;
      });/*


//var app = angular.module('pooIhmExemplesApp', []);

/* $http ajax calls really belongs in a service,
 but I'll be using them inside the controller for this demo */

/*app.controller('ModifCtrl', function($scope, $http) {
  //inputting json directly for this example
  $scope.languages = [
    {name:"English", value:0},
    {name:"Spanish", value:1},
    {name:"German", value:3},
    {name:"Russian", value:2},
    {name:"Korean", value:1}
  ];
  $scope.save = function() {
    /*$http.post('path/to/server/file/to/save/json', $scope.languages).then(function(data) {
     $scope.msg = 'Data saved';
     });*/
    /*$scope.msg = 'Data sent: '+ JSON.stringify($scope.languages);
  };
});*/

