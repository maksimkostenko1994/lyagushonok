/**
 * Created by Maksim on 28.02.2017.
 */
angular.module('app').controller('AboutController', ['$scope', '$window',
    function ($scope, $window) {
        $scope.go = function () {
            $scope.submitted = true;
            $window.location.href = '/#!/about'
        };
    }
]);