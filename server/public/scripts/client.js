var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider){
    $routeProvider.
      when("/viewPet", {
        templateUrl: "/views/partials/viewPet.html",
        controller: "viewPets"
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

  $scope.clearSearch = function() {
    $scope.name = null;
    $scope.age = null;
    $scope.animal = null;
    $scope.pic = null;
}; // end clear search function
}]); // end petOwner Controller

myApp.controller('viewPets', ['$scope', '$http', function ($scope, $http) {
  $scope.viewPets = function () {
    // console.log('in view pets');
    $scope.allPets = [];
    $http({
      method: 'GET',
      url: '/viewPet'
    }).then(function (response) {
      // console.log(response.data);
      var data = response.data;
      for (var i = 0; i < data.length; i++) {
        $scope.petName = data[i].name;
        $scope.allPets.push($scope.petName);
        console.log($scope.allPets);
      }
    }); // end http call
  }; // end viewPets function
}]); // end viewPets Controller
