angular.module('app').service('BucketService',
    function () {
        let product = [];

        function addProduct(name, price, img, key, description, category) {
            product.push({name: name, price: price, img: img, key: key, description: description, category: category, index: 1});
        }

        function getProducts() {
            return product;
        }

        function removeProduct(item) {
            product.splice(product.indexOf(item));
            return product;
        }

        function clearProduct() {
            product = [];
            return product;
        }

        return {
            addProduct: addProduct,
            getProducts: getProducts,
            clearProduct: clearProduct,
            removeProduct: removeProduct
        };
    }
);