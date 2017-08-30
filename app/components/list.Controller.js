(function () {
    angular
        .module('myApp')
        .controller("ListController", ListController)
        .directive('list', listDirective);


    function listDirective() {
        return {
            restrict: 'E',
            templateUrl: './app/components/list.html',
            controller: 'ListController',
            controllerAs: 'ctrl',
            link: listLink
        }
    }

    ListController.$inject = ['editTodoModalService', 'localStorageService', 'todoItemConstructor', 'newTitleModalService', 'utilService', '$state', '$stateParams'];

    function ListController(editTodoModalService, localStorageService, todoItemConstructor, newTitleModalService, utilService, $state, $stateParams) {
        var ctrl = this;
        ctrl.newTodo = '';
        ctrl.listId = Number($stateParams.listId);
        ctrl.userLists = localStorageService.getStorageSync('lists');
        ctrl.currList = utilService.getItemFromArrayById(ctrl.userLists, ctrl.listId);
        ctrl.addNewTodo = addNewTodo;
        ctrl.completeTodo = completeTodo;
        ctrl.openEditTodoModal = openEditTodoModal;
        ctrl.deleteTodo = deleteTodo;
        ctrl.renameList = renameList;
        ctrl.deleteList = deleteList;

        //////////



        function addNewTodo(todoTitle) {
            if (todoTitle !== '') {
                var newTodoObj = new todoItemConstructor.Todo(todoTitle);
                ctrl.userLists.forEach(function (list) {
                    if (list.id === ctrl.listId) {
                        list.todos.push(newTodoObj)
                    }
                });
                ctrl.userLists = localStorageService.populateStorage('lists', ctrl.userLists);
                ctrl.currList = utilService.getItemFromArrayById(ctrl.userLists, ctrl.listId);
                ctrl.newTodo = '';
            }
        }

        function completeTodo() {
            ctrl.userLists = localStorageService.populateStorage('lists', ctrl.userLists);
            ctrl.currList = utilService.getItemFromArrayById(ctrl.userLists, Number($stateParams.listId));
        }

        function openEditTodoModal(todoObj) {
            editTodoModalService.editTodoModal(todoObj, handleEditedTodo);
        }

        function handleEditedTodo(todoObj) {
            var listIndex = utilService.returnIndexFromItemId(ctrl.userLists, todoObj.firstListId);
            var todoIndex = utilService.returnIndexFromItemId(ctrl.currList.todos, todoObj.todo.id);
            switch (todoObj.operation) {
                case 'delete':
                    ctrl.userLists[listIndex].todos.splice(todoIndex, 1);
                    break;
                case 'save':
                    ctrl.userLists[listIndex].todos.splice(todoIndex, 1, todoObj.todo);
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

        function deleteList() {
            var listIndex = ctrl.userLists.findIndex(function (list) {
                return list.id === ctrl.currList.id
            });
            ctrl.userLists.splice(listIndex, 1);
            ctrl.userLists = localStorageService.populateStorage('lists', ctrl.userLists);
            $state.go('^', {}, {reload: true});
        }
    }

    function listLink(scope, iElement, iAttrs, ctrl) {
        $('#' + ctrl.listId).addClass("active");
        scope.$on('$destroy', function () {
            $('#' + ctrl.listId).removeClass("active");
        });

    }

})();

