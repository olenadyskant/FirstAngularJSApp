define(['app'], function (userInterface) {
    'use strict'
    return userInterface
        .component('userContent',
            {
                templateUrl: './components/user_content/userContent.html',
                bindings: {
                    user: '=',
                    save: '&',
                    cancel: '&',
                    remove: '&'
                }
            })
})