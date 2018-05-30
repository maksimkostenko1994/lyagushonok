angular.module('app').controller('CategoriesController', ['$scope', '$http', 'CategoriesService', 'BucketService',
    function ($scope, $http, CategoriesService, BucketService) {
        let category = CategoriesService.getCategory();
        return $http.get("https://toysi.com.ua/feed-products-residue.php",
            {
                transformResponse: function (cnv) {
                    let x2js = new X2JS();
                    return x2js.xml2js(cnv);
                }
            })
            .then(function (response) {
                console.log(typeof response);
                return response.$promise.then(function (items) {
                    $scope.main = items.filter(function (i) {
                        return i.category === category;
                    });
                });
            });


        $scope.addToy = function (name, price, img, key, description, category) {
            BucketService.addProduct(name, price, img, key, description, category);
        };
    }
])
;