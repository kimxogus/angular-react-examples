/**
 * Created by kimxogus on 2016-05-10.
 */

'use strict';
define(['app', '../component/Header', '../component/Form'], function(app) {
    app.controller("SampleCtrl", ["$scope", function($scope) {
        $scope.header = {name: "World"};
        $scope.form = {
            name: $scope.header.name,
            onClick: function(name) {
                $scope.header.name = name;
            }
        };
    }]);
});