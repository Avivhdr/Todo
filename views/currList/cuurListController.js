(function () {
    angular.module('myApp')

        .controller("currListController", function (editTodoModalService, localStorageService, currListAndMultiViewService, newTitleModalService, utilService, $state, $stateParams) {
            var ctrl = this;
            ctrl.newTodo = '';
            ctrl.userLists = localStorageService.getStorageSync('lists');
            ctrl.currList = utilService.getItemFromArrayById(ctrl.userLists, Number($stateParams.listId));

            ctrl.addNewTodo = function (todoTitle) {
                if (todoTitle !== '') {
                    var newTodoObj = new currListAndMultiViewService.Todo(todoTitle);
                    ctrl.userLists.forEach(function (list) {
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
                ctrl.currList = utilService.getItemFromArrayById(ctrl.userLists, Number($stateParams.listId));
            };

            ctrl.openEditTodoModal = function (todoObj) {
                todoObj.cb = ctrl.handleEditedTodo;
                editTodoModalService.editTodoModal(todoObj);
            };

            ctrl.handleEditedTodo = function (todoObj) {
                var listIndex = utilService.returnIndexFromItemId(ctrl.userLists, todoObj.currListId);
                var todoIndex = utilService.returnIndexFromItemId(ctrl.currList.todos, todoObj.todo.id);
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

            ctrl.deleteList = function () {
                var listIndex = ctrl.userLists.findIndex(function (list) {
                    return list.id === ctrl.currList.id
                });
                ctrl.userLists.splice(listIndex, 1);
                ctrl.userLists = localStorageService.populateStorage('lists', ctrl.userLists);
                $state.go('^', {}, {reload: true});
            };

            currListAndMultiViewService.addActiveToListNameButton(ctrl.userLists, Number($stateParams.listId));//todo
        })

        .directive('currList', function () {
            return {
                restrict: 'E',
                templateUrl: './views/currList/currList.html',
                controller: 'currListController',
                controllerAs: 'ctrl'
            }
        });

})();