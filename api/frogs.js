/**
 * Created by Maksim on 26.02.2017.
 */
var frogsService = require('../back-end/frogs/service');

module.exports = {
    getFrog: getFrog,
    getFrogs: getFrogs
};

function getFrog(req, res) {
    var id = req.params.id;
    return frogsService.find(id).then(function (frogs) {
        res.json(frogs);
    });
}

function getFrogs(req, res) {
    var params = {
        id: req.id
    };
    return frogsService.query(params).then(function (frogs) {
        res.json(frogs);
    });
}