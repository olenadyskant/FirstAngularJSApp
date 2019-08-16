define(['app', 'jquery'], function (userInterface, $) {
  'use strict'
  return userInterface.factory('AddNewUser',
    function ($http) {
      var postNewRow = function (data) {
        return $http({ method: 'POST', url: 'http://localhost:3000/users', data: $.param({ name: data.name, age: data.age, gender: data.gender }), headers: { 'Content-type': 'application/x-www-form-urlencoded' } })
          .then(function (response) {
            return response.data
          });
      };
      return {
        postNewRow: postNewRow
      }

    })
});