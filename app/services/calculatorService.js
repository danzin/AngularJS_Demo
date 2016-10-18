(function (angular) {
    'use strict';

    angular
        .module('app')
        .factory('calculatorService', service);

    service.$inject = ['$http'];
    function service($http) {

        var data = {};
        return {
            addUser:addUser,
            getUser:getUser,
            data: data,
            get: get,
            checkTraining: checkTraining,
            listWithFunctionalities: listWithFunctionalities
        };
        //Function that gets the appropriate training for the user, from json server
        function get() {
            return $http({
                method: 'GET',
                url: 'http://localhost:3001/trainings'
            }).then(function (res) {
                //Assign all of the right object into left object (mutate it)
                _.assign(data, res.data);
            });
        }
        //Function that add user to the json server
        function addUser(user) {
            return $http({
                method: 'POST',
                url: 'http://localhost:3001/calculatedTrainings',
                //Convert js value to JSON string
                data: JSON.stringify(user),
                //Set the content type to app json
                headers: {'Content-Type': 'application/json'},
            }).then(function (response) {
                console.log("Response was succesful!");
            }, function (response) {
                alert(response);
            });
        }
        //Function that gets saved user from the db.json file and outputs all information
        function getUser() {
            return $http({
                method: 'GET',
                url: 'http://localhost:3001/calculatedTrainings?userId=1'
            });
        }
        //Function that checks training
        function checkTraining(user) {
            var result = [];
            if (user.gender == "male") {
                result = checkMaleParams(user.age, user.weight, user.trainingType);
            } else if (user.gender == "female") {
                result = checkFemaleParams(user.age, user.weight, user.trainingType);
            }
            return result;
        };

        //Function that checks male parameters
        function checkMaleParams(age, weight, trainingType) {
            var result;
            //Group equal or greater than 40 years
            if (age >= 40) {
                //Weight equal or greater than 120
                if (weight >= 120) {
                    //Assign to result function that pass as parameter 
                    //type of training that user has chosen
                    result = chooseMaleTrainGtFourtyGt120(trainingType);

                    //Weight greater than 70 and less than 120 kilograms
                } else if (weight >= 70 && weight < 120) {
                    //Assign to result function that pass as parameter 
                    //type of training that user has chosen
                    result = chooseMaleTrainGtFourtyGt70(trainingType);

                    //Wweight less than 70
                } else if (weight < 70) {
                    //Assign to result function that pass as parameter 
                    //type of training that user has chosen
                    result = chooseMaleTrainGtFourtyLt70(trainingType);
                }
                //Group between 20 and 40 years
            } else if (age >= 20 && age < 40) {
                //Weight equal or greater than 120
                if (weight >= 120) {
                    //Assign to result function that pass as parameter 
                    //type of training that user has chosen
                    result = chooseMaleTrainGtTwentyGt120(trainingType);

                    //Weight greater than 70 and less than 120 kilograms
                } else if (weight >= 70 && weight < 120) {
                    //Assign to result function that pass as parameter 
                    //type of training that user has chosen
                    result = chooseMaleTrainGtTwentyGt70(trainingType);

                    //Weight less than 70
                } else if (weight < 70) {
                    //Assign to result function that pass as parameter 
                    //type of training that user has chosen
                    result = chooseMaleTrainGtTwentyLt70(trainingType);
                }
            }
            return result;
        }

        //
        //Functions that output types ot trainings for group 40+ men
        //

        //Function greater than 120 kilograms)
        function chooseMaleTrainGtFourtyGt120(trainingType) {
            var result;
            if (trainingType == "loose") {
                result = data.male.gtFourty.gt120.loose;
            } else if (trainingType == "strength") {
                result = data.male.gtFourty.gt120.strength;
            } else if (trainingType == "stamina") {
                result = data.male.gtFourty.gt120.stamina;
            }
            return result;
        }
        //Function greater than 70 kilograms 
        function chooseMaleTrainGtFourtyGt70(trainingType) {
            var result;
            if (trainingType == "loose") {
                result = data.male.gtFourty.gt70.loose;
            } else if (trainingType == "strength") {
                result = data.male.gtFourty.gt70.strength;
            } else if (trainingType == "stamina") {
                result = data.male.gtFourty.gt70.stamina;
            }
            return result;
        }
        //Function less than 70 kilograms
        function chooseMaleTrainGtFourtyLt70(trainingType) {
            var result;
            if (trainingType == "loose") {
                result = data.male.gtFourty.lt70.loose;
            } else if (trainingType == "strength") {
                result = data.male.gtFourty.lt70.strength;
            } else if (trainingType == "stamina") {
                result = data.male.gtFourty.lt70.stamina;
            }
            return result;
        }


        //
        //Functions that output types ot trainings for group between 20 and 40 men
        //

        //Function for group greater than 120 kilograms
        function chooseMaleTrainGtTwentyGt120(trainingType) {
            var result;
            if (trainingType == "loose") {
                result = data.male.gtTwenty.gt120.loose;
            } else if (trainingType == "strength") {
                result = data.male.gtTwenty.gt120.strength;
            } else if (trainingType == "stamina") {
                result = data.male.gtTwenty.gt120.stamina;
            }
            return result;
        }
        //Function for group greater than 90 kilograms 
        function chooseMaleTrainGtTwentyGt70(trainingType) {
            var result;
            if (trainingType == "loose") {
                result = data.male.gtTwenty.gt70.loose;
            } else if (trainingType == "strength") {
                result = data.male.gtTwenty.gt70.strength;
            } else if (trainingType == "stamina") {
                result = data.male.gtTwenty.gt70.stamina;
            }
            return result;
        }
        //Function less than 70 kilograms
        function chooseMaleTrainGtTwentyLt70(trainingType) {
            var result;
            if (trainingType == "loose") {
                result = data.male.gtTwenty.lt70.loose;
            } else if (trainingType == "strength") {
                result = data.male.gtTwenty.lt70.strength;
            } else if (trainingType == "stamina") {
                result = data.male.gtTwenty.lt70.stamina;
            }
            return result;
        }


        //Function that check female parameters
        function checkFemaleParams(age, weight, trainingType) {
            var result;
            //Group equal or greater than 40 years
            if (age >= 40) {
                //Weight equal or greater than 120
                if (weight >= 120) {
                    //Assign to result function that pass as parameter 
                    //type of training that user has chosen
                    result = chooseFemaleTrainGtFourtyGt120(trainingType);

                    //Weight greater than 70 and less than 120 kilograms
                } else if (weight >= 70 && weight < 120) {
                    //Assign to result function that pass as parameter 
                    //type of training that user has chosen
                    result = chooseFemaleTrainGtFourtyGt70(trainingType);

                    //Wweight less than 70
                } else if (weight < 70) {
                    //Assign to result function that pass as parameter 
                    //type of training that user has chosen
                    result = chooseFemaleTrainGtFourtyLt70(trainingType);
                }
            }
            //Group between 20 and 40 years
            if (age >= 20 && age < 40) {
                //Weight equal or greater than 120
                if (weight >= 120) {
                    //Assign to result function that pass as parameter 
                    //type of training that user has chosen
                    result = chooseFemaleTrainGtTwentyGt120(trainingType);

                    //Weight greater than 70 and less than 120 kilograms
                } else if (weight >= 70 && weight < 120) {
                    //Assign to result function that pass as parameter 
                    //type of training that user has chosen
                    result = chooseFemaleTrainGtTwentyGt70(trainingType);

                    //Weight less than 70
                } else if (weight < 70) {
                    //Assign to result function that pass as parameter 
                    //type of training that user has chosen
                    result = chooseFemaleTrainGtTwentyLt70(trainingType);
                }
            }
            return result;
        }

        //
        //Functions that output types ot trainings for group 40+ women
        //

        //Function greater than 120 kilograms)
        function chooseFemaleTrainGtFourtyGt120(trainingType) {
            var result;
            if (trainingType == "loose") {
                result = data.female.gtFourty.gt120.loose;
            } else if (trainingType == "strength") {
                result = data.female.gtFourty.gt120.strength;
            } else if (trainingType == "stamina") {
                result = data.female.gtFourty.gt120.stamina;
            }
            return result;
        }
        //Function greater than 70 kilograms 
        function chooseFemaleTrainGtFourtyGt70(trainingType) {
            var result;
            if (trainingType == "loose") {
                result = data.female.gtFourty.gt70.loose;
            } else if (trainingType == "strength") {
                result = data.female.gtFourty.gt70.strength;
            } else if (trainingType == "stamina") {
                result = data.female.gtFourty.gt70.stamina;
            }
            return result;
        }
        //Function less than 70 kilograms
        function chooseFemaleTrainGtFourtyLt70(trainingType) {
            var result;
            if (trainingType == "loose") {
                result = data.female.gtFourty.lt70.loose;
            } else if (trainingType == "strength") {
                result = data.female.gtFourty.lt70.strength;
            } else if (trainingType == "stamina") {
                result = data.female.gtFourty.lt70.stamina;
            }
            return result;
        }


        //
        //Functions that output types ot trainings for group between 20 and 40 women
        //

        //Function for group greater than 120 kilograms
        function chooseFemaleTrainGtTwentyGt120(trainingType) {
            var result;
            if (trainingType == "loose") {
                result = data.female.gtTwenty.gt120.loose;
            } else if (trainingType == "strength") {
                result = data.female.gtTwenty.gt120.strength;
            } else if (trainingType == "stamina") {
                result = data.female.gtTwenty.gt120.stamina;
            }
            return result;
        }
        //Function greater than 70 kilograms 
        function chooseFemaleTrainGtTwentyGt70(trainingType) {
            var result;
            if (trainingType == "loose") {
                result = data.female.gtTwenty.gt70.loose;
            } else if (trainingType == "strength") {
                result = data.female.gtTwenty.gt70.strength;
            } else if (trainingType == "stamina") {
                result = data.female.gtTwenty.gt70.stamina;
            }
            return result;
        }
        //Function less than 70 kilograms
        function chooseFemaleTrainGtTwentyLt70(trainingType) {
            var result;
            if (trainingType == "loose") {
                result = data.female.gtTwenty.lt70.loose;
            } else if (trainingType == "strength") {
                result = data.female.gtTwenty.lt70.strength;
            } else if (trainingType == "stamina") {
                result = data.female.gtTwenty.lt70.stamina;
            }
            return result;
        }
        //Function that output list with functionalities of the calculator
        function listWithFunctionalities() {
            return ["User enter parameters in fields", "Click button check it", "Receive correct training"];
        }
    };
})(angular);