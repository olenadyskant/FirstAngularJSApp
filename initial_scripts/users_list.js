(function(window) {
    const newTable = document.createElement('table');
    newTable.setAttribute('class', 'table table-bordered table-hover');
    newTable.setAttribute('id', 'myTable');
    const tabHead = document.createElement('thead');
    tabHead.innerHTML = `<tr><th scope = 'col'>${'#'}</th><th scope = 'col'>${'Name'}</th><th scope = 'col'>${'Age'}</th><th scope = 'col'>${'Gender'}</th><th scope = 'col'>${'Is Adult'}</th><th scope = 'col'>${'Edit Content'}</th><th scope = 'col'>${'Remove'}</th></tr>`
     const tabBody = document.createElement('tbody');
    tabBody.setAttribute('id', 'complex_body');
    newTable.appendChild(tabHead);
    newTable.appendChild(tabBody);
    
    
    document.querySelector('body').appendChild(newTable);

    window.app.loadTheRow();
})(window);


// 'use strict'

// angular.module('userInterface', ['ngResource']).controller('UserContentController',
//     function UserContentController($scope, $http, $log, $window, AddNewUser, EditUser, DeleteUser) {

//         $scope.userData = $http({ method: 'GET', url: 'http://localhost:3000/users' })
//             .then(function (response) {
//                 //console.log(response);
//                  return $scope.userData = response.data;
                 
//             },
//                 function errorCallback(response) {
//                     $log.warn(response);
//                 });



//         $scope.newUser = function (newUserData) {
//             var myDataPromise = AddNewUser.postNewRow(newUserData);
//             myDataPromise.then(function (response) {
//                 $scope.userData.push(response);
//                 $scope.newUserData = {};
//             },
//                 function (response) {
//                     $log.warn(response);
//                 });

//         };
        
       
        

//         $scope.modifyUser = function () {
//             $scope.editing = true;

//         };

//         $scope.saveNewData = function (user) {
//             $scope.editing = false;
//             EditUser.modifyUserData(user)
//             .then(function (response) {
//                 $scope.userData[user] = response.data;
//             },
//                 function (response) {
//                     $log.warn(response);
//                 });


//         };


//         $scope.resetUser = function () {
//             $window.location.reload();
//         }

//         $scope.deleteUserData = function (user, $index) {
//             DeleteUser.deleteTheRow(user);
//             $scope.userData.splice($index, 1);
//         }

//     });

// (function (window) {
//     window.app = window.app || {};

//     // this function loads data from the server and creates table using the tamplate above createNewTableRow
//     function loadTheRow() {
//         var xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function () {
//             if (this.readyState == 4 && this.status == 200) {
//                 var data = JSON.parse(this.responseText);
//                 data.forEach(window.app.createNewTableRow);
//             }
//         };
//         xhttp.open("GET", "http://localhost:3000/users", true);
//         xhttp.send();
//     }

//     window.app.loadTheRow = loadTheRow;
// })(window);

