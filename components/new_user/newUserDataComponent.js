define(['app'], function (userInterface) {
    'use strict'
    return userInterface
        .component('newUserData',
            {
                templateUrl: './components/new_user/newUserForm.html',
                bindings: {
                    add: '&'
                }
            })
})