(function() {
    angular.module("app", ['dataService','ui.router'])
        .config(function ($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise("/");
            $stateProvider
                .state('list.details', {
                    url: "/:currList",
                    templateUrl: './views/main/currList.html',
                    controller: 'currListController',
                    })
        })
    .controller('listsController', function(todosService) {
        var ctrl = this;
        ctrl.newList = '';
        ctrl.todos = todosService.getTodos();
        ctrl.addNewList = todosService.addNewList.bind(ctrl);
        ctrl.setCurrList = todosService.setCurrList;

    })
    .controller("currListController", function(todosService,$stateParams) {

        todosService.setCurrList($stateParams.currList);
        var ctrl2 = this; //will not work without this line
        ctrl2.newTodo = '';

        ctrl2.todos = todosService.getTodos();
        ctrl2.currList = todosService.currList;

        ctrl2.addNewTodo = function(newTodo) {
            var newTodoObj = {
                id: Date.now(),
                title: newTodo,
                completed: false,
                details: ''
            };
            todosService.setNewTodo(newTodoObj);
        };

        ctrl2.setCurrTodo = todosService.setCurrTodo;

        ctrl2.CompleteTodo = todosService.CompleteTodo;

    })
    .directive('todoLists', function() {
            return {
                restrict: 'E',
                templateUrl: './views/main/main.html',
                controller: 'listsController',
                controllerAs: 'ctrl'
            }
    })
    .directive('currList', function() {
            return {
                restrict: 'E',
                templateUrl: './views/main/currList.html',
                controller: 'currListController',
                controllerAs: 'ctrl2'

        }
    })
})();
