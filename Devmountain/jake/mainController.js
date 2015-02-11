var app = angular.module('awesomeApp').controller('mainController', function ($scope, $cookieStore) {

  $scope.test = 'heeloo';
  $http.get('http://ombapi.com/?t=star+wars&y=&plot=short&r=json')
    .then(function(response){
      $scope.movie= response.data
    
  })
});