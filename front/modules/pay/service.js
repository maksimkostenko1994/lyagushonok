angular.module('app').service('PayService',
    function () {

        let product = [];

        let setProduct = function setProduct(img, name, vendor_code, description, price, currencyId) {
            product.push({
                img: img,
                name: name,
                code: vendor_code,
                description: description,
                price: price,
                currency: currencyId,
                index: 1
            });
            return localStorage.setItem('payment', JSON.stringify(product));
        };

        let getProducts = function getProducts() {
            return JSON.parse(localStorage.getItem('payment'));
        };

        let clearProducts = function () {
            localStorage.removeItem('payment');
        };

        let removeProduct = function (item) {
            product = JSON.parse(localStorage.getItem('payment'));
            product.splice(product.indexOf(item), 1);
            return localStorage.setItem('payment', JSON.stringify(product));
        };

        return {
            setProduct: setProduct,
            getProducts: getProducts,
            clearProducts: clearProducts,
            removeProduct: removeProduct
        }

    }
);