angular.module('myApp.Controllers')
.controller('Listener3Controller', ['$scope', 'listenerDataService', function($scope, listenerDataService){
        'use strict';

        $scope.listener3Items =  listenerDataService.getItem();

        listenerDataService.registerDataListener(this);

        this.myItem = function (item) {
            $scope.listener3Items = item;
        };
    }]);