/**
 * Created by kimxogus on 2016-05-10.
 */

// Load CSS
require('../../../bower_components/bootstrap/dist/css/bootstrap.min.css');
require('../css/style.css');

// Load libraries
var angular = require('angular');
require('react-dom');
require('ngreact');


// Create Module app
angular.module('app', ['react'])

    // Register React Components
    .value('Header', require('./component/Header'))
    .value('Form', require('./component/Form'))

    // Register Controllers
    .controller('SampleCtrl', require('./ctrl/SampleCtrl'));


// bind app to document when ready
angular.element(document).ready(function(){
    angular.bootstrap(document, ['app']);
});