/*globals angular */
angular.module('myApp.Services')
    .service('RESTCaller', ['$http', '$q', function($http, $q) {
        'use strict';

        var isNonError = function(status) {
            return status >= 100 && status <= 399; // 100, 200, and 300 series status codes (non-errors)
        };


        var resolveDeferred = function(deferred, result, callback) {
            if (isNonError(result.status)) {
                var data = callback ? callback(result.data) : result.data;
                deferred.resolve(data);
            } else {
                deferred.reject({ code: 'ERR', result: result});
            }
        };

        var makeCall = function(method, url, data, headers, callback, cache, getParams) {
            var deferred = $q.defer();

                var params;

                // if it is a get and cache is not defined then cache is true
                if (method === 'GET' && typeof cache === 'undefined') {
                    cache = true;
                }

                // create the params
                params = {url: url, method: method, data: data, headers: headers, cache: cache, params: getParams};

                $http(params)
                    .then(function (result) {
                        resolveDeferred(deferred, result, callback);
                    }, function(err) {
                        deferred.reject(err);
                    });

            return deferred.promise;
        };

        this.GET = function(url, headers, callback, cache, params) {
            return makeCall('GET', url, null, headers, callback, cache, params);
        };

        this.PUT = function(url, data, headers, callback) {
            return makeCall('PUT', url, data, headers, callback);
        };

        this.POST = function(url, data, headers, callback) {
            return makeCall('POST', url, data, headers, callback);
        };

        this.DELETE = function(url, headers, callback) {
            return makeCall('DELETE', url, null, headers, callback);
        };
    }]);