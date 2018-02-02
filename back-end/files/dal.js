/**
 * Created by Maksim on 10.03.2017.
 */
/**
 * Created by Maksim on 26.02.2017.
 */
var db = require('../../db/index');

module.exports = {
    find: find,
    findAll: findAll,
    query: query
};

function find(id) {
    return db('pictures').where({id: id}).first();
}

function findAll() {
    return db('pictures');
}

function query(params) {
    var builder = db('pictures');
    builder.select('*');
    if (params.id) {
        builder.where('id', params.id);
    }
    if (params.url) {
        builder.where('url','ilike',params.url);
    }
    return builder;
}

query({}).then(function (res) {
    console.log(res);
});