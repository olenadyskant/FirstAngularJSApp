requirejs.config({
    baseUrl: 'scripts',
    paths: {

        jquery: '/node_modules/jquery/dist/jquery.slim.min',
        popper: '/node_modules/popper.js/dist/popper.min',
        angular: '/node_modules/angular/angular',
        angResource: '/node_modules/angular/angular-resource',
        bootstrap: '/node_modules/bootstrap/dist/js//bootstrap.min',
        app: 'app'
    },
});


requirejs(['UserContentController']);
