angular.module("portfolio")
  .controller("gitController", function($scope, $http){
    //on page load get my github repos
    $http.get('https://api.github.com/users/steph-harris/repos?sort=pushed')
      .then(function(response){
        $scope.repos = response.data;
      });
    //when a repo is clicked, get my commits, sha, and date
    $scope.getCommits = function(repoName){
      $http.get('https://api.github.com/repos/Steph-harris/' + repoName + '/commits?per_page=10')
        .then(function(commits){
          console.log(commits);
          $scope.commits = commits.data;
        });
    }
    //clicking sha takes user to that commits github page
  });
