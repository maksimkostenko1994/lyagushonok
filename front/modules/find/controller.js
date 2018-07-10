angular.module('app').controller('FindController', ['$scope', '$http', '$window', 'FindService', 'PayService',
    function ($scope, $http, $window, FindService, PayService) {
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

        $scope.getGood = function (good) {
            localStorage.setItem('good', JSON.stringify({
                id: good._id,
                name: good.name,
                img: good.picture,
                price: good.price,
                currency: good.currencyId,
                description: good.description,
                code: good.vendor_code
            }));
            $window.location.href = '#!/toys/' + good._id;
        }
    }
]);