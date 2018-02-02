/**
 * Created by Maksim on 26.02.2017.
 */
var knex = require('knex');
var config = require('../config').database;

module.exports = knex(config);