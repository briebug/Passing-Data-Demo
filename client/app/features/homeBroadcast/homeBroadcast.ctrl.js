angular.module('myApp.Controllers')
    .controller('HomeBroadcastController', ['$scope', '$rootScope', 'broadcastDataService',function($scope, $rootScope, broadcastDataService){

        //'use strict';
        $scope.init = function () {
            getItem();
        };

        $scope.buttonClick = function(){
            var item = setData();
            $rootScope.$broadcast('dataUpdated', item);
        }

        function setData() {
            broadcastDataService.changeItem();
            return getItem()
        };

        function getItem(){
            var item = broadcastDataService.getItem();
            $scope.items = item;
            return item;
        };
    }])