angular.module('myApp.Controllers')
.controller('Factory1Controller', ['$scope', 'factoryDataService', function($scope, factoryDataService){
        'use strict';

        $scope.init =  function(){
            getData()
        };

        $scope.buttonClick = function(){
            getData();
        };

        function getData(){
            $scope.factory1Items = factoryDataService.getItem();
        };

    }]);