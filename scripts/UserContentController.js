define(['app', './directive', './AddNewUserFactory', './EditUserFactory', './DeleteUserFactory', '../components/js/userContentComponent', '../components/js/newUserDataComponent'], function (userInterface) {
    'use strict';
    return userInterface.controller('UserContentController', ['$scope', '$http', '$log', '$window', 'AddNewUser', 'EditUser', 'DeleteUser',
        function UserContentController($scope, $http, $log, $window, AddNewUser, EditUser, DeleteUser) {
            var ctrl = this;

            ctrl.users = [];

            $scope.userData = $http({ method: 'GET', url: 'http://localhost:3000/users' })
                .then(function (response) {
                    return ctrl.users = response.data;
                },
                    function errorCallback(response) {
                        $log.warn(response);
                    });

            $scope.addUser = function (newUser) {
                var myDataPromise = AddNewUser.postNewRow(newUser);
                myDataPromise.then(function (response) {
                    ctrl.users.push(response);
                },
                    function (response) {
                        $log.warn(response);
                    });

            };

            $scope.editing = false;

            $scope.modifyUser = function () {
                $scope.editing = true;

            };

            $scope.saveNewData = function (user) {
                $scope.editing = false;
                EditUser.modifyUserData(user)
                    .then(function (response) {
                        ctrl.users[user] = response.data;
                    },
                        function (response) {
                            $log.warn(response);
                        });
            };

            $scope.deleteUserData = function (user) {
                var index = ctrl.users.indexOf(user);
                DeleteUser.deleteTheRow(user);
                ctrl.users.splice(index, 1);
            }
        }])
})