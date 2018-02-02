/**
 * Created by Maksim on 26.02.2017.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var config = require('../config');

var frogsAPI = require('./frogs');
var pictureAPI = require('./pictures');

var path = require('path');

app.use('*', bodyParser.json());
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/../front/index.html'));
});

app.use('/angular', express.static('node_modules/angular'));
app.use('/jquery', express.static('node_modules/jquery'));
app.use('/bootstrap', express.static('node_modules/bootstrap'));
app.use('/angular-resource', express.static('node_modules/angular-resource'));
app.use('/angular-route', express.static('node_modules/angular-route'));
app.use('/angular-filter', express.static('node_modules/angular-filter'));
app.use('/store', express.static('node_modules/store'));
app.use('/app', express.static('front'));
app.use('/style', express.static('style'));
app.use('/pictures', express.static('pictures'));

app.get('/toys/:id', frogsAPI.getFrog);
app.get('/toys', frogsAPI.getFrogs);

app.get('/pictures', pictureAPI.getPictures);
app.use('/pictures/:id', pictureAPI.getPicture)

app.listen(9999);
console.log('App is running on port 9999!');
