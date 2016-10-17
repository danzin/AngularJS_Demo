(function (angular) {
    'use strict';

    angular
        .module('app')
        .factory('login', service);

    service.$inject = ['$timeout'];

    function service($timeout) {

        //data array containing all the data used in the service
        var data = [
            'login(username,password)',
            'showWrong',
            'showSuccess',
            'redirectHome',
            'hideWrong'
        ]

        

        //return functions in the service
        return {
          login: login,
          showWrong: showWrong,
          showSuccess: showSuccess,
          redirectHome: redirectHome,
          hideWrong: hideWrong
        };


        //login function : 
        //parameters: username,password
        function login(username, password) {
           // var location = $scope.location;
            if(username == 'admin' && password == 'admin') {
                //$location.path('/home');
                hideWrong();
                showSuccess();
                $timeout(redirectHome,2000);
            } else {
                showWrong();
            }
        }

        //shows a div that tells the user username/pass is wrong
        function showWrong() {
            document.getElementById('wrong').style.display = 'block';
        }

        //shows a div that tells the user username/pass is correct
        function showSuccess() {
            document.getElementById('success').style.display = 'block';
        }

        //function that redirects to the home page
        function redirectHome() {
            window.location.hash = '#/home';
        }

        //function that hides the div that tells username/pass is wrong and shows the correct one
        function hideWrong() {
            document.getElementById('wrong').style.display = 'none';
        }


    };
}(angular));