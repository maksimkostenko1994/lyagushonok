/**
 * Created by Maksim on 26.02.2017.
 */
angular.module('app').controller('HomeController', ['MainService', '$scope',
    function (MainService, $scope) {
        $scope.frogs = MainService.query();
    }
]);