define(['app'], function (userInterface) {
    'use strict'
    return userInterface
        .component('newUserData',
            {
                templateUrl: '../newUserForm.html',
                bindings: {
                    add: '&'
                }
            })
})