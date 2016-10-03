(function (angular) {
    var app = angular.module('calculator', []);

    app.service('calculatorFunctionality', function ($scope) {
        this.input = {};
        this.addInput = function (current,userInput) {
            current.userInput.push(this.input);
            this.input = {};
        };

        $scope.typesOfTrainings = false;
        this.showElement = function ($scope, typesOfTrainings) {
            return $scope.typesOfTrainings = true;
        };

        this.checkTraining = function () {
            checkAge = function () {
                userInput.age <= 20
            }
            if (userInput.weight) { }
        };
    });

    app.controller('CalculatorController', function ($scope, calculatorFunctionality) {

        $scope.addInput(current,userInput);
        $scope.showElement();
        $scope.checkTraining


    });
    var userInput = [];
})(angular);

