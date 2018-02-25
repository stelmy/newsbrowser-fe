'use strict';
                                 
angular.module('newsbrowserFeApp').service('DictionaryService', function (CommonService) {
    
    this.getCategories = function () {
      return CommonService.get('dictionary/category').then(function(response) {
        return response.data;
      });
    };
});