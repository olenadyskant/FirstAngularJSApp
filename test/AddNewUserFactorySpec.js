define(['angular', 'AddNewUserFactory', 'angularMocks', 'jquery'],

    function (angular, userInterface) {

        describe('AddNewUserFactory', function () {

            beforeEach(module('userInterface'));

            var $httpBackend,
                AddNewUser;

            beforeEach(inject(function (_$httpBackend_, _AddNewUser_) {
                $httpBackend = _$httpBackend_;
                AddNewUser = _AddNewUser_;
            }));

            afterEach(function () {
                $httpBackend.verifyNoOutstandingRequest();
                $httpBackend.verifyNoOutstandingExpectation();
            });


            describe('AddNewUserFactory returns postNewRow func', function () {

                it('should mock http POST', function () {

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

        })

    });