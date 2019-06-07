define(['app'], function(userInterface){
  'use strict'
return userInterface.factory('DeleteUser', 
function ($http){
    var deleteTheRow = function(data){
      //console.log('This is data', data);
      return $http({ method: 'DELETE', url: 'http://localhost:3000/users/' + data.id})
      .then(function(response){
        console.log(response);
      })
    };
      return {
        deleteTheRow: deleteTheRow
      }
    
  })
});
