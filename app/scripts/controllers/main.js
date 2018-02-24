'use strict';

angular.module('newsbrowserFeApp').controller(
    'MainCtrl', 
    function($scope, NewsService, DictionaryService) {
      var that = this;
      
      DictionaryService.getCategories().then(function(categories) {
        $scope.categories = categories;
      });

      NewsService.getArticles('technology').then(function(articles) {
        $scope.articles = articles;
      });
    });
