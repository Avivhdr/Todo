(function () {
    angular.module("app", ['YuriService'])


        .controller("listsController", function(todosService) {
            var ctrl = this;
            ctrl.newList = '';
            ctrl.todos = todosService.getTodos();
            ctrl.addNewList = todosService.addNewList.bind(ctrl);

            ctrl.setCurrentList = todosService.setCurrList;

        })

        .controller("currListController", function($scope, todosService) {
            $scope.newTodo = '';

            $scope.todos = todosService.getTodos();
            $scope.currList = todosService.getCurrList();
            //open todo details
            // $scope.viewTodo = function(currList, id) {
            //     console.log('currList:', currList);
            //     console.log('id:', id);
            //     todosService.setCurrTodo(currList, id);
            // }
            //
            // $scope.CompleteTodo = function(currList, todoId) {
            //     console.log('todo id: ', todoId);
            //     todosService.CompleteTodo(todoId);
            // }
            //
            // $scope.addNewTodo = function(currList, newTodo) {
            //     var newTodoObj = {
            //         id: Date.now(),
            //         title: newTodo,
            //         completed: false,
            //         details: ''
            //     };
            //     todosService.setNewTodo(newTodoObj, currList);
            // };
            //todo: restart place holder;
        })
        .controller('todoController', function($scope, todosService) {
            $scope.todos = todosService.getTodos();
        })

        .directive('todoList', function () {
            return {
                restrict: 'E',
                templateUrl: './views/main/main.html',
                controller: 'listsController',
                controllerAs: 'ctrl'
            }
        })
})();