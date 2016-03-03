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


app.controller('BaseController', ['$scope', '$rootScope', 'baseService', function($scope, $rootScope, baseService) {
    'use strict';

    $scope.buttonClick = function(){
        setData();
    }

    function setData() {
        baseService.changeItem();
        getItem();
    };

    function getItem(){
        $scope.parentItems = baseService.getItem();
    };

}]);
