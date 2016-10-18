(function (angular) {
    'use strict';

    var id = 'b';

    angular
        .module('app')
        .factory('mapService', service);

    service.$inject = [];

    function service() {

        return {
            data: data,
            addNewLocation: addNewLocation,
            deleteLocations: deleteLocations,
            deleteCertainLocation: deleteCertainLocation,
            listMapOperations: listMapOperations
        };
    }

    var data = [
        {
            id: id,
            name: 'Gym1',
            address: 'Bulgaria Blvd Sofia Bulgaria',
            description: 'Number 1 Gym in Sofia..'
        }];


    function addNewLocation(lastAddressPicked, lastNameGiven, lastDescriptionGiven) {

        data.push({
            id: id + '1',
            name: lastNameGiven,
            address: lastAddressPicked,
            description: lastDescriptionGiven
        });

        id = id + '1';
    }

    function deleteLocations() {
        data = [];

        return data;
    }

    function deleteCertainLocation(nameToDelete) {

        data.forEach(function (iteratedAddress) {
            if (nameToDelete.toLowerCase() === iteratedAddress.name.toLowerCase()) {

                var index = data.indexOf(iteratedAddress);
                if (index > -1) {
                    data.splice(index, 1);
                } else {
                    console.log('No such address');
                }
            }
        })

    }

    // Function created for Niki to use
    function listMapOperations() {
        return ['Add Gym Location', 'Remove Certain Gym Location', 'Remove All Gym Locations', 'Hide All Gym Locations', 'Show All Gym Locations'];
    }

}(angular));
