angular.module('app').controller('MenuController', ['$scope', '$window', '$http', 'CategoriesService', 'FindService',
    function ($scope, $window, $http, CategoriesService, FindService) {
        $http.get("https://toysi.com.ua/feed-products-residue.php",
            {
                transformResponse: function (cnv) {
                    let x2js = new X2JS();
                    return x2js.xml2js(cnv);
                }
            })
            .then(function (res) {
                let category_data = [];
                for (let id of res.data.yml_catalog.shop.categories.category) {
                    if (id._parentId === undefined) {
                        category_data.push(id);
                    }
                }
                return $scope.toys = category_data;

            });
        $scope.item = '';
        $scope.category = function (id) {
            CategoriesService.setCategory(id);
            $window.location.href = '/#!/category/' + id;
        };

        $scope.finding = function (item) {
            FindService.setText(item);
            $window.location.href = '/#!/search/' + item;
        };
    }
]);