'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pooIhmExemplesApp
 */
/*angular.module('pooIhmExemplesApp')
  .controller('ModifCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

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
  }]);*/

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

