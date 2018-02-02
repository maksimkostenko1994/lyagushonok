/**
 * Created by Maksim on 28.02.2017.
 */
angular.module('app').controller('PaymentController', ['$scope', '$window',
    function ($scope, $window) {
        $scope.go = function () {
            $scope.submitted = true;
            $window.location.href = '/#!/payment';
        };
    }
]);