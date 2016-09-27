(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('map', map)
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('map', {
                url: '/map', 
                template: '<h1>The map will be here</h1>',

            });
    }

    function map() {
        var directive = {
            templateUrl: './states/cool-map/cool-map.html',
            restrict: 'E',
            controller: controller,
            scope: {
                name: '='
            }
        };

        return directive;
    }

    controller.$inject = ['$scope', 'survey', '$timeout'];
    function controller($scope, survey, $timeout) {
        $scope.survey = survey;
        $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };        

        var map;
          function initMap() {
            console.log('I made it, I think!!');
            map = new google.maps.Map(document.getElementById('map'), {
              center: {lat: 42.7339, lng: 25.4858},
              zoom: 10
            });
          }

        $timeout(initMap, 2000);

    }

}(angular));