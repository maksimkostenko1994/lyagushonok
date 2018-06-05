angular.module('app').service('CategoriesService',
    function () {
        let setCategory = function (category) {
            return localStorage.setItem('category', JSON.stringify(category));
        };

        let getCategory = function () {
            return JSON.parse(localStorage.getItem('category'));
        };

        return {
            setCategory: setCategory,
            getCategory: getCategory
        };
    }
);