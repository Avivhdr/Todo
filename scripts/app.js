angular.module("app", [])

.factory('todosService', function() {
    var todos = {
        'shoping list': {
            'milk': {
                id: Date.now(),
                title: 'milk',
                completed: false,
                details: ''
            },
            'bread': {
                id: Date.now(),
                title: 'bread',
                completed: false,
                details: ''
            },
        },
        'general list': {
            'fix phone': {
                id: Date.now(),
                title: 'fix phone',
                completed: false,
                details: ''
            },
            'fix tv': {
                id: Date.now(),
                title: 'fix tv',
                completed: false,
                details: ''
            },
        }
    };
    var currList = Object.keys(todos).length > 0 ? Object.keys(todos)[0] : [];
    return {

        getCurrList: function() {
            return currList;
        },

        getTodos: function() {
            return todos;
        },

        setNewList: function(newList) {
            todos[newList] = {};
            console.log('new list added:', todos);
        },

        setNewTodo: function(newTodoObj, currList) {
            todos[currList][newTodoObj.title] = newTodoObj;
            console.log(todos[currList]);
        },

        setCurrList: function(list) {
            currList = [list];
            console.log('currList: ', currList);

        }

    }
})

.controller("listsController", function($scope, todosService) {
        $scope.newList = '';

        $scope.todos = todosService.getTodos();
        $scope.currList = todosService.getCurrList();

        $scope.addNewList = function(newList) {
            todosService.setNewList(newList);
        }

        $scope.openList = function(listName) {
            todosService.setCurrList(listName);
            $scope.currList = todosService.getCurrList();
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
    });