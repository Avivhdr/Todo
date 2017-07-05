(function () {
    angular.module('myApp')
        .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/lists");
        $stateProvider
            .state('lists', {
                url: "/lists",
                template: '<main-lists></main-lists>'
            })
            .state('lists.list', {
                url: '/{listId}',
                template: '<curr-list ></curr-list>'
            })
            .state('block', {
                url: "/block",
                template: '<multi-view></multi-view>'
            })
    })
})
();
