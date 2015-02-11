var app = angular.module('mister-e');

app.service('mainService', function () {
  var data = [
    {
      name: 'brian',
      date: '08'
    },
    {
      name: 'dan',
      date: '9'
    },
    {
      name: 'bill',
      date: '6'
    }
 ];

  this.getData = function () {
    return data;

  }

  this.addData = function (datas) {
    data.push({name: datas})

  }

});