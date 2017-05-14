(function () {
    angular.module('dataService', [])
        .factory('todosService', function () {
            var users = {
                1: {
                    email: 'aviv1@gmail.com',
                    password: '111111',
                    todos: {
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
                    }
                },
                2: {
                    email: 'aviv2@gmail.com',
                    password: '222222',
                    todos: {
                        "Today's goals": {
                            1: {
                                id: 1,
                                title: 'Goal 1',
                                completed: false,
                                details: '',
                                created: 'Wed May 03 2016',
                                daysPassed: 0
                            },
                            2: {
                                id: 2,
                                title: 'Goal 2',
                                completed: false,
                                details: '',
                                created: 'Wed May 01 2015',
                                daysPassed: 0
                            }
                        },
                        'Tomorrow"s goals': {
                            3: {
                                id: 3,
                                title: 'Tomorrow 1',
                                completed: false,
                                details: '',
                                created: 'Wed December 23 2015',
                                daysPassed: 0
                            },
                            4: {
                                id: 4,
                                title: 'tomorrow 2',
                                completed: false,
                                details: '',
                                created: 'Wed July 23 2015',
                                daysPassed: 0
                            }
                        }
                    }
                }
            };

            var state = {
                userId: 2,
                currList: 'General List',
                    // Object.keys(users[state.userId].todos).length > 0 ? Object.keys(users[userId].todos)[0] : '',
                currTodoId: null
            };

            // data

            function getUsers() {
                return users;
            }

            function getTodos() {
                for (var list in users[state.userId].todos) {
                    for (var todoId in users[state.userId].todos[list]) {
                        var dp = ( Date.now() - Date.parse(users[state.userId].todos[list][todoId].created) ) / 86400000;
                        users[state.userId].todos[list][todoId].daysPassed = Math.floor(dp);
                    }
                }

                return users[state.userId].todos;
            }

            function getState() {
                return state;
            }

            // list
            function setNewList(newList) {
                users[state.userId].todos[newList] = {};
            }

            function setCurrList(StateParamsObj) {
                state.currList = StateParamsObj.listName;
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
                    delete users[state.userId].todos[listName];
                } else return;
            }

            function renameList(listName) {
                var newName = prompt('Enter a new name:');
                if (newName === null) return;
                if (users[state.userId].todos.hasOwnProperty(newName)) {
                    alert('Name already exist!');
                } else {
                    users[state.userId].todos[newName] = users[state.userId].todos[listName];
                    delete users[state.userId].todos[listName];
                }
            }

            // todo
            function completeTodo(todoId) {
                users[state.userId].todos[state.currList][todoId].completed = !users[state.userId].todos[state.currList][todoId].completed;
            }

            function addNewTodo(newTodoObj) {
                users[state.userId].todos[state.currList][newTodoObj.id] = newTodoObj;
                this.newTodo = '';
            }

            function setCurrTodo(StateParamsObj) {
                state.currTodoId = StateParamsObj.todoId;
            }

            function deleteTodo() {
                delete users[state.userId].todos[state.currList][state.currTodoId];
            }


            return {
                getUsers: getUsers,
                getTodos: getTodos,
                getState: getState,
                setCurrList: setCurrList,
                addNewList: addNewList,
                completeTodo: completeTodo,
                setCurrTodo: setCurrTodo,
                addNewTodo: addNewTodo,
                deleteList: deleteList,
                renameList: renameList,
                deleteTodo: deleteTodo

            }
        })
})();