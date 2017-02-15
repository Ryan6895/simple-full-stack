angular.module('myApp')
.service('mainService', function ($http) {
  this.test = function () {
    return $http.get('/api/test');
  }
})
