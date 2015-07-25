// script.js

// create the module and name it pkApp
// also include ngRoute for all our routing needs
var pkApp = angular.module('pkApp', ['ngRoute']);

// configure our routes
pkApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/projects', {
            templateUrl : 'pages/projects.html',
            controller  : 'projectsController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
        })
        .when('/expertise', {
            templateUrl : 'pages/expertise.html',
            controller  : 'expertiseController'
        })
        .when('/about', {
            templateUrl : 'pages/expertise.html',
            controller  : 'expertiseController'
        });
});

// create the controller and inject Angular's $scope
pkApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Welcome to my beautiful website. :)';
});

pkApp.controller('projectsController', function($scope) {
    $scope.message = 'I will add my project soon.';
});

pkApp.controller('contactController', function($scope) {
    $scope.message = 'puskal_kafle@yahoo.com';
});

pkApp.controller('expertiseController', function($scope) {
    $scope.message = 'My area of expertise are listed below:';
});
pkApp.controller('aboutController', function($scope) {
    $scope.message = 'Hi! I am Puskal.';
});

