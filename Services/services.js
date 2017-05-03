(function () {
    angular.module('dataService', [])
        .factory('todosService', function () {
            var todos = {
                'Shopping List': {
                    1: {
                        id: 1,
                        title: 'milk',
                        completed: false,
                        details: '',
                        created: 'Wed May 03 2016',
                        daysPassed: 0
                    },
                    2: {
                        id: 2,
                        title: 'bread',
                        completed: false,
                        details: '',
                        created: 'Wed May 01 2015',
                        daysPassed: 0
                    }
                },
                'General List': {
                    3: {
                        id: 3,
                        title: 'fix phone',
                        completed: false,
                        details: '',
                        created: 'Wed December 23 2015',
                        daysPassed: 0
                    },
                    4: {
                        id: 4,
                        title: 'fix tv',
                        completed: false,
                        details: '',
                        created: 'Wed July 23 2015',
                        daysPassed: 0
                    }
                }
            };
            var state = {
                currList: Object.keys(todos).length > 0 ? Object.keys(todos)[0] : '',
                currTodoId: null
            };

            function getTodos() {
                for (var list in todos) {
                    for (var todoId in todos[list]) {
                        var dp = ( Date.now() - Date.parse(todos[list][todoId].created) ) / 86400000;
                        todos[list][todoId].daysPassed = Math.floor(dp);
                    }
                }

                return todos;
            }

            function setNewList(newList) {
                todos[newList] = {};
            }

            function getCurrList() {
                return state.currList;
            }

            function getState() {
                return state;
            }

            function setCurrList(list) {
                state.currList = list;
            }

            function addNewList(newList) {
                if (newList) {
                    setNewList(newList);
                    setCurrList(newList);
                    this.newList = '';
                }
            }

            function deleteList(listName) {
                if (confirm('Sure?')) {
                    delete todos[listName];
                } else return;
            }

            function renameList(listName) {
                var newName = prompt('Enter a new name:');
                if (newName === null) return;
                if (todos.hasOwnProperty(newName)) {
                    alert('Name already exist!');
                } else {
                    todos[newName] = todos[listName];
                    delete todos[listName];
                }
            }

            function completeTodo(todoId) {
                todos[state.currList][todoId].completed = !todos[state.currList][todoId].completed;
            }

            function setNewTodo(newTodoObj) {
                todos[state.currList][newTodoObj.id] = newTodoObj;
            }

            function setCurrTodo(todoStateParams) {
                state.currTodoId = todoStateParams.todoId;
            }



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
                renameList: renameList,
                getState: getState

            }
        })
})();