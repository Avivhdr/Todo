angular.module("app", [])

.factory('todosService', function() {
    var todos = {
        'shoping list': [{
            id: Date.now(),
            title: 'milk',
            completed: false,
            details: ''
        }, {
            id: Date.now(),
            title: 'bread',
            completed: false,
            details: ''
        }, ],
        'general list': [{
            id: Date.now(),
            title: 'fix phone',
            completed: false,
            details: ''
        }, {
            id: Date.now(),
            title: 'fix tv',
            completed: false,
            details: ''
        }]
    };
    var currList = Object.keys(todos).length > 0 ? Object.keys(todos)[0] : [];
    return {

        getTodos: function() {
            return todos;
        },

        setNewList: function(newList) {
            todos[newList] = [];
            console.log('new list added:', todos);
        },

        setNewTodo: function(newTodoObj, currList) {
            todos[currList].push(newTodoObj);
            console.log(todos[currList]);
        },

        getCurrList: function() {
            console.log('got currList : ', currList);
            return currList;
        },

        setCurrList: function(list) {
            currList = [list];
            console.log('set currList to: ', currList);

        }

    }
})

.controller("listsController", function($scope, todosService) {
    $scope.newList = '';

    $scope.todos = todosService.getTodos();

    $scope.addNewList = function(newList) {
        todosService.setNewList(newList);
        todosService.setCurrList(newList);
    }

    $scope.openList = function(listName) {
        todosService.setCurrList(listName);
    }

})

.controller("listController", function($scope, todosService) {
    $scope.newTodo = '';

    $scope.todos = todosService.getTodos();
    $scope.currList = todosService.getCurrList();

    $scope.addNewTodo = function(currList, newTodo) {
        var newTodoObj = {
            id: Date.now(),
            title: newTodo,
            completed: false,
            details: ''
        };
        todosService.setNewTodo(newTodoObj, currList);
    };
    //todo: restart place holder; 
})