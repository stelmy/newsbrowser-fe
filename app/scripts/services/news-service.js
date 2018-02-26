'use strict';
                                 
angular.module('newsbrowserFeApp').service('NewsService', function (CommonService) {
    
    this.getArticles = function (category) {
      return CommonService.get('news/pl/' + category).then(function(response) {
        return response.data.articles;
      });
    };
    
    this.searchArticles = function (query, page) {
      return CommonService.get('news/search/' + query + '/' + page).then(function(response) {
        return response.data;
      });
    };

});