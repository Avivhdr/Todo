(function () {
    angular.module("app", ['Service', 'ui.router', "ui.bootstrap",'ngAnimate', 'ngTouch', 'ngSanitize'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/lists");
            $stateProvider
                .state('lists', {
                    url: "/lists",
                    template: '<todo-lists></todo-lists>'
                })
                .state('lists.list', {
                    url: '/{listId}',
                    template: '<curr-list ></curr-list>'
                })
                .state('block', {
                    url: "/block",
                    template: '<block-lists></block-lists>'
                })
        })

        .controller('listsController', function (localStorageService, modalService, utilService, $state) {
            var ctrl = this;
            ctrl.newTitle = '';
            localStorageService.initLocalStorage('lists');
            ctrl.userLists = localStorageService.getStorageSync('lists');

            ctrl.openList = function (listId) {
                $state.go('lists.list',{listId: listId});
            };
            ctrl.addNewList = function (data) {
                if (!data.newTitle) return;//todo: html validation
                if (utilService.doesItemTitleExists(ctrl.userLists, data.newTitle) !== -1) {
                    modalService.inputNewTitleModal({
                        cb: ctrl.addNewList,
                        newTitle: data.newTitle
                    });
                } else {
                    var newListObj = new utilService.List(data.newTitle);
                    //copy the array and manipulate the new array
                    ctrl.userLists.push(newListObj);
                    ctrl.userLists = localStorageService.populateStorage('lists', ctrl.userLists);
                    ctrl.newTitle = '';
                }
            };
            ctrl.renameList = function (data) {
                if (utilService.doesItemTitleExists(ctrl.userLists, data.newTitle) !== -1) {
                    modalService.inputNewTitleModal({
                        cb: ctrl.renameList,
                        newTitle: data.newTitle,
                        listId: data.listId,
                        listIndex: data.listIndex
                    });
                } else {
                    ctrl.userLists[data.listIndex].title = data.newTitle;
                    ctrl.userLists = localStorageService.populateStorage('lists', ctrl.userLists);
                }
            };
            ctrl.deleteList = function (list, listIndex) {
                ctrl.userLists.splice(listIndex, 1);
                ctrl.userLists = localStorageService.populateStorage('lists', ctrl.userLists);
                $state.go('lists');
            };

        })
        .directive('todoLists', function () {
            return {
                replace: true, //todo
                restrict: 'E',
                templateUrl: './views/mainLists.html',
                controller: 'listsController',
                controllerAs: 'ctrl'
            }
        })

        .controller("currListViewController", function (localStorageService, utilService, modalService, $log, $stateParams, $uibModal, $state) {
            var ctrl = this;
            ctrl.newTodo = '';
            ctrl.userLists = localStorageService.getStorageSync('lists');
            ctrl.currList = utilService.getItemFromArrayById(ctrl.userLists, Number($stateParams.listId));
            ctrl.renameList = function (data) {
                data.listIndex = ctrl.userLists.findIndex(function(list){
                    return list.id === data.listId
                });
                if (utilService.doesItemTitleExists(ctrl.userLists, data.newTitle) !== -1) {
                    modalService.inputNewTitleModal({
                        cb: ctrl.renameList,
                        newTitle: data.newTitle,
                        listId: data.listId,
                        listIndex: data.listIndex
                    });
                } else {
                    ctrl.userLists[data.listIndex].title = data.newTitle;
                    ctrl.userLists = localStorageService.populateStorage('lists', ctrl.userLists);
                }
            };
            ctrl.deleteList = function () {
                var listIndex = ctrl.userLists.findIndex(function(list){
                    return list.id === ctrl.currList.id
                });
                ctrl.userLists.splice(listIndex, 1);
                ctrl.userLists = localStorageService.populateStorage('lists', ctrl.userLists);
                $state.go('^');
            };

            ctrl.addNewTodo = function (todoTitle) {
                if (todoTitle !== '') {
                    var newTodoObj = new utilService.Todo(todoTitle);
                    ctrl.userLists.forEach(function (list) {//couldn't do with map
                        if (list.id === Number($stateParams.listId)) {
                            list.todos.push(newTodoObj)
                        }
                    });
                    ctrl.userLists = localStorageService.populateStorage('lists', ctrl.userLists);
                    ctrl.currList = utilService.getItemFromArrayById(ctrl.userLists, Number($stateParams.listId));
                    ctrl.newTodo = '';
                }
            };
            ctrl.completeTodo = function () {
                ctrl.userLists = localStorageService.populateStorage('lists', ctrl.userLists);
            };
            ctrl.editTodo = function (todo, todoIndex) {
                var modalInstance = $uibModal.open({
                    templateUrl: './views/modal/currTodoModal.html',
                    controller: 'currTodoModalController',
                    controllerAs: 'ctrl',
                    resolve: {
                        data: function () {
                            return {
                                todo: todo,
                                todoIndex: todoIndex,
                                userLists: ctrl.userLists,
                                currListId: ctrl.currList.id
                            }
                        }
                    }
                });

                modalInstance.result.then(function (editedTodo) {
                    if (editedTodo) {
                        var listIndex = utilService.returnIndexFromItemId(ctrl.userLists, ctrl.currList.id);
                        ctrl.userLists[listIndex].todos.splice(todoIndex, 1, editedTodo);
                        ctrl.userLists = localStorageService.populateStorage('lists', ctrl.userLists);
                        ctrl.currList = utilService.getItemFromArrayById(ctrl.userLists, ctrl.currList.id);
                    }
                }, function (reason) {
                    console.log(reason + ': Modal dismissed at: ' + new Date());
                });

            }
        })
        .directive('currList', function () {
            return {
                restrict: 'E',
                templateUrl: './views/currList.html',
                controller: 'currListViewController',
                controllerAs: 'ctrl'
            }
        })

        .controller('blockListsController', function (localStorageService, modalService, utilService, $uibModal) {
            var ctrl = this;
            ctrl.newTodo = [];
            ctrl.userLists = localStorageService.getStorageSync('lists');

            ctrl.addNewTodo = function (todoTitle, listIndex) {
                if (todoTitle !== '') {
                    var newTodoObj = new utilService.Todo(todoTitle);
                    ctrl.userLists[listIndex].todos.push(newTodoObj);
                    ctrl.userLists = localStorageService.populateStorage('lists', ctrl.userLists);
                    ctrl.newTodo = [];
                }
            };
            ctrl.completeTodo = function () {
                ctrl.userLists = localStorageService.populateStorage('lists', ctrl.userLists);
            };
            ctrl.editTodo = function (todo, todoIndex, currListIndex) {
                var currListId = ctrl.userLists[currListIndex].id;
                var modalInstance = $uibModal.open({
                    templateUrl: './views/modal/currTodoModal.html',
                    controller: 'currTodoModalController',
                    controllerAs: 'ctrl',
                    resolve: {
                        data: function () {
                            return {
                                todo: todo,
                                todoIndex: todoIndex,
                                userLists: ctrl.userLists,
                                currListId: currListId
                            }
                        }
                    }
                });

                modalInstance.result.then(function (editedTodo) {
                    ctrl.userLists[currListIndex].todos.splice(todoIndex, 1, editedTodo);
                    ctrl.userLists = localStorageService.populateStorage('lists', ctrl.userLists);
                }, function (reason) {
                    console.log(reason + ': Modal dismissed at: ' + new Date());

                })
            };

            ctrl.renameList = function (data) {
                data.listIndex = ctrl.userLists.findIndex(function(list){
                    return list.id === data.listId
                });
                if (utilService.doesItemTitleExists(ctrl.userLists, data.newTitle) !== -1) {
                    modalService.inputNewTitleModal({
                        cb: ctrl.renameList,
                        newTitle: data.newTitle,
                        listId: data.listId,
                        listIndex: data.listIndex
                    });
                } else {
                    ctrl.userLists[data.listIndex].title = data.newTitle;
                    ctrl.userLists = localStorageService.populateStorage('lists', ctrl.userLists);
                }
            };
            ctrl.deleteList = function (listId) {
                var listIndex = ctrl.userLists.findIndex(function(list){
                    return list.id === listId
                });
                ctrl.userLists.splice(listIndex, 1);
                ctrl.userLists = localStorageService.populateStorage('lists', ctrl.userLists);
            };
        })
        .directive('blockLists', function () {
            return {
                restrict: 'E',
                templateUrl: "./views/blockLists.html",
                controller: 'blockListsController',
                controllerAs: 'ctrl'
            }
        })

        .controller('currTodoModalController', function (localStorageService, utilService, $uibModalInstance, data) {
            var ctrl = this;
            ctrl.tempTodo = angular.fromJson(angular.toJson(data.todo));

            ctrl.deleteTodo = function () {
                var listIndex = utilService.returnIndexFromItemId(data.userLists, data.currListId);
                data.userLists[listIndex].todos.splice(data.todoIndex, 1);
                data.userLists = localStorageService.populateStorage('lists', data.userLists);
                $uibModalInstance.close();
            };

            ctrl.save = function () {
                $uibModalInstance.close(ctrl.tempTodo);
            };

            ctrl.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        })
        .directive('currTodo', function () {
            return {
                restrict: 'E',
                templateUrl: "./views/modal/currTodo.html",
                controller: 'currTodoController',
                controllerAs: 'ctrl'
            }
        })

        .controller('InputNewTitleModalController', function ($uibModalInstance, data) {
            var ctrl = this;
            ctrl.data = data;
            ctrl.save = function () {
                $uibModalInstance.close(data);
            };

            ctrl.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        })

        .controller('AppCtrl', function ($scope) {
            $scope.currentNavItem = 'page1';
        })

        .controller('DropdownCtrl', function ($scope, $log) {
            $scope.items = [
                'The first choice!',
                'And another choice for you.',
                'but wait! A third!'
            ];

            $scope.status = {
                isopen: false
            };

            $scope.toggled = function(open) {
                $log.log('Dropdown is now: ', open);
            };

            $scope.toggleDropdown = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.status.isopen = !$scope.status.isopen;
            };

            $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
        });

})
();
