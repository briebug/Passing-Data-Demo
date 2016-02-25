angular.module('myApp.Controllers')
.controller('HomeVisitorController', ['$scope', 'visitorDataService',function($scope, visitorDataService){

        //'use strict';
        $scope.init = function () {
           setData();
        };

        $scope.buttonClick = function(){
             setData();
        }

        function setData() {
            visitorDataService.changeItem();
            getItem()
        };

        function getItem(){
            $scope.items = visitorDataService.getItem();
        };
    }])