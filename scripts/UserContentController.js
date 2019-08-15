define(['app', './directive', './AddNewUserFactory', './EditUserFactory', './DeleteUserFactory', '../components/user_content/userContentComponent', '../components/new_user/newUserDataComponent'], function (userInterface) {
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

            $scope.saveNewData = function (user) {
                EditUser.modifyUserData(user)
                    .then(function (response) {
                        ctrl.users[user] = response.data;
                    },
                        function (response) {
                            $log.warn(response);
                        });
            };


            // $scope.cancelEditing = function (user) {
            //    ctrl.users = {};
            // }

            $scope.deleteUserData = function (user) {
                var index = ctrl.users.indexOf(user);
                DeleteUser.deleteTheRow(user);
                ctrl.users.splice(index, 1);
            }
        }])
})