/**
 * Created by Maksim on 26.02.2017.
 */
angular.module('app').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/main', {templateUrl: './modules/main/template.html'})
        .when('/about', {templateUrl: './modules/about/template.html', controller: 'AboutController'})
        .when('/shares', {templateUrl: './modules/shares/template.html', controller: 'SharesController'})
        .when('/payment', {templateUrl: './modules/payment/template.html', controller: 'PaymentController'})
        .when('/articles', {templateUrl: './modules/articles/template.html', controller: 'ArticleController'})
        .when('/toys', {templateUrl: './modules/toys/template.html', controller: 'ToysController'})
        .when('/category/:category', {templateUrl: './modules/categories/template.html', controller: 'CategoriesController'})
        .when('/search/:text', {templateUrl: './modules/find/template.html', controller: 'FindController'})
        .when('/pay', {templateUrl: './modules/pay/template.html', controller: 'PayController'});
    $locationProvider.html5Mode({enable: true, requireBase: false}).hashPrefix('!');
    //window.location = '#!/main';
}]);