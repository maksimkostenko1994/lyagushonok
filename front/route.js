/**
 * Created by Maksim on 26.02.2017.
 */
angular.module('app').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/main', {templateUrl: '/app/modules/main/main.html', controller: 'HomeController'})
        .when('/about', {templateUrl: '/app/modules/about/about.html', controller: 'AboutController'})
        .when('/shares', {templateUrl: '/app/modules/shares/shares.html', controller: 'SharesController'})
        .when('/payment', {templateUrl: '/app/modules/payment/payment.html', controller: 'PaymentController'})
        .when('/articles', {templateUrl: '/app/modules/articles/articles.html', controller: 'ArticleController'})
        .when('/toys', {templateUrl: '/app/modules/toys/toys.html', controller: 'ToysController'})
        .when('/category/:category', {templateUrl: '/app/modules/categories/template.html', controller: 'CategoriesController'})
        .when('/search/:text', {templateUrl: '/app/modules/find/find.html', controller: 'FindController'})
        .when('/pay', {templateUrl: '/app/modules/pay/template.html', controller: 'PayController'})
        .otherwise('/main');
    $locationProvider.html5Mode({enable: true, requireBase: false}).hashPrefix('!');
    window.location = '#!/main';
}]);