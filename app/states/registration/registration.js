(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('registration', registration)
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('registration', {
                url: '/registration',
                template: '<registration name="\'registration\'"></registration>',
                params: {site: ''}
            });
    }

    function registration() {
        var directive = {
            templateUrl: './states/registration/registration.html',
            restrict: 'E',
            controller: controller,
            scope: {
                name: '='
            }
        };

        return directive;
    }


//injecting registration service in the scope
    controller.$inject = ['$scope', 'conf'];
    function controller($scope, conf) {
        $scope.conf = conf;

    }

}(angular));