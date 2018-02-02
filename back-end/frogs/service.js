/**
 * Created by Maksim on 26.02.2017.
 */
var frogDal = require('./dal');

module.exports = {
    find: find,
    findAll: findAll,
    query: query
};

function find(id) {
    return frogDal.find(id);
}

function findAll() {
    return frogDal.findAll();
}

function query(params) {
    return frogDal.query(params);
}