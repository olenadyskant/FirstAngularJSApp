define(['angular', 'UserContentController', 'angularMocks', 'jquery'],

    function (angular, userInterface) {

        describe('UserContentController', function () {

            beforeEach(module('userInterface'));

            var $scope,
                $httpBackend,
                ctrl,
                $window,
                AddNewUser,
                EditUser,
                DeleteUser;

            beforeEach(inject(function (_$rootScope_, _$controller_, _$httpBackend_, _$http_, _AddNewUser_, _EditUser_, _DeleteUser_, _$window_) {
                $scope = _$rootScope_.$new();
                $controller = _$controller_;
                $httpBackend = _$httpBackend_;
                $http = _$http_;
                AddNewUser = _AddNewUser_;
                EditUser = _EditUser_;
                DeleteUser = _DeleteUser_;
                $window = _$window_;

                ctrl = $controller('UserContentController', {
                    $scope: $scope,
                    $http: $http
                });
            }));

            afterEach(function () {
                $httpBackend.verifyNoOutstandingRequest();
                $httpBackend.verifyNoOutstandingExpectation();
            });


            describe('$scope.userData loads the table of users', function () {

                it('loads the users list and updates the table data', function () {
                    var returnData = [];
                    $httpBackend.when("GET", "http://localhost:3000/users").respond(returnData);
                    $httpBackend.flush();
                    expect(ctrl.users).toEqual(returnData);
                });
            });

            describe('specs are using beforeEch', function () {

                beforeEach(function () {
                    $httpBackend.when("GET", "http://localhost:3000/users").respond(200, []);
                    $httpBackend.flush();
                })

                describe('$scope.addUser is called', function () {

                    it('adds new user data as the last row', function (done) {

                        var newUserData = {
                            name: 'Name',
                            age: 123,
                            gender: 'Gender'
                        };
                        var addUserSpy = spyOn(AddNewUser, 'postNewRow').and.returnValue(Promise.resolve(newUserData));

                        $scope.addUser(newUserData);

                        setTimeout(function () {
                            expect(addUserSpy).toHaveBeenCalledWith(newUserData);
                            expect($scope.newUser).toEqual({});
                            expect(ctrl.users[ctrl.users.length - 1]).toEqual(newUserData);
                            done();
                        });
                    })
                });

                describe('$scope.modifyUser is called', function () {

                    it('starts editing mode', function () {
                        $scope.modifyUser();
                        expect($scope.editing).toEqual(true);
                    })
                })

                describe('$scope.saveNewData is called', function () {

                    it('updates single user/row data', function (done) {
                        
                        var newUpdatedUser = {
                            id: 1,
                            name: 'Name1',
                            age: 1234,
                            gender: 'Gender1'
                        };

                        var updtUserSpy = spyOn(EditUser, 'modifyUserData').and.returnValue(Promise.resolve(newUpdatedUser));

                        $scope.saveNewData(newUpdatedUser);

                        setTimeout(function () {
                            expect(updtUserSpy).toHaveBeenCalledWith(newUpdatedUser);
                            expect($scope.editing).toEqual(false);
                            expect(ctrl.users).toBeDefined();
                            //expect(ctrl.users[newUpdatedUser]).toEqual(newUpdatedUser);
                            done();
                        });
                    })
                })

                describe("$scope.resetUser is called", function () {

                    // it('canceles user editing and reloads the page', function (done) {

                    //     $window = { location: { reload: function () { console.log('window is reloaded') } } };
                    //     var winReloadSpy = spyOn($window.location, 'reload').and.callFake(function(){});
                    //     //$scope.resetUser();
                    //     expect(winReloadSpy).toHaveBeenCalled();
                    // })
                })

                describe('$scope.deleteUserData is called', function () {

                    it('deletes single user/row data', function (done) {

                        var deletedUser = {
                            name: 'Name',
                            age: 123,
                            gender: 'Gender'
                        };

                        var dltUserSpy = spyOn(DeleteUser, 'deleteTheRow').and.returnValue(Promise.resolve(deletedUser));

                        $scope.deleteUserData(deletedUser);

                        setTimeout(function () {
                            expect(dltUserSpy).toHaveBeenCalledWith(deletedUser);
                            expect(ctrl.users.splice[deletedUser]).toEqual(undefined);
                            done();
                        });
                    })
                })

            })

        })

    });
