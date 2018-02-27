'use strict';

angular.module('newsbrowserFeApp').controller('SearchCtrl',
    function($scope, $sce, toastr, NewsService) {
      $scope.articles = [];
      $scope.page = 1;
      $scope.totalPages = 1;

      $scope.searchArticles = function() {
        if (!$scope.query) {
          toastr.error('There is no query to find.', 'Error');
          return;
        }
        
        if ($scope.query.indexOf(' ') !== -1) {
          toastr.error('Whitespaces are not allowed.', 'Error');
          return;
        }
        
        if ($scope.query) {
		  $scope.lastQuery = $scope.query;
          NewsService.searchArticles($scope.query, $scope.page).then(function(response) {
            $scope.articles = response.articles;
            $scope.totalPages = response.totalPages;
          });
        }
      };

      $scope.previous = function() {
	    $scope.page -= 1;
        if ($scope.lastQuery) {
          NewsService.searchArticles($scope.lastQuery, $scope.page).then(function(response) {
            $scope.articles = response.articles;
            $scope.totalPages = response.totalPages;
          });
        }
      };

      $scope.next = function() {
	    $scope.page += 1;
        if ($scope.lastQuery) {
          NewsService.searchArticles($scope.lastQuery, $scope.page).then(function(response) {
            $scope.articles = response.articles;
            $scope.totalPages = response.totalPages;
          });
        }
      };

      $scope.getArticleUrl = function(article) {
        return $sce.trustAsResourceUrl(article.articleUrl);
      };

      $scope.getImageUrl = function(article) {
        if (_.startsWith(article.imageUrl, "/")) {
          article.imageUrl = null;
        }
        return article.imageUrl;
      };

    });
