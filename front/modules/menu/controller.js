angular.module('app').controller('MenuController', ['$scope', '$window', 'CategoriesService', 'MainService','FindService',
    function ($scope, $window, CategoriesService, MainService, FindService) {
        $scope.toys = MainService.query();
        $scope.item = '';
        $scope.category = function (category) {
            CategoriesService.setCategory(category);
            $window.location.href = '/#!/category/' + category;
        };

        $scope.finding = function (item) {
            FindService.setText(item);
            $window.location.href = '/#!/search/'+ item;
        };
    }
]);