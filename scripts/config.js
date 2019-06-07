requirejs.config({
    baseUrl: 'scripts',
    paths: {

        jquery: '/node_modules/jquery/dist/jquery.slim.min',
        popper: '/node_modules/popper.js/dist/popper.min',
        angular: '/node_modules/angular/angular',
        angResource: '/node_modules/angular/angular-resource',
        // angularMocks: '/node_modules/angular-mocks/angular-mocks',
        // angularRoute: '/node_modules/angular-route/angular-route',
        bootstrap: '/node_modules/bootstrap/dist/js//bootstrap.min',
        app: 'app',
        jasmine: '/node_modules/jasmine-core/lib/jasmine-core/jasmine',
        jasmineHtml: '/node_modules/jasmine-core/lib/jasmine-core/jasmine-html'
    },
});


requirejs(['UserContentController']);