define(['app', './directive', './AddNewUserFactory', './EditUserFactory', './DeleteUserFactory', './userContentComponent', './newUserDataComponent'], function () {
    describe('UserContentController', function () {

        var $controller, $httpBackend, $scope, users;

        beforeEach(module('userInterface'));

        beforeEach(inject(function (_$controller_, _$rootScope_, _users_, ) {
            $controller = _$controller_;
            users = _users_;
            $httpBackend = _$httpBackend_;
            $scope = _$rootScope_.$new();
        }));

        afterEach(function () {
            $httpBackend.verifyNoOutstandingRequest();
            $httpBackend.verifyNoOutstandingExpectation();
        });


        it('loads the users list and updates the table data', function () {
            $httpBackend.whenGET('http://localhost:3000/users').respond([])
            expect(response).toBeDefined();
        });

    })
    // describe('test', function () {
    //     it('shoudl pass', function () {
    //         expect(true).toBe(true);
    //     })
    // })
})