(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('login', login)
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                template: '<login name="\'login\'"></login>',
                params: {site: ''}
            });
    }

    function login() {
        var directive = {
            templateUrl: './states/login/login.html',
            restrict: 'E',
            controller: controller,
            scope: {
                name: '='
            }
        };

        return directive;
    }


//location variable in scope variables?
    controller.$inject = ['$scope', 'login'];
    function controller($scope, login) {
        $scope.service = login;

    }

}(angular));