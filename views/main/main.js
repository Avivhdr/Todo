(function() {
    angular.module("app", ['dataService'])

    .controller('listsController', function(todosService) {
        console.log('main up');
        var ctrl = this;
        ctrl.newList = '';
        ctrl.todos = todosService.getTodos();
        ctrl.addNewList = todosService.addNewList.bind(ctrl);

        ctrl.setCurrentList = todosService.setCurrList;

    })

    .controller("currListController", function(todosService) {
        ctrl.newTodo = '';

        ctrl.todos = todosService.getTodos();
        ctrl.currList = todosService.currList;

        ctrl.addNewTodo = function(newTodo) {
            var newTodoObj = {
                id: Date.now(),
                title: newTodo,
                completed: false,
                details: ''
            };
            todosService.setNewTodo(newTodoObj);
        };

        $scope.setCurrTodo = function(index) {
            console.log('currList:', currList);
            console.log('index:', index);
            todosService.setCurrTodo(index);
        }

        ctrl.CompleteTodo = function(index) {
            console.log('todo index: ', todoindex);
            todosService.CompleteTodo(index);
        };

    })

    // .controller('todoController', function($scope, todosService) {
    //     $scope.todos = todosService.getTodos();
    // })

    .directive('todoLists', function() {
            return {
                restrict: 'E',
                templateUrl: '/main.html',
                controller: 'listsController',
                controllerAs: 'ctrl'
            }
        })
        .directive('currList', function() {
            return {
                restrict: 'E',
                templateUrl: './currList.html',
                controller: 'currListController',
                controllerAs: 'ctrl'

            }
        })
})();