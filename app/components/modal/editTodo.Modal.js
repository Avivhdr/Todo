(function () {
    angular.module('myApp')
        .controller('EditTodoModalController', EditTodoModalController)
        .factory('editTodoModalService', function ($uibModal) {

            function editTodoModal(todoObj, cb) {
                var modalInstance = $uibModal.open({
                    restrict: "E",
                    templateUrl: './app/components/modal/editTodo.Modal.html',
                    controller: 'EditTodoModalController',
                    controllerAs: 'ctrl',
                    resolve: {
                        todoObj: function () {
                            return angular.copy(todoObj);
                        },
                        cb: function () {
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
        });

    EditTodoModalController.$inject = ['$scope', '$uibModalInstance', 'todoObj', 'cb'];

    function EditTodoModalController($scope, $uibModalInstance, todoObj, cb) {

        var ctrl = this;
        ctrl.todoObj = todoObj;
        ctrl.todoObj.cb = cb;

        // date & time picker
        {
            $scope.dt = (ctrl.todoObj.todo.dueDate)? new Date(ctrl.todoObj.todo.dueDate) : null;

            $scope.open = function() {
                $scope.status.opened = true;
            };

            $scope.status = {
                opened: false
            };

            $scope.getDayClass = function(date, mode) {
                if (mode === 'day') {
                    var dayToCheck = new Date(date).setHours(0,0,0,0);

                    for (var i=0;i<$scope.events.length;i++){
                        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

                        if (dayToCheck === currentDay) {
                            return $scope.events[i].status;
                        }
                    }
                }
                return '';
            };
        }

        ctrl.select = function (e) {
            e.target.setSelectionRange(0, e.target.value.length);
        };

        ctrl.deleteTodo = function () {
            ctrl.todoObj.operation = 'delete';
            $uibModalInstance.close(ctrl.todoObj);
        };

        ctrl.save = function () {
            ctrl.todoObj.todo.dueDate = $scope.dt;
            ctrl.todoObj.operation = 'save';
            $uibModalInstance.close(ctrl.todoObj);
        };

        ctrl.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }

})();