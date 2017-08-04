(function () {
    angular
        .module('myApp')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/main");

        var mainState = {
            url: "/main",
            template: '<main></main>'
        };

        var listState = {
            url: '/{listId}',
            template: '<list ></list>'
        };

        var multiViewState = {
            url: "/multi-View",
            template: '<multi-view></multi-view>'
        };

        var testState = {
            url: "/test",
            template: '<test></test>'
        };

        $stateProvider
            .state('main', mainState)
            .state('main.list', listState)
            .state('multiView', multiViewState)
            .state('test', testState)
    }

})();
