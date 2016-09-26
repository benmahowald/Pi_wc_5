console.log('magic');

var myApp = angular.module('myApp', []);

myApp.controller('petOwner', ['$scope', '$http', function ($scope, $http) {
  console.log('ng');
  $scope.allPets = [];
  $scope.addPet = function () {
    console.log('before post - ', $scope.allPets);

    // assemble object to send
    var pet = {
      name: $scope.name,
      age: $scope.age,
      animal: $scope.animal,
      pic: $scope.pic,
    };

    // http route to send pet
    $http({
      method: 'POST',
      url: '/newPet',
      data: pet,
    }).then(function (response) {
    });
      console.log(response);
    // can we push the bad song object into our array?
    $scope.allPets.push(pet);
    console.log('after post - ', $scope.allPets);
  }; // end addPet
}]); // end petOwner Controller
