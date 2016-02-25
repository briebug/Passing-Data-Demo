angular.module('myApp.Controllers')
    .controller('HomeFactoryController', ['$scope', 'factoryDataService',function($scope, factoryDataService){

        //'use strict';
        $scope.init = function () {
            getItem();
        };

        $scope.buttonClick = function(){
            setData();
        }

        function setData() {
            factoryDataService.changeItem();
            getItem();
        };

        function getItem(){
            $scope.items = factoryDataService.getItem();
        };
    }])