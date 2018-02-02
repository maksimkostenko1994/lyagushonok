angular.module('app').service('CategoriesService',
    function () {
        var categories = '';
        var setCategory = function (category) {
            categories = category;
        };

        var getCategory = function () {
            return categories;
        };

        return {
            setCategory: setCategory,
            getCategory: getCategory
        };
    }
);