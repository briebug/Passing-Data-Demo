angular.module('myApp.Controllers')
.controller('Visitor1Controller', ['$scope', 'dataService', function($scope, dataService){

        'use strict';

        $scope.visitor1Items = dataService.getItem();
        $scope.getNewItems = function(){

            $scope.visitor1Items = dataService.changeItem();
            $scope.visitor1Items = dataService.getItem();

        };

        dataService.registerContext(this);

        this.myItem = function () {
            $scope.visitor1Items = dataService.getItem();
        };
    }]);