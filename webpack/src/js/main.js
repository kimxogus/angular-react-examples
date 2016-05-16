/**
 * Created by Taehyun on 2016-05-16.
 */

var 
    angular = require('angular'),
    app     = require('./app');

/**
 * Load 'component/index.js'
 * Component scripts are executed and registered as value in angular app,
 * which means that we can use these components in react-component directive.
 */
require('./component');

// bind app to document when ready
angular.element(document).ready(function(){
    angular.bootstrap(document, ['app']);
});