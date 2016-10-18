(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('dictionary', dictionary)
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('dictionary', {
                url: '/dictionary',
                template: '<dictionary ></dictionary>',
                params: {site: ''}
            });
    }

    function dictionary() {
        var directive = {
            templateUrl: './states/dictionary/dictionary.html',
            restrict: 'E',
            controller: controller,
            scope: {}
        };

        return directive;
    }

    controller.$inject = ['$scope', 'dictionary'];
    function controller($scope, dictionary) {
       
        $scope.service = dictionary;

        $scope.add = function() {
            dictionary.add($scope.name, $scope.description);
            $scope.name = '';
            $scope.description = '';
        }


    }

}(angular));