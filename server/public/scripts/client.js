var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider){
    $routeProvider.
      when("/viewPet", {
        templateUrl: "/views/partials/viewPet.html",
        // controller: "homeController"
      }).
      when("/newPet", {
        templateUrl: "/views/partials/newPet.html",
        controller: "petOwner"
      }).
      otherwise({
        redirectTo: "/"
      });
}]);

myApp.controller('petOwner', ['$scope', '$http', function ($scope, $http) {
  console.log('ng');
  $scope.addPet = function () {

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
      console.log('success in http POST route:', response);
    });
  }; // end addPet
}]); // end petOwner Controller

myApp.controller('viewPets', ['$scope', '$http', function ($scope, $http) {
  $scope.viewPets = function () {
    console.log('in view pets');
  };
}]); // end viewPets Controller
