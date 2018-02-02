angular.module('app').controller('FindController', ['$scope', 'MainService', 'FindService', 'BucketService',
    function ($scope, MainService, FindService, BucketService) {
        $scope.text = FindService.getText();
        $scope.main = MainService.query();

        $scope.addToy = function (name, price, img, key, description, category) {
            BucketService.addProduct(name, price, img, key, description, category);
        };
    }
]);