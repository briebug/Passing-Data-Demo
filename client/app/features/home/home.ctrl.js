angular.module('myApp.Controllers')
.controller('HomeController', ['$scope', 'dataService',function($scope, dataService){

        //'use strict';
        $scope.init = function () {
           setData();
        };

        $scope.buttonClick = function(){
             setData();
        }

        function setData() {
            dataService.changeItem();
            getItem()
        };

        function getItem(){
            $scope.items = dataService.getItem();
        };
    }])