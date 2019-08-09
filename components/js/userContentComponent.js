define(['app'], function (userInterface) {
    'use strict'
    return userInterface
        .component('userContent',
            {
                templateUrl: './components/userContent.html',
                bindings: {
                    user: '=',
                    save: '&',
                    remove: '&'
                }
            })
})