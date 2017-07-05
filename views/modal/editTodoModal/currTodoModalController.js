(function () {
    angular.module('myApp')

        .factory('editTodoModalService', function ($uibModal) {

            function editTodoModal(todoObj) {
                var modalInstance = $uibModal.open({
                    restrict: "E",
                    templateUrl: './views/modal/editTodoModal/currTodoModal.html',
                    controller: 'currTodoModalController',
                    controllerAs: 'ctrl',
                    resolve: {
                        todoObj: function () {
                            return todoObj;
                        }
                    }
                });

                modalInstance.result
                    .then(function (result) {
                        result.cb(result);
                    })
                    .catch(handleError);

                function handleError(err) {
                    console.log(err);
                }
            }

            return {
                editTodoModal: editTodoModal
            }
        })

        .controller('currTodoModalController', function (localStorageService, utilService, $uibModalInstance, todoObj) {
            var ctrl = this;
            ctrl.tempTodo = angular.fromJson(angular.toJson(todoObj.todo));
            ctrl.todoObj = todoObj;

            ctrl.deleteTodo = function () {
                ctrl.todoObj.todo = ctrl.tempTodo;
                ctrl.todoObj.operation = 'delete';
                $uibModalInstance.close(ctrl.todoObj);
            };

            ctrl.save = function () {
                ctrl.todoObj.todo = ctrl.tempTodo;
                ctrl.todoObj.operation = 'save';
                $uibModalInstance.close(ctrl.todoObj);
            };

            ctrl.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        })
})();