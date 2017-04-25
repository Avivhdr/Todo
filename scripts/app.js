(function () {
    // console.log('angular', angular);

    // angular.module("app", [])
    //
    //     .factory('todosService', function() {
    //         var todos = {
    //             'shoping list': [{
    //                 id: 1,
    //                 title: 'milk',
    //                 completed: false,
    //                 details: ''
    //             }, {
    //                 id: 2,
    //                 title: 'bread',
    //                 completed: false,
    //                 details: ''
    //             }, ],
    //             'general list': [{
    //                 id: 3,
    //                 title: 'fix phone',
    //                 completed: false,
    //                 details: ''
    //             }, {
    //                 id: 4,
    //                 title: 'fix tv',
    //                 completed: false,
    //                 details: ''
    //             }]
    //         };
    //         var currList = Object.keys(todos).length > 0 ? Object.keys(todos)[0] : [];
    //         var currTodo = {
    //             currList: '',
    //             index: undefined
    //         }
    //         return {
    //
    //             getTodos: function() {
    //                 return todos;
    //             },
    //
    //             setNewList: function(newList) {
    //                 todos[newList] = [];
    //                 console.log('new list added:', todos);
    //             },
    //
    //             setNewTodo: function(newTodoObj, currList) {
    //                 todos[currList].push(newTodoObj);
    //                 console.log(todos[currList]);
    //             },
    //
    //             getCurrList: function() {
    //                 console.log('got currList : ', currList);
    //                 return currList;
    //             },
    //
    //             setCurrList: function(list) {
    //                 currList = [list];
    //                 console.log('set currList to: ', currList);
    //
    //             },
    //
    //             CompleteTodo: function(todoId) {
    //
    //             },
    //             setCurrTodo: function(currList, id) {
    //                 currTodo = {
    //                     currList: currList,
    //                     id: id
    //                 }
    //                 console.log('set CurrTodo: ' + currList + '-' + id);
    //
    //             },
    //
    //             getCurrTodo: function() {
    //                 return currTodo;
    //             }
    //         }
    //     })
    //
    //     .controller("listsController", function($scope, todosService) {
    //         $scope.newList = '';
    //
    //         $scope.todos = todosService.getTodos();
    //
    //         $scope.addNewList = function(newList) {
    //             todosService.setNewList(newList);
    //             todosService.setCurrList(newList);
    //         }
    //
    //         $scope.openList = function(listName) {
    //             todosService.setCurrList(listName);
    //         }
    //
    //     })
    //
    //     .controller("currListController", function($scope, todosService) {
    //         $scope.newTodo = '';
    //
    //         $scope.todos = todosService.getTodos();
    //         $scope.currList = todosService.getCurrList();
    //         //open todo details
    //         $scope.viewTodo = function(currList, id) {
    //             console.log('currList:', currList);
    //             console.log('id:', id);
    //             todosService.setCurrTodo(currList, id);
    //         }
    //
    //         $scope.CompleteTodo = function(currList, todoId) {
    //             console.log('todo id: ', todoId);
    //             todosService.CompleteTodo(todoId);
    //         }
    //
    //         $scope.addNewTodo = function(currList, newTodo) {
    //             var newTodoObj = {
    //                 id: Date.now(),
    //                 title: newTodo,
    //                 completed: false,
    //                 details: ''
    //             };
    //             todosService.setNewTodo(newTodoObj, currList);
    //         };
    //         //todo: restart place holder;
    //     })
    //     .controller('todoController', function($scope, todosService) {
    //         $scope.todos = todosService.getTodos();
    //
    //
    //     })
})();