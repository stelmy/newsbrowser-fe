'use strict';

/**
 * @ngdoc function
 * @name newsbrowserFeApp.controller:MainCtrl
 * @description # MainCtrl Controller of the newsbrowserFeApp
 */
angular.module('newsbrowserFeApp').controller(
    'MainCtrl',
    function($http, $scope) {
      this.awesomeThings = [ 'HTML5 Boilerplate', 'AngularJS', 'Karma' ];

      $http.get('http://localhost:8080/news/pl/technology').then(
          function(response) {
            $scope.articles = response.data.articles;
          });
    });
