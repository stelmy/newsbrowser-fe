'use strict';

angular.module('newsbrowserFeApp').controller('MainCtrl',
    function($scope, $sce, NewsService, DictionaryService) {
      $scope.articles = [];

      $scope.loadArticles = function(category) {
        NewsService.getArticles(category.id).then(function(articles) {
          $scope.articles = articles;
        });
      };

      DictionaryService.getCategories().then(function(categories) {
        $scope.categories = categories;
        $scope.defaultCategory = _.find(categories, function(category) {
          return category.isDefault;
        });
        $scope.currentCategory = $scope.defaultCategory;

        $scope.loadArticles($scope.defaultCategory);
      });
      
      $scope.getArticleUrl = function (article) {
        return $sce.trustAsResourceUrl(article.articleUrl);
      };
      
      $scope.getImageUrl = function (article) {
        if (_.startsWith(article.imageUrl, "/")) {
          article.imageUrl = null;
        }
        return article.imageUrl;
      }; 

    });
