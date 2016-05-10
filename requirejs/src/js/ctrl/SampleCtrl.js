/**
 * Created by kimxogus on 2016-05-10.
 */

'use strict';
define(['app', '../component/Header'], function(app) {
    app.controller("SampleCtrl", ["$scope", function($scope) {
        $scope.header = {name: "World"};
    }]);
});