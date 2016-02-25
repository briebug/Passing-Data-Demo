angular.module('myApp.Controllers')
.controller('HomeListenerController', ['$scope', 'listenerDataService',function($scope, listenerDataService){

        //'use strict';
        $scope.init = function () {
           setData();
        };

        $scope.buttonClick = function(){
             setData();
        }

        function setData() {
            listenerDataService.changeItem();
            getItem();
        };

        function getItem(){
            $scope.items = listenerDataService.getItem();
        };
    }])