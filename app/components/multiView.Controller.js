(function () {
    angular
        .module('myApp')
        .controller('MultiViewController', MultiViewController)
        .component('multiView', multiViewComponent());

    function multiViewComponent() {
        return {
            restrict: 'E',
            templateUrl: "./app/components/multiView.html",
            controller: 'MultiViewController',
            controllerAs: 'ctrl'
        }
    }

    MultiViewController.$inject = ['confirmModalService', 'localStorageService', 'todoItemConstructor', 'editTodoModalService', 'newTitleModalService', 'utilService'];

    function MultiViewController(confirmModalService, localStorageService, todoItemConstructor, editTodoModalService, newTitleModalService, utilService) {
        var ctrl = this;
        ctrl.newTodo = [];
        ctrl.userLists = localStorageService.getStorageSync('lists');
        ctrl.addNewTodo = addNewTodo;
        ctrl.completeTodo = completeTodo;
        ctrl.openEditTodoModal = openEditTodoModal;
        ctrl.deleteTodo = deleteTodo;
        ctrl.renameList = renameList;
        ctrl.openConfirmDeleteModal = openConfirmDeleteModal;

        //////////

        function addNewTodo(todoTitle, listIndex) {
            debugger;
            if (todoTitle !== '' && todoTitle !== undefined) {
                var newTodoObj = new todoItemConstructor.Todo(todoTitle);
                ctrl.userLists[listIndex].todos.push(newTodoObj);
                ctrl.userLists = localStorageService.populateStorage('lists', ctrl.userLists);
                ctrl.newTodo = [];
            }
        }

        function completeTodo() {
            ctrl.userLists = localStorageService.populateStorage('lists', ctrl.userLists);
        }

        function openEditTodoModal(todoObj) {
            editTodoModalService.editTodoModal(todoObj, handleEditedTodo);
        }

        function handleEditedTodo(todoObj) {
            var listIndex = utilService.returnIndexFromItemId(ctrl.userLists, todoObj.firstListId);
            var todoIndex = utilService.returnIndexFromItemId(ctrl.userLists[listIndex].todos, todoObj.todo.id);
            switch (todoObj.operation) {
                case 'delete':
                    ctrl.userLists[listIndex].todos.splice(todoIndex, 1);
                    break;
                case 'save':
                    ctrl.userLists[listIndex].todos.splice(todoIndex, 1, todoObj.todo);//edit
                    break;
                default:
                    console.log('default');
            }
                    ctrl.userLists = localStorageService.populateStorage('lists', ctrl.userLists);
                    ctrl.currList = utilService.getItemFromArrayById(ctrl.userLists, ctrl.listId);
        }

        function deleteTodo(todoIndex, listId) {
            var listIndex = utilService.returnIndexFromItemId(ctrl.userLists, listId);
            ctrl.userLists[listIndex].todos.splice(todoIndex, 1);
            ctrl.userLists = localStorageService.populateStorage('lists', ctrl.userLists);
            ctrl.currList = utilService.getItemFromArrayById(ctrl.userLists, ctrl.listId);

        }

        function renameList(newTitleObj) {
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
        }

        function openConfirmDeleteModal(listId) {
            confirmModalService.confirmModal(handleDeleteList, listId);
        }

        function handleDeleteList(listId) {
            var listIndex = ctrl.userLists.findIndex(function (list) {
                return list.id === listId
            });
            ctrl.userLists.splice(listIndex, 1);
            ctrl.userLists = localStorageService.populateStorage('lists', ctrl.userLists);
        }

    }

})();