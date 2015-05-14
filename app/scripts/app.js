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
        templateUrl: '../views/ModifsUsers/modif.html'
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
        templateUrl: '../views/ModifsUsers/add.html',
        controller: 'AddCtrl'
      })
      .when('/change/:userId', {
        templateUrl: '../views/ModifsUsers/change.html',
        controller: 'ChangeCtrl'
      })
      .when('/remove/:userId', {
        templateUrl: '../views/ModifsUsers/remove.html',
        controller: 'RemoveCtrl'
      })
      .when('/projects' , {
        templateUrl: 'views/Projects/list.html',
        controller: 'ProjectsCtrl'
      })
      .when('/projects/:projectId', {
        templateUrl: 'views/Projects/show.html',
        controller: 'ProjectsCtrl'
      })
      .when('/changeProject/:projectId', {
        templateUrl: '../views/ModifsProjects/change.html',
        controller: 'ChangeProjectsCtrl'
      })
      .when('/changeUserProject/:projectId', {
        templateUrl: '../views/ModifsProjects/changeUserProject.html',
        controller: 'ChangeProjectsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

