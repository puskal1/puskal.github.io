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
        });
});

// create the controller and inject Angular's $scope
pkApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look! Home Page';
});

pkApp.controller('projectsController', function($scope) {
    $scope.message = 'Look! I am an Projects page.';
});

pkApp.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a Contact Page.';
});

pkApp.controller('expertiseController', function($scope) {
    $scope.message = 'Expertise! JK. This is just a demo.';
});