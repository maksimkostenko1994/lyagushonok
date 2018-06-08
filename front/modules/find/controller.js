angular.module('app').controller('FindController', ['$scope', '$http', 'FindService', 'PayService',
    function ($scope, $http, FindService, PayService) {
        $scope.text = FindService.getText();
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

        $scope.addToy = function (img, name, vendor_code, description, price, currencyId) {
            PayService.setProduct(img, name, vendor_code, description, price, currencyId);
        };
    }
]);