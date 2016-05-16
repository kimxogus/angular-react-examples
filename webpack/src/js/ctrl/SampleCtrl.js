/**
 * Created by kimxogus on 2016-05-10.
 */

var app = global.app; // require('../app') also works.

function SampleController($scope) {
    $scope.header = {name: "World"};
    $scope.form = {
        name: $scope.header.name,
        onClick: function(name) {
            $scope.header.name = name;
        }
    };
}

SampleController.$inject = ['$scope'];

app.controller('sampleCtrl', SampleController);

module.exports = SampleController;