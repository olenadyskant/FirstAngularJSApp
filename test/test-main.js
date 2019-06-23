// var tests = [];
// for (var file in window.__karma__.files) {
//   if (window.__karma__.files.hasOwnProperty(file)) {
//     if (/Spec\.js$/.test(file)) {
//       tests.push(file);
//     }
//   }
// }
var allTestFiles = [];
var TEST_REGEXP = /(_spec|_test)\.js$/i;
for (var file in window.__karma__.files) {
  if (TEST_REGEXP.test(file)) allTestFiles.push(file);
}
// //console.log(allTestFiles);


requirejs.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base/scripts',
  paths: {
    'jquery': '../node_modules/jquery/dist/jquery.slim.min',
    'popper': '../node_modules/popper.js/dist/popper.min',
    //bootstrap: '/base/node_modules/bootstrap/dist/js/bootstrap.min'
  },
  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start

});
