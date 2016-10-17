(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('calculator', calculator)
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('calculator', {
                url: '/calculator',
                template: '<calculator></calculator>',
            });
    }

    function calculator() {
        var directive = {
            templateUrl: './states/calculator/calculator.html',
            restrict: 'E',
            controller: controller,
            scope: {}
        };
        return directive;
    }

    controller.$inject = ['$scope', 'calculatorService'];

    function controller($scope, calculatorService) {
        $scope.user = {};
        $scope.training = [];
        $scope.checkTraining = function (user) {
            $scope.training = calculatorService.checkTraining(user);
        };
    };
})(angular);

