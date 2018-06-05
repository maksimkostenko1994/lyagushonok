angular.module('app').controller('CategoriesController', ['$scope', '$http', 'CategoriesService', 'PayService',
    function ($scope, $http, CategoriesService, PayService) {
        $scope.category = CategoriesService.getCategory();
        $http.get("https://toysi.com.ua/feed-products-residue.php",
            {
                transformResponse: function (cnv) {
                    let x2js = new X2JS();
                    return x2js.xml2js(cnv);
                }
            })
            .then(function (res) {
                console.log(res.data)
                return $scope.category_toys = res;
            });


        $scope.addToy = function (name, price, img, key, description) {
            PayService.setProduct(name, price, img, key, description);
        }
    }
]);