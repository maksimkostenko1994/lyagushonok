angular.module('app').controller('GoodController', ['$scope','PayService', function ($scope, PayService) {
    $scope.goodStore = JSON.parse(localStorage.getItem('good'));

    $scope.addToy = function (img, name, vendor_code, description, price, currencyId) {
        PayService.setProduct(img, name, vendor_code, description, price, currencyId);
    };
}]);