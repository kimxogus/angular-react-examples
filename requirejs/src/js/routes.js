'use strict';

define(['app', 'routeResolver'], function(app, routeResolver){
    app.config(['$routeProvider', function($routeProvider){

        $routeProvider.when('/sample', routeResolver(
                'html/sample.html',
                ['ctrl/SampleCtrl']
            ))
            .otherwise({
                redirectTo: '/sample'
            });
    }]);
});