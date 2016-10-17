(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('home', home)
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                template: '<home name="\'home\'"></home>',
                params: {site: ''}
            });
    }

    function home() {
        var directive = {
            templateUrl: './states/home/home.html',
            restrict: 'E',
            controller: controller,
            scope: {
                name: '='
            }
        };

        return directive;
    }

//Using all the services in the project
    controller.$inject = ['$scope', 'music', 'calculatorService', 'calendarService', 'dictionary', 'mapService'];
    function controller($scope, music, calculatorService, calendarService, dictionary, mapService) {
        $scope.music = music;
        $scope.calculatorService = calculatorService;
        $scope.calendarService = calendarService;
        $scope.dictionary = dictionary;
        $scope.mapService = mapService;

        $scope.showTitle = showTitle;
        $scope.showSubTitle = showSubTitle;

//Function that shows the Title in the page
        function showTitle() {
            return 'Angular Demo Home Page';
        }

//Function that shows the SubTitle in the page
        function showSubTitle() {
            return 'Functionalities Map';
        }


    }

}(angular));