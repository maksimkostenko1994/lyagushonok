angular.module('app').controller('FindController', ['$scope', 'FindService', 'BucketService',
    function ($scope, FindService, BucketService) {
        $scope.text = FindService.getText();
        //$scope.main = MainService.query();

        $scope.addToy = function (name, price, img, key, description, category) {
            BucketService.addProduct(name, price, img, key, description, category);
        };
    }
]);