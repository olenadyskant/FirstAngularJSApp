define(['angular', 'DeleteUserFactory', 'angularMocks', 'jquery'],

    function (angular, userInterface) {

        describe('DeleteUserFactory', function () {

            beforeEach(module('userInterface'));

            var $httpBackend,
                DeleteUser;

            beforeEach(inject(function (_$httpBackend_, _DeleteUser_) {
                $httpBackend = _$httpBackend_;
                DeleteUser = _DeleteUser_;
            }));

            afterEach(function () {
                $httpBackend.verifyNoOutstandingRequest();
                $httpBackend.verifyNoOutstandingExpectation();
            });

            describe("DeleteUser returns deleteTheRow func", function () {

                it("should mock http DELETE", function () {

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

        })

    });