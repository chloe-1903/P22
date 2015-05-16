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
      //Affichage de la page principale
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/modif', {
        templateUrl: '../views/ModifsUsers/modif.html'
      })
      //Affichage de la liste des étudiants
      .when('/users' , {
        templateUrl: 'views/Users/list.html',
        controller: 'UsersCtrl'
      })
      //Affichage des infos sur un étudiant
      .when('/users/:userId', {
        templateUrl: 'views/Users/show.html',
        controller: 'UsersCtrl'
      })
      //Ajouter un étudiant
      .when('/add', {
        templateUrl: '../views/ModifsUsers/add.html',
        controller: 'AddCtrl'
      })
      //Modifier un étudiant
      .when('/change/:userId', {
        templateUrl: '../views/ModifsUsers/change.html',
        controller: 'ChangeCtrl'
      })
      //Supprimer un étudiant
      .when('/remove/:userId', {
        templateUrl: '../views/ModifsUsers/remove.html',
        controller: 'RemoveCtrl'
      })
      //Affichage de la liste des projets
      .when('/projects' , {
        templateUrl: 'views/Projects/list.html',
        controller: 'ProjectsCtrl'
      })
      //Affichage d'un projet (nom, année, description, participants et leur roles)
      .when('/projects/:projectId', {
        templateUrl: 'views/Projects/show.html',
        controller: 'ProjectsCtrl'
      })
      //Modifier un projet (son nom, son année ou sa description)
      .when('/changeProject/:projectId', {
        templateUrl: '../views/ModifsProjects/change.html',
        controller: 'ChangeProjectsCtrl'
      })
      //Modifier (ajouter/supprimer) les utilisateurs
      .when('/changeUserProject/:projectId', {
        templateUrl: '../views/ModifsProjects/changeUserProject.html',
        controller: 'ChangeProjectsCtrl'
      })
      //Ajouter un projet
      .when('/addProject' , {
        templateUrl: 'views/ModifsProjects/addProject.html',
        controller: 'AddProjectCtrl'
      })
    //Supprimer un projet
      .when('/removeProject/:projectId', {
      templateUrl: '../views/ModifsProjects/removeProject.html',
      controller: 'RemoveProjectCtrl'
    })
      .otherwise({
        redirectTo: '/'
      });
  });

