(function () {
    angular.module('myApp')
        .factory('editTodoModalService', function ($uibModal) {

            function editTodoModal(todoObj,cb) {
                var modalInstance = $uibModal.open({
                    restrict: "E",
                    templateUrl: './app/components/modal/editTodo.Modal.html',
                    controller: 'EditTodoModalController',
                    controllerAs: 'ctrl',
                    resolve: {
                        todoObj: function () {
                            return angular.copy(todoObj);
                        },
                        cb: function (){
                            return cb
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

        .controller('EditTodoModalController', function (localStorageService, utilService, $uibModalInstance, todoObj, cb) {
            var ctrl = this;
            ctrl.todoObj = todoObj;
            ctrl.todoObj.cb = cb;

            ctrl.deleteTodo = function () {
                ctrl.todoObj.operation = 'delete';
                $uibModalInstance.close(ctrl.todoObj);
            };

            ctrl.save = function () {
                ctrl.todoObj.operation = 'save';
                $uibModalInstance.close(ctrl.todoObj);
            };

            ctrl.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        })
})();