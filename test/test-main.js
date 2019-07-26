var allTestFiles = [];

var TEST_REGEXP = /(Spec|Test)\.js$/i;
for (var file in window.__karma__.files) {
  if (TEST_REGEXP.test(file)) allTestFiles.push(file);
};


//console.log(allTestFiles);

requirejs.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base/scripts',
  // dynamically load all test files

  paths: {
    jquery: '../node_modules/jquery/dist/jquery.slim.min',
    popper: '../node_modules/popper.js/dist/popper.min',
    angular: '../node_modules/angular/angular',
    angResource: '../node_modules/angular/angular-resource',
    angularMocks: '../node_modules/angular-mocks/angular-mocks',
    bootstrap: '../node_modules/bootstrap/dist/js//bootstrap.min',
    app: 'app',
  },  

  shim: {
    angular: { exports: 'angular' },
    angularMocks: { deps: ['angular'] }
  },

  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});