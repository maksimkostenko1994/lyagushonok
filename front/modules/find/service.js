angular.module('app').service('FindService',
    function () {

        let setText = function (search) {
            return localStorage.setItem('find', search);
        };

        let getText = function () {
            return localStorage.getItem('find');
        };

        return {
            setText: setText,
            getText: getText
        };
    }
);