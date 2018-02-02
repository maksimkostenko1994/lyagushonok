/**
 * Created by Maksim on 26.02.2017.
 */
var filesDal = require('./dal');

module.exports = {
    find: find,
    findAll: findAll,
    query: query
};

function find(id) {
    return filesDal.find(id);
}

function findAll() {
    return filesDal.findAll();
}

function query(params) {
    return filesDal.query(params);
}