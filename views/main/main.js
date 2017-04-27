(function() {
    angular.module("app", ['dataService','ui.router'])
        .config(function ($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise("/home");
            $stateProvider
                .state('home', {
                    url: "/home",
                    template: '<todo-lists></todo-lists>'
                })
                .state('home.list', {
                    url: "/{listName}",
                    template: '<curr-list></curr-list>'
                })
                .state('home.list.todo', {
                    url: "/{todoId}",
                    template: '<div>todo template</div>'
            })

        })
    .controller('listsController', function(todosService) {
        var ctrl = this;
        ctrl.newList = '';
        ctrl.todos = todosService.getTodos();
        ctrl.addNewList = todosService.addNewList.bind(ctrl);
        ctrl.setCurrList = todosService.setCurrList;

    })
    .directive('todoLists', function() {
        return {
             restrict: 'E',
             templateUrl: './views/main/main.html',
             controller: 'listsController',
             controllerAs: 'ctrl'
            }
        })
    .controller("currListController", function(todosService,$stateParams) {
        var ctrl2 = this; //will not work without this line
        ctrl2.currList = todosService.getCurrList();
        ctrl2.newTodo = '';

        ctrl2.todos = todosService.getTodos();

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

        ctrl2.completeTodo = todosService.completeTodo;


    })
    .directive('currList', function() {
            return {
                restrict: 'E',
                templateUrl: './views/main/currList.html',
                controller: 'currListController',
                controllerAs: 'ctrl2'

        }
    })
    // .controller('currTo')
})();
