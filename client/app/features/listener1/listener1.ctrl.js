angular.module('myApp.Controllers')
.controller('Listener1Controller', ['$scope', 'listenerDataService', function($scope, listenerDataService){
        'use strict';

        $scope.listener1Items =  listenerDataService.getItem();

        listenerDataService.registerDataListener(this);

        this.myItem = function (item) {
            $scope.listener1Items = item;
        };
    }]);