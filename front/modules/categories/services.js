angular.module('app').service('CategoriesService',
    function () {
        let setCategory = function (id) {
            return localStorage.setItem('category', JSON.stringify(id));
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