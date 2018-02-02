/**
 * Created by Maksim on 24.05.2017.
 */
var picturesService = require('../back-end/files/services');

var _ = require('lodash');

module.exports = {
    getPicture: getPicture,
    getPictures: getPictures
};

function getPicture(req, res) {
    var id = req.params.id;
    return picturesService.find(id).then(function (picture) {
       res.json(picture);
    });
}

function getPictures(req, res) {
    var params = _.assign({}, req.query, req.body);
    return picturesService.query(params).then(function (picture) {
        res.json(picture);
    });
}