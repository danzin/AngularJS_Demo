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
                template:'<the-map></the-map>'

            });
    }

    function theMap() {

        var directive = {
            templateUrl:'./states/map/map.html',
            restrict: 'E',
            controller: controller
        };

        return directive;
    }

    controller.$inject = ['$scope', 'NgMap'];


    function controller($scope, NgMap) {

        // Id initilizer for info window and markers.
        var id="b";

        NgMap.getMap().then(function (map) {
            $scope.map = map;
        });

        // Initial addresses.
        $scope.addresses = [{
            id: id,
            name: "Gym1",
            address: "Bulgaria Blvd Sofia Bulgaria",
            description:"Number 1 Gym in Sofia.."
        }];

        // Marker on-click function.
        $scope.showDetail = function (e, item) {

            $scope.currentAddress = item.address;
            $scope.currentId = item.id;
            $scope.currentName = item.name;
            $scope.currentDescription=item.description;

            console.log(item);

            // The info window gets positioned on the
            // correct marker due to the unique id
            // generated every time.
            $scope.map.showInfoWindow('pop-up', item.id);

        };

        $scope.address = "Toronto Canada";

        // Current center map is on.
        $scope.text = "Sofia, Bulgaria";

        $scope.submit = function () {

            var lastAddressPicked = $scope.text,
             lastNameGiven = $scope.name,
            lastDescriptionGiven = $scope.description;

            $scope.addresses.push({
                id: id + "1",
                name: lastNameGiven,
                address: lastAddressPicked,
                description: lastDescriptionGiven
            });

            // console.log($scope.addresses);
            // Actually updating id.
            id = id + "1";
            // Reset Text and Name.
            $scope.text = "";
            $scope.name = "";
            $scope.description="";
        }

    }

}(angular));