angular.module('myApp.Controllers')
.controller('Visitor1Controller', ['$scope', 'visitorDataService', function($scope, visitorDataService){

        'use strict';

        $scope.visitor1Items = visitorDataService.getItem();

        visitorDataService.registerContext(this);

        this.myItem = function () {
            $scope.visitor1Items = visitorDataService.getItem();
        };
    }]);