(function() {

var app = angular.module("catDogApp", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider.when("/cat", {
      templateUrl: "cat.html"
    });
    $routeProvider.when("/dog", {
      templateUrl: "dog.html"
    });
    $routeProvider.when("/catdog", {
      templateUrl: "catdog.html"
    });
    $routeProvider.otherwise({
      templateUrl: "fourohfour.html"
    });
});

})();
