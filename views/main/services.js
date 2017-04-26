(function () {
    angular.module('YuriService', ['ui.router'])
        .factory('todosService', function() {
            var todos = {
                'shoping list': [{
                    id: 1,
                    title: 'milk',
                    completed: false,
                    details: ''
                }, {
                    id: 2,
                    title: 'bread',
                    completed: false,
                    details: ''
                }, ],
                'general list': [{
                    id: 3,
                    title: 'fix phone',
                    completed: false,
                    details: ''
                }, {
                    id: 4,
                    title: 'fix tv',
                    completed: false,
                    details: ''
                }]
            };
            var currList = Object.keys(todos).length > 0 ? Object.keys(todos)[0] : [];
            var currTodo = {
                currList: '',
                index: undefined
            };

            function getTodos() {
                return todos;
            }

            function setNewList(newList) {
                todos[newList] = [];
                console.log('new list added:', todos);
            }

            function setNewTodo(newTodoObj, currList) {
                todos[currList].push(newTodoObj);
                console.log(todos[currList]);
            }

            function getCurrList() {
                return currList;
            }

            function setCurrList(list) {
                currList = [list];
            }

            function setCurrTodo(currList, id) {
                currTodo = {
                    currList: currList,
                    id: id
                };
            }

            function getCurrTodo() {
                return currTodo;
            }

            function addNewList(newList) {
                setNewList(newList);
                setCurrList(newList);
                this.newList = '';
            }

            return {
                getTodos: getTodos,
                // setNewList: setNewList,
                setNewTodo: setNewTodo,
                getCurrList: getCurrList,
                setCurrList: setCurrList,
                // setCurrTodo: setCurrTodo,
                getCurrTodo: getCurrTodo,
                addNewList: addNewList,
                currList: currList
            }
        })
})();