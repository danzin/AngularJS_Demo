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


//injecting Login service in the scope
    controller.$inject = ['$scope', 'login', 'conf'];
    function controller($scope, login, conf) {
        $scope.service = login;
        $scope.conf = conf;

    }

}(angular));