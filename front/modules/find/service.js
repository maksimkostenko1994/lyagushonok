angular.module('app').service('FindService',
    function () {
        var text = {};
        var setText = function (search) {
            text = search;
        };

        var getText = function () {
            return text;
        };

        return {
            setText: setText,
            getText: getText
        };
    }
);