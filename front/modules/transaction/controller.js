angular.module('app').controller('TransController', ['$scope', '$window', 'PayService',
    function ($scope, $window, PayService) {
        $scope.storeData = PayService.getProducts();
        $scope.transaction = {email: '', tel: ''};


        $scope.getItems = function () {
            let item = [];
            for (let i = 0; i < $scope.storeData.length; i++) {
                item.push(JSON.stringify([$scope.storeData[i].name, $scope.storeData[i].price]));
            }
            return JSON.stringify(item);
        };
    }
]);