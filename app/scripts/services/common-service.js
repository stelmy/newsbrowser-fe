'use strict';
                                 
angular.module('newsbrowserFeApp').service('CommonService', function ($http) {
    
    this.get = function (path) {
      return $http.get('http://localhost:8080/' + path);
    }

});