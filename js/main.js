angular.module('Main', ['ngRoute']).config(function($routeProvider){

    $routeProvider.when('/index', {
        templateUrl:'partials/home.html',
        controller:'IndexController'
    });

    $routeProvider.when('/', {
        templateUrl:'partials/home.html',
        controller:'IndexController'
    });

    $routeProvider.otherwise({redirectTo:'/'})
});
