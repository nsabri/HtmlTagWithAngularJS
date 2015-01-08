(function () {

    var app = angular.module('myTagModuleName', []);

    app.directive('myTag', function () {
        return {
            restrict: 'E',
            templateUrl: 'myPage.html'
        };
    });

})();


