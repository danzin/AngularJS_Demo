(function (angular) {
    'use strict';

    var data = [];

    angular
        .module('app')
        .factory('mapService', service);

    service.$inject = ['$http'];

    function service($http) {

        return {
            data: data,
            getMapData: getMapData,
            addNewLocation: addNewLocation,
            deleteLocations: deleteLocations,
            deleteCertainLocation: deleteCertainLocation,
            listMapOperations: listMapOperations
        };

        function getMapData() {
            $http.get('http://localhost:3005/mapsData')
                .then(function success(response) {
                    // console.log(response.data);

                    response.data.forEach(function (addressObject) {
                        data.push(addressObject);
                    })
                },
                function error(response) {
                    // console.log(response.statusText);
                });
        }


        function addNewLocation(lastAddressPicked, lastNameGiven, lastDescriptionGiven) {

            var newAddressAddedData = {
                // ID needs to be a string for marker to work properly.
                // Why not use the name of the gym, nothing better than that, right??
                // TODO: When enough time, drop the name altogether and use the id only in the HTML too.
                id: lastNameGiven.toLowerCase(),
                name: lastNameGiven,
                address: lastAddressPicked,
                description: lastDescriptionGiven
            };

            var config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            // Update UI.
            data.push(newAddressAddedData);

            // Update DB.
            $http.post('http://localhost:3005/mapsData', JSON.stringify(newAddressAddedData), config)
                .then(function success(response) {
                    // console.log(response.data)
                    console.log('Adding new address in DB succeeded!')

                },
                function error(response) {
                    console.log('Adding new address in DB failed!')

                });
        }

        function deleteLocations() {

            //Update UI.
            data = [];
            var allObjectsIdsToDelete = [];

            //Update DB.
            $http.get('http://localhost:3005/mapsData')
                .then(function success(response) {
                    // console.log(response.data);

                    response.data.forEach(function (addressObject) {

                        allObjectsIdsToDelete.push(addressObject.id);

                    })

                    console.log(allObjectsIdsToDelete)

                },
                function error(response) {
                    console.log(response.statusText);
                })
                .then(function () {
                    allObjectsIdsToDelete.forEach(function (idToDelete) {

                        $http({
                            method: "DELETE",
                            url: 'http://localhost:3005/mapsData/' + idToDelete.toLowerCase()
                        })
                            .then(function success(response) {
                                // console.log(response.data)
                                console.log(response.data)
                                // console.log('Deleting current in DB succeeded!')

                            },
                            function error(err) {
                                console.log('Deleting current in DB failed!')
                                console.log(err)

                            });
                    })
                })

            return data;
        }

        function deleteCertainLocation(nameToDelete) {

            // Update UI.
            data.forEach(function (iteratedAddress) {
                if (nameToDelete.toLowerCase() === iteratedAddress.name.toLowerCase()) {

                    var index = data.indexOf(iteratedAddress);
                    if (index > -1) {
                        data.splice(index, 1);
                    } else {
                        console.log('No such address');
                    }
                }
            });

            // Update database.
            $http.delete('http://localhost:3005/mapsData/' + nameToDelete.toLowerCase())
                .then(function success(response) {
                    // console.log(response.data)
                    console.log('Deleting a certain address in DB succeeded!')

                },
                function error(response) {
                    // console.log(response.statusText);
                    console.log('Deleting a certain address in DB succeeded!')
                });
        }

        // Function created for Niki to use
        function listMapOperations() {
            return ['Add Gym Location', 'Remove Certain Gym Location', 'Remove All Gym Locations', 'Hide All Gym Locations', 'Show All Gym Locations'];
        }
    }

} (angular));
