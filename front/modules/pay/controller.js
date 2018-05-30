angular.module('app').controller('PayController', ['$scope', '$window', 'BucketService',
    function ($scope, $window, BucketService) {

        $scope.storeData = BucketService.getProducts();

        $scope.clear = function () {
            BucketService.clearProduct();
            $scope.storeData = BucketService.getProducts();
        };

        $scope.remove = function (item) {
            BucketService.removeProduct(item);
            $scope.storeData = BucketService.getProducts();
        };
    }
]);