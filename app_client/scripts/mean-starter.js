(function() {
    angular.module('meanStarter', []);

    angular.module('meanStarter')

    .controller('AppController', ['$scope', function($scope) {
        $scope.msg = 'Hello';
    }]);
})()
