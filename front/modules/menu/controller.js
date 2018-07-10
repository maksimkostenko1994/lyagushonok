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
                $scope.res_data = res.data.yml_catalog.shop.categories.category;
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
            let post = [];
            for (let i of $scope.res_data) {
                if (id === i._parentId) {
                    post.push({name: i.__text, id: i._id});
                }
            }
            console.log(JSON.stringify(post));
            $scope.post_data = post;
            CategoriesService.setCategory(id);
            $window.location.href = '/#!/category/' + id;
        };

        $scope.finding = function (item) {
            FindService.setText(item);
            $window.location.href = '/#!/search/' + item;
        };

        $scope.postCategory = function (id) {

        }
    }
]);