var destinohonduras  = angular.module('destinohonduras',[
        'ngRoute',
        'ui.bootstrap',
        'ngAnimate'

])

    .config(function($routeProvider) 
    {
        $routeProvider
            .when('/login',
            {
                templateUrl:'client/views/authentication/login.html',
                controller:'loginControllrt'
            })
            .otherwise(
            {
                redirectTo:'/'
            });
    });
