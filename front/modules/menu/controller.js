angular.module('app').controller('MenuController', ['$scope', '$window', '$http', 'CategoriesService','FindService',
    function ($scope, $window, $http, CategoriesService, FindService) {
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
        $scope.item = '';
        $scope.category = function (category) {
            CategoriesService.setCategory(category);
            $window.location.href = '/#!/category/' + category;
        };

        $scope.finding = function (item) {
            FindService.setText(item);
            $window.location.href = '/#!/search/'+ item;
        };
    }
]);