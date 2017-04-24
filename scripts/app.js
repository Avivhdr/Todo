angular.module("module1", [])

.controller("listsController", function($scope) {
        // $scope.massage = '';
        $scope.todos = {}
        $scope.newList = '';


        $scope.addNewList = function(newList) {
            $scope.todos[newList] = { 'a': 123, 'b': 654 };
        }

        $scope.openList = function(list) {
            console.log(list);
        }

    })
    .controller("listController", function($scope) {
        // $scope.addNewTodo = function(ntd) {
        //     $scope.todos.push({
        //         id: Date.now(),
        //         title: ntd,
        //         completed: false,
        //         details: ''
        //     })
        //todo: restart place holder; 
    });