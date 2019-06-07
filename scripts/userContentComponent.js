define(['app'], function (userInterface) {
    'use strict'
    return userInterface
        .component('userContent',
            {
                templateUrl: '../userContent.html',
                bindings: {
                    user: '=',
                    save: '&',
                    cancel: '&',
                    remove: '&'
                }
            })
})