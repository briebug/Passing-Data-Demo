/*globals*/

angular
    .module('myApp.Config', []);

angular
    .module('myApp.Services', [
        'myApp.Config'
    ]);
angular
    .module('myApp.Directives', []);

angular
    .module('myApp.Controllers', [
        'myApp.Directives',
        'ui.bootstrap'
    ]);


angular
    .module('myApp.Session', []);

var app = angular.module('myApp.App', [

    //utilities/support modules

    'ngRoute',
    'myApp.Services',
    'myApp.Session',
    'myApp.Controllers',
    'myApp.Directives'
]);

app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/partials/base.html',
                controller: 'BaseController'
            });

        $locationProvider.html5Mode(true);
    }]);

app.controller('BaseController', ['$rootScope', function($rootScope) {
    'use strict';


}]);
