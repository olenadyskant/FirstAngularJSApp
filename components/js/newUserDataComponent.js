define(['app'], function (userInterface) {
    'use strict'
    return userInterface
        .component('newUserData',
            {
                templateUrl: './components/newUserForm.html',
                bindings: {
                    add: '&'
                }
            })
})