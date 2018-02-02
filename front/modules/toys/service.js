/**
 * Created by Maksim on 28.02.2017.
 */
angular.module('app').service('MainService', ['$resource',
    function ($resource) {
        return $resource('toys', {}, {
            query: {method: 'GET', isArray: true}
        });
    }
]);