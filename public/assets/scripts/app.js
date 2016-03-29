angular.module("portfolio", ['ngRoute'])
  .config(function($routeProvider, $locationProvider){
    $routeProvider
      .when('/home', {
        templateUrl:"/views/home.html"
      })
      .when('/about', {
        templateUrl:"/views/about.html"
      })
      .when('/skills', {
        templateUrl:"/views/skills.html"
      })
      .when('/showcase', {
        templateUrl:"/views/showcase.html"
      })
      .when('/contact', {
        templateUrl:"/views/contact.html"
      })
      .when('/blog', {
        templateUrl:"/views/blog.html"
      })
      .when('/funfacts', {
        templateUrl:"views/fun.html"
      }).when('/github', {
        templateUrl:"views/github.html"
      });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  });
