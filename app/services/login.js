(function (angular) {
    'use strict';

    angular
        .module('app')
        .factory('login', service);

    service.$inject = ['$timeout', '$http', 'notify', 'conf'];

    function service($timeout, $http, notify, conf) {

        //data array containing all the data used in the service
        var data = [
            'login(username,password)',
            'redirectHome',
        ]

        

        //return functions in the service
        return {
          login: login,
          redirectHome: redirectHome,
        };


        //login function : 
        //parameters: username,password
        function login(username, password) {
            $http({
                method: 'GET',
                url: 'http://localhost:3001/users?username='+username+'&password='+password,
            }).then(function successCallback(res) {
                if (_.isEmpty(res.data)) {
                    notify.error('Not Found');
                } else {
                    notify.info('Found');
                    conf.user = res.data[0];
                    //$timeout(redirectHome,3500);
                }
                
            }, function errorCallback(res) {
                notify.error('Server Error! Sorry!');   
            })
        }


        //function that redirects to the home page
        function redirectHome() {
            window.location.hash = '#/home';
        }


    };
}(angular));