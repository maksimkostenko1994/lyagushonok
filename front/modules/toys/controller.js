/**
 * Created by Maksim on 28.02.2017.
 */
angular.module('app').controller('ToysController', ['$scope', '$http', '$window', function ($scope, $http) {
    $http.get("https://toysi.com.ua/feed-products-residue.php",
        {
            transformResponse: function (cnv) {
                let x2js = new X2JS();
                return x2js.xml2js(cnv);
            }
        })
        .then(function (response) {
            $scope.toys = response;
        });
}]);


