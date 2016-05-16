/**
 * Created by kimxogus on 2016-05-10.
 */

// Load CSS
require('bootstrap/dist/css/bootstrap.min.css');
require('../css/style.css');

// Load libraries
var angular = require('angular');
require('react-dom');
require('ngreact');
require('angular-route');


// Create Module app
var app = angular.module('app', ['react', 'ngRoute'])
    .config(require('./routes'));

global.app = app;

module.exports = app;