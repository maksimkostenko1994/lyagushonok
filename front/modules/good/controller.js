angular.module('app').controller('GoodController', ['$scope', function ($scope) {
    $scope.goodStore = JSON.parse(localStorage.getItem('good'));
}]);