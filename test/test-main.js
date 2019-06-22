var allTestFiles = [];

for (var file in window.__karma__.files) {
  if (/spec\.js$/.test(file)) {
    allTestFiles.push(file.replace(/^\/base\//, '/base/'))
  }
}
// for (var file in window.__karma__.files) {
//   if (window.__karma__.files.hasOwnProperty(file)) {
//     if (/Spec\.js$/.test(file)) {
//       allTestFiles.push(file);
//     }
//   }
// };

//console.log(allTestFiles);


require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base/scripts',


  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});