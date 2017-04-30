console.log('service up');

(function() {
    angular.module('dataService', [])
        .factory('todosService', function() {
            var todos = {
                'Shoping List': [{
                    id: 1,
                    title: 'milk',
                    completed: false,
                    details: ''
                }, {
                    id: 2,
                    title: 'bread',
                    completed: false,
                    details: ''
                } ],
                'General List': [{
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
                index: 0
            };

            function getTodos() {
                return todos;
            }

            function setNewList(newList) {
                todos[newList] = [];
                console.log('new list added:', todos);
            }

            function getCurrList() {
                return currList[0];
            }

            function setCurrList(list) {
                currList = [list];
            }

            function addNewList(newList) {
                setNewList(newList);
                setCurrList(newList);
                this.newList = '';
            }

            function deleteList(listName) {
                if (confirm('Sure?')) {
                    delete todos[listName];
                } else return;
            }

            function renameList (listName) {
                var newName = prompt('Enter a new name:');
                if (todos.hasOwnProperty(newName)) {
                    alert('Name already exist!');
                } else {
                    todos[newName] = todos[listName];
                    delete todos[listName];
                }
            }

            function completeTodo(todoId) {
                debugger;
                todos[currList][todoId].completed = true;
                //linethrou completed todo
            }

            function setCurrTodo(todoId) {
                console.log('currTodo set: ', currTodo);
                currTodo = {
                    currList: currList,
                    id: todoId
                };

            }

            function setNewTodo(newTodoObj) {
                todos[currList].push(newTodoObj);
            }

            // function getCurrTodo() {
            //     return currTodo;
            // }


            return {
                getTodos: getTodos,
                // setNewList: setNewList,
                getCurrList: getCurrList,
                setCurrList: setCurrList,
                addNewList: addNewList,
                completeTodo: completeTodo,
                setCurrTodo: setCurrTodo,
                // getCurrTodo: getCurrTodo,
                setNewTodo: setNewTodo,
                // currList: currList // no-good: stay on the first value
                deleteList: deleteList,
                renameList: renameList
            }
        })
})();