angular.module("app", [])

.controller("listsController", function($scope, todosService) {
        // $scope.massage = '';
        // $scope.todos = {}
        $scope.newList = '';
        $scope.todos = todosService.todos;

        $scope.addNewList = function(newList) {
            todosService.setNewList(newList)
        }

        $scope.openList = function(list) {
            console.log(list);
        }

    })
    .controller("listController", function($scope, todosService) {
        $scope.newTodo = '';
        // $scope.addNewTodo = function(ntd) {
        //     $scope.todos.push({
        //         id: Date.now(),
        //         title: ntd,
        //         completed: false,
        //         details: ''
        //     })
        //todo: restart place holder; 
    });