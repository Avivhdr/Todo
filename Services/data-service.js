(function () {
    angular.module('dataService', ['app', 'idService'])
        .factory('todosService', function ($timeout, UniqueIdService) {
            var users = {
                1: {
                    userId: 1,
                    firstName: 'aviv',
                    lastName: 'hadar',
                    email: 'aviv@gmail.com',
                    password: '111111'
                    // todos: {
                    //     'Shopping List': {
                    //         1: {
                    //             id: 1,
                    //             title: 'milk',
                    //             completed: false,
                    //             details: '',
                    //             created: 'Wed May 03 2016',
                    //             daysPassed: 0
                    //         },
                    //         2: {
                    //             id: 2,
                    //             title: 'bread',
                    //             completed: false,
                    //             details: '',
                    //             created: 'Wed May 01 2015',
                    //             daysPassed: 0
                    //         }
                    //     },
                    //     'General List': {
                    //         3: {
                    //             id: 3,
                    //             title: 'fix phone',
                    //             completed: false,
                    //             details: '',
                    //             created: 'Wed December 23 2015',
                    //             daysPassed: 0
                    //         },
                    //         4: {
                    //             id: 4,
                    //             title: 'fix tv',
                    //             completed: false,
                    //             details: '',
                    //             created: 'Wed July 23 2015',
                    //             daysPassed: 0
                    //         }
                    //     }
                    // }
                },
                2: {
                    userId: 2,
                    firstName: 'suzanne',
                    lastName: 'dykmans',
                    email: 'suzanne@gmail.com',
                    password: '222222'
                    // todos: {
                    //     "Today's goals": {
                    //         1: {
                    //             id: 1,
                    //             title: 'Goal 1',
                    //             completed: false,
                    //             details: '',
                    //             created: 'Wed May 03 2016',
                    //             daysPassed: 0
                    //         },
                    //         2: {
                    //             id: 2,
                    //             title: 'Goal 2',
                    //             completed: false,
                    //             details: '',
                    //             created: 'Wed May 01 2015',
                    //             daysPassed: 0
                    //         }
                    //     },
                    //     'Tomorrow"s goals': {
                    //         3: {
                    //             id: 3,
                    //             title: 'Tomorrow 1',
                    //             completed: false,
                    //             details: '',
                    //             created: 'Wed December 23 2015',
                    //             daysPassed: 0
                    //         },
                    //         4: {
                    //             id: 4,
                    //             title: 'tomorrow 2',
                    //             completed: false,
                    //             details: '',
                    //             created: 'Wed July 23 2015',
                    //             daysPassed: 0
                    //         }
                    //     }
                    // }
                }
            };
            var usersLists = {
                1: {
                    userId: 1,
                    lists: {
                        "Today's goals": {
                            1: {
                                todoId: 1,
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
                        "Tomorrow's goals": {
                            3: {
                                todoId: 3,
                                title: 'Tomorrow 1',
                                completed: false,
                                details: '',
                                created: 'Wed December 23 2015',
                                daysPassed: 0
                            },
                            4: {
                                todoId: 4,
                                title: 'tomorrow 2',
                                completed: false,
                                details: '',
                                created: 'Wed July 23 2015',
                                daysPassed: 0
                            }
                        }
                    }
                },
                2: {
                    userId: 2,
                    lists: {
                        "Shopping": {
                            1: {
                                todoId: 1,
                                title: 'milk',
                                completed: false,
                                details: '',
                                created: 'Wed May 03 2016',
                                daysPassed: 0
                            },
                            2: {
                                todoId: 2,
                                title: 'bread',
                                completed: false,
                                details: '',
                                created: 'Wed May 01 2015',
                                daysPassed: 0
                            }
                        },
                        'General': {
                            3: {
                                todoId: 3,
                                title: 'fix phone',
                                completed: false,
                                details: '',
                                created: 'Wed December 23 2015',
                                daysPassed: 0
                            },
                            4: {
                                todoId: 4,
                                title: 'fix tv',
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
                userId: 1,
                currListName: '',
                // Object.keys(users[state.userId].todos).length > 0 ? Object.keys(users[userId].todos)[0] : '',
                currTodoId: null
            };

            // user
            function createAccount(user) {
                newId = UniqueIdService.getUniqueUserId();
                users[newId] = {
                    userId: newId,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    password: user.password
                };
                usersLists[newId] = {
                    userId: newId,
                    lists: {}
                };
            }

            function getUsers() {
                return $timeout(function() {
                    return users;
                }, 1000);
            }

            function getUsersnp() {
                    return users;
            };



            function getUserLists() {
                return $timeout(function() {
                    return usersLists[state.userId].lists;
                }, 1000);
            }
            // function getTodos() {
            //     debugger;
            //     return usersLists[state.userId];
            //     // for (var listId in usersLists[state.userId].lists) {
            //     //     for (var listProperties in usersLists[state.userId].lists[listId]) {
            //     //         var dp = ( Date.now() - Date.parse(users[state.userId].todos[list][todoId].created) ) / 86400000;
            //     //         users[state.userId].todos[list][todoId].daysPassed = Math.floor(dp);
            //     //     }
            //     // }
            // }
            function getState() {
                return $timeout(function() {
                    return state;
                }, 1000);
            }

            function setUser(userId) {
                state.userId = userId;
            }

            // list
            function setNewList(newList) {
                usersLists[state.userId].lists[newList] = {
                };
            }

            function setCurrList(StateParamsObj) {
                state.currListName = StateParamsObj.listName;
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
                usersLists[state.userId].lists[state.currListName][todoId].completed =
                !usersLists[state.userId].lists[state.currListName][todoId].completed;
            }

            function addNewTodo(newTodoObj) {
                newTodoObj.id = UniqueIdService.getUniqueTodoId();
                usersLists[state.userId].lists[state.currListName][newTodoObj.id] = newTodoObj;
                this.newTodo = '';
            }

            function setCurrTodo(todoId) {
                state.currTodoId = todoId;
            }

            function getTodo() {
                return usersLists[state.userId].lists[state.currListName][state.currTodoId];
            }

            function deleteTodo() {
                delete users[state.userId].todos[state.currList][state.currTodoId];
            }


            return {
                createAccount: createAccount,
                getUsers: getUsers,
                getUsersnp: getUsersnp,
                getUserLists: getUserLists,
                getState: getState,
                setUser: setUser,
                setCurrList: setCurrList,
                addNewList: addNewList,

                //todo
                completeTodo: completeTodo,
                setCurrTodo: setCurrTodo,
                addNewTodo: addNewTodo,
                deleteList: deleteList,
                renameList: renameList,
                deleteTodo: deleteTodo,
                getTodo: getTodo

            }
        })
})();