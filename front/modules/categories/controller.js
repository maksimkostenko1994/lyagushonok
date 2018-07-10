angular.module('app').controller('CategoriesController', ['$scope', '$http', '$window', 'CategoriesService', 'PayService',
    function ($scope, $http, $window, CategoriesService, PayService) {
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
                for (let i of res.data.yml_catalog.shop.categories.category) {
                    for (let t of res.data.yml_catalog.shop.offers.offer) {
                        if (t.categoryId === $scope.id || i._parentId === $scope.id) {
                            category_data.push(t);
                        }
                    }
                }

                $scope.category_toys = category_data;
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