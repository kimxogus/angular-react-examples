/**
 * Created by kimxogus on 2016-05-10.
 */

function SampleController($scope) {
    $scope.header = {name: "World"};
}

SampleController.$inject = ['$scope'];

module.exports = SampleController;