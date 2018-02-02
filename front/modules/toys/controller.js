/**
 * Created by Maksim on 28.02.2017.
 */
angular.module('app').controller('ToysController', ['$route','$scope', 'MainService', 'BucketService',
    function ($route,$scope, MainService, BucketService) {
        $scope.toys = MainService.query();
        $scope.addToy = function (name, price, img, key, description, category) {
            BucketService.addProduct(name, price, img, key, description, category);
        };
    }
]);