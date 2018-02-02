angular.module('app').controller('CategoriesController', ['$scope', 'MainService', 'CategoriesService', 'BucketService',
    function ($scope, MainService, CategoriesService, BucketService) {
        let category = CategoriesService.getCategory();
        MainService.query().$promise.then(function (items) {
            $scope.main = items.filter(function (i) {
                return i.category === category;
            });
        });

        $scope.addToy = function (name, price, img, key, description, category) {
            BucketService.addProduct(name, price, img, key, description, category);
        };
    }
]);