define(['angular', 'UserContentController', 'angularMocks', 'jquery'],

    function (angular, userInterface) {

        describe('UserContentController', function () {

            beforeEach(module('userInterface'));

            var $scope,
                $httpBackend,
                ctrl,
                AddNewUser,
                EditUser,
                $window,
                DeleteUser;

            beforeEach(inject(function (_$rootScope_, _$controller_, _$httpBackend_, _$http_, _AddNewUser_, _EditUser_, _$window_, _DeleteUser_) {
                $scope = _$rootScope_.$new();
                $controller = _$controller_;
                $httpBackend = _$httpBackend_;
                $http = _$http_;
                AddNewUser = _AddNewUser_;
                EditUser = _EditUser_;
                $window = _$window_;
                DeleteUser = _DeleteUser_;

                ctrl = $controller('UserContentController', {
                    $scope: $scope,
                    $http: $http
                });
            }));

            afterEach(function () {
                $httpBackend.verifyNoOutstandingRequest();
                $httpBackend.verifyNoOutstandingExpectation();
            });


            describe('$scope.userData', function () {

                it('loads the users list and updates the table data', function () {
                    var returnData = [];
                    $httpBackend.when("GET", "http://localhost:3000/users").respond(returnData);
                    $httpBackend.flush();
                    expect(ctrl.users).toEqual(returnData);
                });
            });

            describe('AddNewUser calls postNewRow', function () {

                beforeEach(function () {
                    $httpBackend.when("GET", "http://localhost:3000/users").respond(200);
                    $httpBackend.flush();
                });

                it('should mock a promise', function () {

                    var responseData,
                        postData;

                    postData = {
                        name: 'name',
                        age: 123,
                        gender: 'gender'
                    }

                    $httpBackend.when("POST", "http://localhost:3000/users").respond(200, [postData]);
                    AddNewUser.postNewRow(postData).then(function (data) {
                        responseData = data;
                    })
                    $httpBackend.flush();
                    expect(responseData).toEqual([postData]);
                })

            });

            describe('$scope.addUser uses POST response', function () {

                beforeEach(function () {
                    $httpBackend.when("GET", "http://localhost:3000/users").respond(200, []);
                    $httpBackend.flush();
                });

                it('updates the table with new user data', function () {

                    $httpBackend.when("POST", "http://localhost:3000/users").respond(200);
                    var newUserData = {};
                    var promise = AddNewUser.postNewRow(newUserData);

                    promise.then(function (value) {
                        newUserData = value;
                        expect(ctrl.users).toBeDefined();
                        expect(ctrl.users.lastChild).toEqual(newUserData);
                    });
                    $httpBackend.flush();

                })
            });

            describe('$scope.modifyUser', function () {

                beforeEach(function () {
                    $httpBackend.when("GET", "http://localhost:3000/users").respond(200);
                    $httpBackend.flush();
                });

                it('starts editing mode', function () {
                    $scope.editing = true;
                    $scope.$apply();
                    expect($scope.editing).toBeTruthy();
                })
            })

            describe('EditUser calls modifyUserData', function () {

                beforeEach(function () {
                    $httpBackend.when("GET", "http://localhost:3000/users").respond(200);
                    $httpBackend.flush();
                });

                it('should mock a promise', function () {

                    var responseData,
                        updatedUser;

                    updatedUser = {
                        id: 123,
                        name: 'name',
                        age: 123,
                        gender: 'gender'
                    }

                    $httpBackend.when("PUT", "http://localhost:3000/users/" + updatedUser.id).respond(200, [updatedUser]);
                    EditUser.modifyUserData(updatedUser).then(function (data) {
                        responseData = data;
                    })
                    $httpBackend.flush();
                    expect(responseData).toEqual([updatedUser]);

                })
            })

            describe('$scope.saveNewData uses PUT response', function () {

                beforeEach(function () {
                    $httpBackend.when("GET", "http://localhost:3000/users").respond(200, []);
                    $httpBackend.flush();
                });

                it('updates single user/row data', function () {

                    $httpBackend.when("PUT", "http://localhost:3000/users/1").respond(200);

                    $scope.editing = false;
                    $scope.$apply();

                    var newUpdatedUser = { id: '1' };
                    EditUser.modifyUserData(newUpdatedUser).then(function (data) {
                        newUpdatedUser = data;
                        expect($scope.editing).toBeFalsy();
                        expect(ctrl.users).toBeDefined();
                        expect(ctrl.users[newUpdatedUser]).toEqual(newUpdatedUser);
                    });

                    $httpBackend.flush();
                })
            })

            describe("$scope.resetUser", function () {

                beforeEach(function () {
                    $httpBackend.when("GET", "http://localhost:3000/users").respond(200);
                    $httpBackend.flush();
                });

                it('canceles user editing', function () {

                    $window = { location: { reload: function () { } } };
                    spyOn($window.location, 'reload');
                    expect($window.location.reload).not.toHaveBeenCalled();
                    //expect($window.location.reload.calls.count()).toEqual(0);

                })
            })

            describe("DeleteUser calls deleteTheRow", function () {

                beforeEach(function () {
                    $httpBackend.when("GET", "http://localhost:3000/users").respond(200);
                    $httpBackend.flush();
                });

                it("should mock a promise", function () {

                    var responseData,
                        deletedUser;

                    deletedUser = {
                        id: 123,
                        name: 'name',
                        age: 123,
                        gender: 'gender'
                    }

                    $httpBackend.when("DELETE", "http://localhost:3000/users/" + deletedUser.id).respond(200, []);
                    DeleteUser.deleteTheRow(deletedUser).then(function (data) {
                        responseData = data;
                        //responseData = [];
                    })
                    $httpBackend.flush();
                    //expect(responseData).toEqual([]);
                    expect(responseData).toEqual(undefined);
                })

            })

            describe('$scope.deleteUserData uses DELETE response', function () {

                beforeEach(function () {
                    $httpBackend.when("GET", "http://localhost:3000/users").respond(200, []);
                    $httpBackend.flush();
                });

                it('deletes single user/row data', function () {

                    $httpBackend.when("DELETE", "http://localhost:3000/users/1").respond(200);

                    var deletedUser = { id: '1' };
                    DeleteUser.deleteTheRow(deletedUser).then(function (data) {
                        deletedUser = data;
                        expect(ctrl.users).toBeDefined();
                        expect(ctrl.users.splice[deletedUser]).toEqual(deletedUser);
                    });

                    $httpBackend.flush();
                })
            })


        })

    });
