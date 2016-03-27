angular.module("portfolio", ['ngRoute'])
  .config(function($routeProvider, $locationProvider){
    $routeProvider
      .when('/blog', {
        templateUrl:"/views/blog.html"
      })
      .when('/github', {
        templateUrl:"views/github.html"
      });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  });
