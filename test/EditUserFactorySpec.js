define(['angular', 'EditUserFactory', 'angularMocks', 'jquery'],

    function (angular, userInterface) {

        describe('EditUserFactory', function () {

            beforeEach(module('userInterface'));

            var $httpBackend,
                EditUser;

            beforeEach(inject(function (_$httpBackend_, _EditUser_) {
                $httpBackend = _$httpBackend_;
                EditUser = _EditUser_;
            }));

            afterEach(function () {
                $httpBackend.verifyNoOutstandingRequest();
                $httpBackend.verifyNoOutstandingExpectation();
            });


            describe('EditUser returns modifyUserData func', function () {

                it('should mock http PUT', function () {

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

        })

    });
