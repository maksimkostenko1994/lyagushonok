angular.module('app').controller('TransController', ['$scope', '$window', 'PayService',
    function ($scope, $window, PayService) {
        $scope.storeData = PayService.getProducts();
        $scope.total = localStorage.getItem('total');
    }
]);