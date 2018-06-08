angular.module('app').controller('CategoriesController', ['$scope', '$http', 'CategoriesService', 'PayService',
    function ($scope, $http, CategoriesService, PayService) {
        $scope.id = CategoriesService.getCategory();
        $http.get("https://toysi.com.ua/feed-products-residue.php",
            {
                transformResponse: function (cnv) {
                    let x2js = new X2JS();
                    return x2js.xml2js(cnv);
                }
            })
            .then(function (res) {
                let category_data = [];
                for (let t of res.data.yml_catalog.shop.offers.offer) {
                    if (t.categoryId === $scope.id) {
                        category_data.push(t);
                    }
                }
                return $scope.category_toys = category_data;
            });


        $scope.addToy = function(img,name,vendor_code,description,price,currencyId) {
            PayService.setProduct(img,name,vendor_code,description,price,currencyId);
        };
    }
]);