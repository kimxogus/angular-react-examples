/**
 * Created by kimxogus on 2016-05-10.
 */

'use strict';

requirejs.config({
    baseUrl: 'js',      // Base URL for js files. If you call require('app'), 'js/app.js' will be loaded.
    map: {
        '*': {
            css: '../css'   // To load css files using requirejs. refer to require-css
        }
    },
    paths:{             // define some paths. If you call require('react'), 'js/../lib/react/react.min.js' will be loaded
        'react'                 : '../lib/react/react.min',
        'react-dom'             : '../lib/react/react-dom.min',
        'angular'               : '../lib/angular/angular.min',
        'ngReact'               : '../lib/ngReact/ngReact.min'
    },
    shim:{              // define dependencies or exort variables.
        'react-dom'         : {deps: ['react']},    // react will be loaded before react-dom
        'angular'       	: {exports: 'angular'}, // value 'angular' from angularjs will be exported and can be called by requirejs
        'ngReact'           : {deps: ['angular', 'react', 'react-dom']}
    }
});

require([
    'angular', 'app', 'ctrl/SampleCtrl', 'css!css/style'    // define prerequisite modules have to be loaded before following script
], function(angular){                                      // exported angular variable is called
    angular.bootstrap(document, ['app']);                   // script after loading modules
});