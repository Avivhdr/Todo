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
                    template: '<curr-todo></curr-todo>'
            })
    })
    .controller('listsController', function(todosService) {
        var ctrl = this;
        ctrl.newList = '';
        ctrl.todos = todosService.getTodos();
        ctrl.addNewList = todosService.addNewList.bind(ctrl);
        ctrl.setCurrList = todosService.setCurrList;
        ctrl.deleteList = todosService.deleteList;
        ctrl.renameList = todosService.renameList;

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
        var ctrl = this;
        ctrl.newTodo = '';
        console.log('$stateParams', $stateParams);
        todosService.setCurrList($stateParams.listName);
        ctrl.currList =  todosService.getCurrList();
        ctrl.todos = todosService.getTodos();

        ctrl.addNewTodo = function(newTodo) {
            var newDate = new Date();
            var newTodoObj = {
                id: Date.now(),
                title: newTodo,
                completed: false,
                details: '',
                created: newDate.toDateString(),
                daysPassed: 0
            };
            todosService.setNewTodo(newTodoObj);
        };

        // ctrl.setCurrTodo = todosService.setCurrTodo;

        ctrl.completeTodo = todosService.completeTodo;


    })
    .directive('currList', function() {
            return {
                restrict: 'E',
                templateUrl: './views/main/currList.html',
                controller: 'currListController',
                controllerAs: 'ctrl'

        }
    })
    .controller('currTodoController', function(todosService, $stateParams) {
    todosService.setCurrTodo($stateParams);
    var ctrl = this;
    ctrl.todos = todosService.getTodos();
    ctrl.state = todosService.getState();

    })
    .directive('currTodo', function (){
            return{
                restrict: 'E',
                templateUrl: "./views/main/currTodo.html",
                controller: 'currTodoController',
                controllerAs: 'ctrl'
            }
        })
})();
