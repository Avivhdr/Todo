(function () {
    angular.module('myApp')

        .controller('multiViewController', function (localStorageService, currListAndMultiViewService, editTodoModalService, newTitleModalService, utilService) {
            var ctrl = this;
            ctrl.newTodo = [];
            ctrl.userLists = localStorageService.getStorageSync('lists');

            ctrl.addNewTodo = function (todoTitle, listIndex) {
                if (todoTitle !== '') {
                    var newTodoObj = new currListAndMultiViewService.Todo(todoTitle);
                    ctrl.userLists[listIndex].todos.push(newTodoObj);
                    ctrl.userLists = localStorageService.populateStorage('lists', ctrl.userLists);
                    ctrl.newTodo = [];
                }
            };

            ctrl.completeTodo = function () {
                ctrl.userLists = localStorageService.populateStorage('lists', ctrl.userLists);
            };

            ctrl.openEditTodoModal = function (todoObj) {
                todoObj.cb = ctrl.handleEditedTodo;
                editTodoModalService.editTodoModal(todoObj);
            };

            ctrl.handleEditedTodo = function (todoObj) {
                var listIndex = utilService.returnIndexFromItemId(ctrl.userLists, todoObj.currListId);
                var todoIndex = utilService.returnIndexFromItemId(ctrl.userLists[listIndex].todos, todoObj.todo.id);
                switch (todoObj.operation) {
                    case 'delete':
                        ctrl.userLists[listIndex].todos.splice(todoIndex, 1);
                        break;
                    case 'save':
                        ctrl.userLists[listIndex].todos.splice(todoIndex, 1, todoObj.todo);//edit
                        break;
                }
                ctrl.userLists = localStorageService.populateStorage('lists', ctrl.userLists);
            };

            ctrl.renameList = function (newTitleObj) {
                if (utilService.doesItemTitleExists(ctrl.userLists, newTitleObj.newListTitle)) {
                    newTitleObj.cb = ctrl.renameList;
                    newTitleModalService.inputNewTitleModal(newTitleObj);

                } else {
                    newTitleObj.listIndex = ctrl.userLists.findIndex(function (list) {
                        return list.id === newTitleObj.listId
                    });
                    ctrl.userLists[newTitleObj.listIndex].title = newTitleObj.newListTitle;
                    ctrl.userLists = localStorageService.populateStorage('lists', ctrl.userLists);
                }
            };

            ctrl.deleteList = function (listId) {
                var listIndex = ctrl.userLists.findIndex(function (list) {
                    return list.id === listId
                });
                ctrl.userLists.splice(listIndex, 1);
                ctrl.userLists = localStorageService.populateStorage('lists', ctrl.userLists);
            };
        })

        .directive('multiView', function () {
            return {
                restrict: 'E',
                templateUrl: "./views/multiView/multiView.html",
                controller: 'multiViewController',
                controllerAs: 'ctrl'
            }
        })
})
();