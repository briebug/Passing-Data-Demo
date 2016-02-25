angular.module('myApp.Controllers')
.controller('Broadcast1Controller', ['$scope', '$rootScope', 'broadcastDataService', function($scope, $rootScope, broadcastDataService){
        'use strict';

        $scope.init =  function(){
            getData();
        };

        $rootScope.$on('dataUpdated', function(event, data){
            $scope.broadcast1Items = data;
        });

        function getData(){
            $scope.broadcast1Items = broadcastDataService.getItem();
        };
    }]);