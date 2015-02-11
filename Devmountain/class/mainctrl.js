var app = angular.module('mister-e');

app.controller('MainController', function ($scope, mainService) {

  var getData = function () {
    return mainService.getData();
  }

  $scope.addData = function () {
    mainService.addData($scope.newName);
    $scope.newName = '';

  }

  console.log(getData());


  $scope.data = getData()


});