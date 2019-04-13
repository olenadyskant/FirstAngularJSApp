define(['app', './directives', './AddNewUser', './EditUser', './DeleteUser'], function(userInterface){
    'use strict';
    return userInterface.controller('UserContentController', ['$scope', '$http', '$log', '$window','AddNewUser', 'EditUser', 'DeleteUser',
      function UserContentController ($scope, $http, $log, $window, AddNewUser, EditUser, DeleteUser){
        
        $scope.userData = $http({ method: 'GET', url: 'http://localhost:3000/users' })
            .then(function (response) {
                 return $scope.userData = response.data;
                 
            },
                function errorCallback(response) {
                    $log.warn(response);
                });


        $scope.newUser = function (newUserData) {
            var myDataPromise = AddNewUser.postNewRow(newUserData);
            myDataPromise.then(function (response) {
                $scope.userData.push(response);
                $scope.newUserData = {};
            },
                function (response) {
                    $log.warn(response);
                });

        };
        

        $scope.modifyUser = function () {
            $scope.editing = true;

        };

        $scope.saveNewData = function (user) {
            $scope.editing = false;
            EditUser.modifyUserData(user)
            .then(function (response) {
                $scope.userData[user] = response.data;
            },
                function (response) {
                    $log.warn(response);
                });


        };


        $scope.resetUser = function () {
            $window.location.reload();
        }

        $scope.deleteUserData = function (user, $index) {
            DeleteUser.deleteTheRow(user);
            $scope.userData.splice($index, 1);
        }
    }])
})