(function (angular) {
    'use strict';
    //Get 'app' mpdule and create directive with name 'calendar'.
    angular
        .module('app')
        .directive('calendar', calendar)
        //With 'config' declare routing for this state.
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('calendar', {
                url: '/calendar',
                template: '<calendar></calendar>'
            });
    }
    // Directive function.
    function calendar() {
        var directive = {
            templateUrl: './states/calendar/calendar.html',
            restrict: 'E',
            controller: controller,
            scope: {}
        };

        return directive;
    }
    //Controller.
    controller.$inject = ['$scope', 'calendarService'];
    function controller($scope, calendarService) {
        //Get all days of week in this variable.
        $scope.days = calendarService.days;

        $scope.currentSelection = {
            Day: undefined,
            Training: undefined
        };
        $scope.selected = {
            dayForDeleting: undefined
        };
        //Add to scope two function - for add and for delete.
        $scope.addDisciplineInProgram = addDisciplineInProgram;
        $scope.deleteWorkoutInCalendar = deleteWorkoutInCalendar;
        
        //Function For add training in calendar. 
        function addDisciplineInProgram() {
            //Call this function to add training.
            calendarService.addWorkoutInCalendar($scope.currentSelection);
            //Unchecked radio buttons in this form.
            $scope.currentSelection.Day = undefined;
            $scope.currentSelection.Training = undefined;
            $scope.trainingProgramForm.$setPristine();
        }
        //Function to delete all trainings from one day ion calendar.
        function deleteWorkoutInCalendar() {
            //Call this function and remove from selected day all disciplines
            calendarService.deleteWorkout($scope.selected.dayForDeleting);
            //Unchecked radio buttons in this form.
            $scope.selected.dayForDeleting = undefined;
            $scope.deleteAllWorkoutsForDay.$setPristine();
        }
    }
}(angular));