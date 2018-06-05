angular.module('app').controller('PayController', ['$scope', '$window', 'PayService',
    function ($scope, $window, PayService) {

        $scope.storeData = PayService.getProducts();

        $scope.clear = function () {
            PayService.clearProduct();
            $scope.storeData = PayService.getProducts();
        };

        $scope.remove = function (item) {
            PayService.removeProduct(item);
            $scope.storeData = PayService.getProducts();
        };
    }
]);