(function (angular) {
    'use strict';

    angular
        .module('app')
        .factory('music', service);

    service.$inject = ['$http'];

    function service($http) {
    var data = [];
        return {
            // example user data
             data: [
                   "2",
                   "100",
                   "Add",
                   "Edit",
                   "Remove"
                  ]
            };
    }
}(angular));