angular.module('app').controller('PayController', ['$scope', '$window', 'PayService',
    function ($scope, $window, PayService) {

        $scope.storeData = PayService.getProducts();

        $scope.counterUp = function (index) {
            $scope.storeData[index].index++;
        };

        $scope.counterDown = function (index) {
            if ($scope.storeData[index].index > 1) {
                $scope.storeData[index].index--;
            }
        };

        $scope.total = function() {
            let total = 0;
            angular.forEach($scope.storeData, function(item) {
                total += item.index * item.price;
            });
            return total;
        };

        $scope.clear = function () {
            PayService.clearProducts();
            $scope.storeData = PayService.getProducts();
        };

        $scope.remove = function (item) {
            PayService.removeProduct(item);
            $scope.storeData = PayService.getProducts();
        };
    }
]);