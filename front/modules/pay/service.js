angular.module('app').service('PayService',
    function () {
        let products = [];

        function setProduct(name, price, img, key, description) {
            products.push({name: name, price: price, img: img, key: key, description: description});
        }

        return {
            setProduct: setProduct
        }

    }
);