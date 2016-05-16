/**
 * Created by Taehyun on 2016-05-16.
 */

routes.$inject = ['$routeProvider'];

function routes($routeProvider) {
    $routeProvider
        .when('/sample', {
            templateUrl: 'html/sample.html',
            controller: require('./ctrl/SampleCtrl')
        })
        .otherwise('/sample');
}

module.exports = routes;