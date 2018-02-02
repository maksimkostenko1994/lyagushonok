/**
 * Created by Maksim on 26.02.2017.
 */
var db = require('../../db/index');
var _ = require('lodash');

module.exports = {
    find: find,
    findAll: findAll,
    query: query
};

function find(id) {
    return db('staffs').where({id: id}).first();
}

function findAll() {
    return db('staffs');
}

function query(params) {
    var builder = db('v_staffs');
    builder.select('*');
    if (params.id) {
        builder.where('id', params.id);
    }
    if (params.name) {
        builder.where('name','ilike','%'+ params.name+'%');
    }
    if (params.key) {
        builder.where('key','ilike', params.key);
    }
    if (params.category) {
        builder.where('category','ilike', params.category);
    }
    if (params.price) {
        builder.where('price', params.price);
    }
    if (params.description) {
        builder.where('description', 'ilike', '%' + params.text + '%');
    }
    if(params.picture_id) {
        builder.where('picture_id', params.picture_id);
    }
    return builder;
}

query({}).then(function (result) {
    console.log(result);
});