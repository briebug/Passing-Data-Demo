angular.module('myApp.Controllers')
.controller('Listener2Controller', ['$scope', 'listenerDataService', function($scope, listenerDataService){
        'use strict';

        $scope.listener2Items =  listenerDataService.getItem();

        listenerDataService.registerDataListener(this);

        this.myItem = function (item) {
            $scope.listener2Items = item;
        };
    }]);