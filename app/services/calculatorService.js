
//Service for functionality

(function (angular) {
    'use strict';

    angular
        .module('app')
        .factory('calculatorService', service);

    service.$inject = [];
    function service() {
        //Declare training arrays
        var lightTraining = ['15 push-ups', '15 crunches', '5km run'];
        var middleTraining = ['25 push-ups', '25 crunches', '10km run'];
        var hardTraining = ['35 push-ups', '35 crunches', '15km run'];

        return {
            //Array with soft training
            lightTraining: lightTraining,
            //Array with middle training
            middleTraining: middleTraining,
            //Array with hard training
            hardTraining: hardTraining,
            //Function for checking training
            checkTraining: checkTraining,
            //Function for functionalitist
            listWithFunctionalities: listWithFunctionalities
        };

        //Function that check training
        function checkTraining(user) {
            var result = [];
            if (user.age != null && user.age != undefined) {
                result = checkAge(user.age);
            };
            return result;
        };

        //Function that check age to output training
        function checkAge(age) {
            var result = hardTraining;
            if (age >= 40) {
                result = lightTraining;
            } else if (age >= 30) {
                result = middleTraining;
            }
            return result;
        }
        //Function that output the functionalities of the calculator
        function listWithFunctionalities() {
            return ["User enter parameters in fields", "Click button check it", "Receive correct training"];
        }
    };
})(angular);