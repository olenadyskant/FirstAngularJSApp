define(['app'],function(userInterface){
  'use strict'
  return userInterface.factory('EditUser', 
function ($http){
    var modifyUserData = function(data){
      return $http({ method: 'PUT', url: 'http://localhost:3000/users/' + data.id, data: $.param({name:data.name, age: data.age, gender: data.gender}), headers: {'Content-type': 'application/x-www-form-urlencoded'}})
      .then(function(response){
        return response.data
      });
    };
      return {
        modifyUserData: modifyUserData
      }
    
  })
});