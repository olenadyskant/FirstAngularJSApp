requirejs.config({
    baseUrl: 'scripts',
    paths: {

        jquery: '/node_modules/jquery/dist/jquery.slim.min',
        popper: '/node_modules/popper.js/dist/popper.min',
        bootstrap: '/node_modules/bootstrap/dist/js//bootstrap.min',
        angular: '/node_modules/angular/angular',
        angularFlash: '/node_modules/angular-flash-alert/dist/angular-flash.min',
        angularMocks: '/node_modules/angular-mocks/angular-mocks',
        jasmine: '/node_modules/jasmine-core/lib/jasmine-core/jasmine',
        jasmineHtml: '/node_modules/jasmine-core/lib/jasmine-core/jasmine-html',
        app: 'app',
    },
});


requirejs(['UserContentController']);