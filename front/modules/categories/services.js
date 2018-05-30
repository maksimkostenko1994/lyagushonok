angular.module('app').service('CategoriesService',
    function () {
        let categories = '';
        let setCategory = function (category) {
            categories = category;
        };

        let getCategory = function () {
            return categories;
        };

        return {
            setCategory: setCategory,
            getCategory: getCategory
        };
    }
);