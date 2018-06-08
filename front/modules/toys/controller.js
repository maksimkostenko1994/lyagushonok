/**
 * Created by Maksim on 28.02.2017.
 */
angular.module('app').controller('ToysController', ['$scope', '$http', 'PayService', function ($scope, $http, PayService) {
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

    $scope.addToy = function(img,name,vendor_code,description,price,currencyId) {
        PayService.setProduct(img,name,vendor_code,description,price,currencyId);
    };
}]);


