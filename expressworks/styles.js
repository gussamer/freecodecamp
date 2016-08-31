var express = require('express');
var path = require('path');
var stylus = require('stylus');
var nib = require('nib');
var logger = require('morgan');
var app = express();
function compile(str,path){
    return stylus(str).set('filename',path).use(nib());
}
app.use(logger('dev'));
app.use(stylus.middleware({src:process.argv[3]||path.join(__dirname,'styles'),compile:compile}));
app.use(express.static(process.argv[3]||path.join(__dirname,'styles')));
app.listen(process.argv[2]);