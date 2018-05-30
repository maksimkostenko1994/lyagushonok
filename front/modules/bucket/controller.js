angular.module('app').controller('BucketController', ['$scope', '$window', 'BucketService',
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


        $scope.qualityPlus = function (index) {
            if ($scope.storeData[index].index > 0)
                $scope.storeData[index].index++;
        };
        $scope.qualityMinus = function (index) {
            if ($scope.storeData[index].index !== 1)
                $scope.storeData[index].index--;
        };

        let sum = function() {
            for (let i = 0; i < $scope.storeData.length; i++) {
                suma += $scope.storeData.price;
            }
            $scope.sum = suma;
        }

    }
]);