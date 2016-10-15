(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('theMap', theMap)
        .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('map', {
                url: '/map',
                template: '<the-map></the-map>'
            });
    }

    function theMap() {

        var directive = {
            templateUrl: './states/map/map.html',
            restrict: 'E',
            controller: controller
        };

        return directive;
    }

    controller.$inject = ['$scope', '$http', 'NgMap', 'mapService'];


    function controller($scope, $http, NgMap, mapService) {

        $scope.mapService = mapService;

        NgMap.getMap().then(function (map) {
            $scope.map = map;
        });

        // Initial addresses received from service.
        $scope.mapService.getMapData();


        // Marker on-click function that shows details for gym location.
        $scope.showDetail = function (e, item) {

            $scope.currentAddress = item.Address;
            $scope.currentId = item.Id;
            $scope.currentName = item.Name;
            $scope.currentDescription = item.Description;

            // The info window gets positioned on the
            // correct marker due to the unique id
            // generated every time.
            $scope.map.showInfoWindow('pop-up', item.Id);

        };

        // Current center map is on.
        $scope.text = 'Sofia, Bulgaria';

        $scope.submit = function () {
            $scope.mapService.addNewLocation($scope.text, $scope.name, $scope.description);

            $scope.text = '';
            $scope.name = '';
            $scope.description = '';
        };

        $scope.deleteMarkers = function () {

            $scope.mapService.data = $scope.mapService.deleteLocations();
        };

        $scope.deleteCertainMarker = function () {

            $scope.mapService.deleteCertainLocation($scope.certain);
            $scope.certain = '';

        };

        $scope.showMarkers = function () {

            for (var key in $scope.map.markers) {
                $scope.map.markers[key].setMap($scope.map);
            }
        };

        $scope.hideMarkers = function () {
            for (var key in $scope.map.markers) {
                $scope.map.markers[key].setMap(null);
            }
        };

    }

}(angular));
