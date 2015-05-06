'use strict';

/**
 * @ngdoc overview
 * @name pooIhmExemplesApp
 * @description
 * # pooIhmExemplesApp
 *
 * Main module of the application.
 */
angular
  .module('pooIhmExemplesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/modif', {
        templateUrl: '../views/Modifs/modif.html',
        controller: 'ModifCtrl'
      })
      .when('/users' , {
        templateUrl: 'views/Users/list.html',
        controller: 'UsersCtrl'
      })
      .when('/users/:userId', {
        templateUrl: 'views/Users/show.html',
        controller: 'UsersCtrl'
      })
      .when('/add', {
        templateUrl: 'views/Modifs/add.html',
        controller: 'ModifCtrl'
      })
      .when('/change', {
        templateUrl: 'views/Modifs/change.html',
        controller: 'ModifCtrl'
      })
      .when('/remove', {
        templateUrl: 'views/Modifs/remove.html',
        controller: 'ModifCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

