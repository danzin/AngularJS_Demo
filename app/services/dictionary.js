(function (angular) {
    'use strict';

    angular
        .module('app')
        .factory('dictionary', service);

    service.$inject = [];

    function service() {

        var current = {};

        var data = [
            {
            'name' : 'Air Bike',
            'description' : 'Raise your knees up in the air to the extent that your thighs make a right angle with the floor and your calves are exactly parallel to the floor.'+
            'Start paddling your legs, as if you’re riding a bicycle in the air.'
                            
             },
             {
            'name' : 'Butt Lift (Bridge)',
            'description': 'Move your arms out by your sides, away from the body.' +
            'Position your hands such that your palms are facing upwards. Applying the force from your heels, raise your hips in the upward direction.'+
            'Keep raising your glutes in the upward direction until your thighs, hips and back are in a straight line.'
            },
            {
            'name' : 'Dumbbell Squat',
            'description': 'Begin to slowly lower your torso by bending the knees as you maintain a straight posture with the head up. '+
            'Continue down until your thighs are parallel to the floor. Tip: If you performed the exercise correctly, the front of the knees should make an imaginary straight line' +
            'with the toes that is perpendicular to the front. If your knees are past that imaginary line (if they are past your toes) then you are placing undue stress on the knee' +
            'and the exercise has been performed incorrectly. Begin to raise your torso as you exhale by pushing the floor with the heel of your foot mainly as you straighten the legs again' +
            'and go back to the starting position.'
            },
        ]

        return {
           data: data,
           add: add,
           edit: edit,
           save: save,
           remove: remove,
           cancel: cancel,
           current: current,
           whatIDo: whatIDo
        };

        function add(name, description) {
            data.push({name: name, description: description});

        }

        function edit(x) {
            current = angular.copy(x);
            x.editMode = true;
        };

         function save(x) {
                x.editMode = false;
            };

         function remove(index) {
            data.splice(index, 1);
        };

         function cancel(x) {
            x.editMode = false;
            x.name = current.name;
            x.description = current.description;
        }

        function whatIDo() {
            return ['Add Exercise', 'Edit Exercise', 'Delete Exercise'];
        }
    }

}(angular));