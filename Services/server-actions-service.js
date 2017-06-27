(function () {
    angular.module('Service', ['app'])

        .factory('localStorageService', function () {
            var newUserLists = [
                {
                    "id": 1,
                    "title": "First List",
                    "todos": [
                        {
                            "id": 1,
                            "title": "client side validation",
                            "completed": false,
                            "details": "",
                            "created": "Wed May 06 2016",
                            "daysPassed": 0
                        },
                        {
                            "id": 2,
                            "title": "replace alert with modal",
                            "completed": false,
                            "details": "",
                            "created": "Wed May 04 2016",
                            "daysPassed": 0
                        },
                        {
                            "id": 3,
                            "title": "First Todo",
                            "completed": false,
                            "details": "",
                            "created": "Wed May 07 2016",
                            "daysPassed": 0
                        },
                        {
                            "id": 4,
                            "title": "First Todo",
                            "completed": false,
                            "details": "",
                            "created": "Wed May 09 2016",
                            "daysPassed": 0
                        }
                    ]
                },
                {
                    "id": 2,
                    "title": "Second List",
                    "todos": [
                        {
                            "id": 21,
                            "title": "ima shel micky",
                            "completed": true,
                            "details": "",
                            "created": "Wed May 06 2016",
                            "daysPassed": 0
                        },
                        {
                            "id": 22,
                            "title": "ima shel ludi",
                            "completed": true,
                            "details": "",
                            "created": "Wed May 04 2016",
                            "daysPassed": 0
                        },
                        {
                            "id": 23,
                            "title": "nir",
                            "completed": true,
                            "details": "",
                            "created": "Wed May 07 2016",
                            "daysPassed": 0
                        },
                        {
                            "id": 24,
                            "title": "test",
                            "completed": true,
                            "details": "",
                            "created": "Wed May 09 2016",
                            "daysPassed": 0
                        }
                    ]
                }
            ];

            function initLocalStorage(key) {
                if (!storageAvailable('localStorage')) {
                    alert('LocalStorage not available! Open in different browser!');
                } else {
                    initPopulateStorage(key);
                }
            }

            function storageAvailable() {
                //checks availability for local storage
                try {
                    var storage = window['localStorage'],
                        x = '__storage_test__';
                    storage.setItem(x, x);
                    storage.removeItem(x);
                    return true;
                }
                catch (e) {
                    console.log(e);
                }
            }

            function initPopulateStorage(key) {
                // populate local storage in case of first entry
                if (!localStorage.getItem(key)) {
                    populateStorage(key);
                }
            }

            function populateStorage(key, item) {
                if (!item) {
                    localStorage.setItem(key, angular.toJson(newUserLists))
                } else {
                    localStorage.setItem(key, angular.toJson(item))
                }
                return angular.fromJson(localStorage.getItem(key));
            }

            function getStorageSync(item) {
                return angular.fromJson(localStorage.getItem(item));
            }


            return {
                initLocalStorage: initLocalStorage,
                populateStorage: populateStorage,
                getStorageSync: getStorageSync
            }
        })

        .factory("uniqueIdService", function () {
            var nextUserId = 3;
            var nextListId = 3;
            var nextTodoId = 5;

            function getUniqueUserId() {
                // return Date.now()
                return nextUserId++;
            }

            function getUniqueListId() {
                // return Date.now()
                return nextListId++;
            }

            function getUniqueTodoId() {
                // return Date.now()
                return nextTodoId++;
            }

            return {
                getUniqueUserId: getUniqueUserId,
                getUniqueListId: getUniqueListId,
                getUniqueTodoId: getUniqueTodoId
            }
        })

        .factory('utilService', function (uniqueIdService) {

            function getItemFromArrayById(array, itemId) {
                return array.find(function (item) {
                    return item.id === itemId;
                })
            }

            function doesItemTitleExists(array, itemTitle) {
                return array.findIndex(function (item) {
                    return item.title === itemTitle;
                })
            }

            function returnIndexFromItemId(array,itemId) {
                var Index = array.findIndex(function (item) {
                    return item.id === itemId;
                });
                if (Index !== -1) {
                    return Index
                } else {
                    console.log('returnIndexFromItemId: Fail!')
                }
            }

            function List(newListTitle) {
                    this.id = uniqueIdService.getUniqueListId();
                    this.title = newListTitle;
                    this.todos = []
            }

            function Todo(todoTitle) {
                    this.id = uniqueIdService.getUniqueTodoId();
                    this.title = todoTitle;
                    this.completed = false;
                    this.details = '';
                    this.created = new Date().toDateString();
                    this.daysPassed = 0
            }

            return {
                getItemFromArrayById: getItemFromArrayById,
                doesItemTitleExists: doesItemTitleExists,
                List: List,
                Todo: Todo,
                returnIndexFromItemId: returnIndexFromItemId

            }
        })

        .factory('modalService', function ($uibModal) {

            function inputNewTitleModal(data) {
                var modalInstance = $uibModal.open({
                    templateUrl: './views/modal/InputNewTitleModal.html',
                    controller: 'InputNewTitleModalController',
                    controllerAs: 'ctrl',
                    resolve: {
                        data: function () {
                            return data
                        }
                    }
                });

                modalInstance.result.then(handleNewName(data), handleError);
                function handleNewName(data) {
                    return data.cb;
                }
                function handleError(err) {
                    console.log(err);
                }
            }

            return {
                inputNewTitleModal: inputNewTitleModal
            }
        })


        //////////////////////////////////////////////

        // .factory('loginService', function (currUserIdService, currUserListsService, uniqueIdService, $http, $location) {
        //     var users;
        //     $http.get('http://localhost:3000/users')
        //         .then(function (response) {
        //             users = response.data;
        //         });
        //
        //     function authenticateUser(email, password) {
        //         var user = users.find(function (user) {
        //             return user.password === password && user.email === email;
        //         });
        //         if (user > 0) {
        //
        //             loginCurrUser(user.id);
        //         }
        //         else alert('Details don\'t match');//todo: modal
        //     }
        //
        //     function loginCurrUser(userId) {
        //         $http.get('http://localhost:3000/usersLists/' + user.id)
        //             .then(function (response) {
        //                 currUserListsService.setUserLists(response.data);
        //             });
        //         stateService.setCurrUserId(user.id);
        //
        //         $location.path('/lists');
        //     }
        //
        //     function createAccount(newUser) {
        //         newUser.id = uniqueIdService.getUniqueUserId();
        //         var newUserLists = {
        //             id: newUser.id,
        //             lists: []
        //         };
        //         $http.post('http://localhost:3000/users', newUser)
        //             .then(function (response) {
        //                 console.log('set user status', response.status);
        //             });
        //
        //         $http.post('http://localhost:3000/userslists', newUserLists)
        //             .then(function (response) {
        //
        //                 console.log('Set User Lists Status: ', response.status)
        //             });
        //
        //         loginCurrUser(newUser);
        //     }
        //
        //     return {
        //         authenticateUser: authenticateUser,
        //         createAccount: createAccount
        //     }
        // })
        //
        // .factory('currUserIdService', function () {
        //     var currUserId = 0;
        //
        //     function setCurrUserId(userId) {
        //         currUserId = userId;
        //     }
        //
        //     function getCurrUserId() {
        //         return currUserId;
        //     }
        //
        //     return {
        //         setCurrUserId: setCurrUserId,
        //         getCurrUserId: getCurrUserId
        //     }
        // })
        //
        // .factory('currListIdService', function () {
        //     var currListId = 0;
        //
        //     function setCurrListId(ListId) {
        //         currListId = ListId;
        //     }
        //
        //     function getCurrListId() {
        //         return currListId;
        //     }
        //
        //     return {
        //         setCurrListId: setCurrListId,
        //         getCurrListId: getCurrListId
        //     }
        // })
        //
        // .factory('currTodoIdService', function () {
        //     var currTodoId = 0;
        //
        //     function setCurrTodoId(TodoId) {
        //         currTodoId = TodoId;
        //     }
        //
        //     function getCurrTodoId() {
        //         return currTodoId;
        //     }
        //
        //     return {
        //         setCurrTodoId: setCurrTodoId,
        //         getCurrTodoId: getCurrTodoId
        //     }
        // })
        //
        // .factory('currUserListsService', function (currUserIdService, currListIdService, localStorageService) {
        //     var userLists = {};
        //
        //     function updateUserLists() {
        //         var userId = currUserIdService.getCurrUserId();
        //         $http.put('http://localhost:3000/userslists/' + userId, userLists)
        //             .then(function (response) {
        //                 console.log('new List Added: ', response.data);
        //             });
        //
        //     }
        //
        //     function setUserLists(ListsObj) {
        //         userLists = ListsObj;
        //         updateUserLists();
        //     }
        //
        //     function getUserLists() {
        //         return userLists;
        //     }
        //
        //     function setNewTodo(todoObj) {
        //         var listId = currListIdService.getCurrListId();
        //         userLists.lists.find(function (list) {
        //             if (list.id === listId) {
        //                 list.todos.push(todoObj)
        //             }
        //         });
        //         updateUserLists();
        //     }
        //
        //     return {
        //         //setUserLists: setUserLists,
        //         //getUserLists: getUserLists,
        //         //setNewTodo: setNewTodo
        //     }
        // })
        //
        // .factory('httpService', function ($http) {
        //     // response = {data,status,headers,config,statusText}
        //     // var getUsers = $http({
        //     //     method: 'GET',
        //     //     url: "http://localhost:3000/users"
        //     // });
        //
        //     //User
        //     //GET
        //     function getUsers() {
        //         return $http.get('http://localhost:3000/users')
        //             .then(function (res) {
        //                 return res.data
        //             })
        //             .then(function (res) {
        //                 res.forEach(function (user) {
        //                     user.lastName = 'Gabi Ha-Shmanman'
        //                 });
        //                 return res
        //             })
        //
        //     }
        //
        //     //POST
        //     function setUser(newUser) {
        //         $http.post('http://localhost:3000/users', newUser)
        //             .then(function (response) {
        //                 console.log('set user status', response.status);
        //             });
        //     }
        //
        //     //PUT
        //     function updateUser(user) {
        //         $http.put('http://localhost:3000/users/' + user.id, user)
        //             .then(function (response) {
        //                 console.log('update user status', response.status);
        //             });
        //     }
        //
        //     //DELETE
        //     function deleteUser(user) {
        //         $http.delete('http://localhost:3000/users/' + user.id)
        //             .then(function (response) {
        //                 console.log(response.status);
        //             });
        //     }
        //
        //     //UserLists
        //     //GET
        //     function getUserLists() {
        //         var userLists;
        //         $http.get('http://localhost:3000/usersLists')
        //             .then(function (response) {
        //                 userLists = response.data;
        //                 console.log('Get Users Lists status: ', response.data);
        //             });
        //         return userLists;
        //     }
        //
        //     function deleteList(listId) {
        //         $http.delete('http://localhost:3000/users/' + user.id)
        //             .then(function (response) {
        //                 console.log(response.status);
        //             });
        //     }
        //
        //     // //POST
        //     // function setUser(newUser) {
        //     //     $http.post('http://localhost:3000/users', newUser)
        //     //         .then(function (response) {
        //     //             console.log('set user status', response.status);
        //     //         });
        //     // }
        //     //
        //     // //PUT
        //     // function updateUser(user) {
        //     //     $http.put('http://localhost:3000/users/' + user.id, user)
        //     //         .then(function (response) {
        //     //             console.log('update user status', response.status);
        //     //         });
        //     // }
        //     //
        //     // //DELETE
        //     // function deleteUser(user) {
        //     //     $http.delete('http://localhost:3000/users/' + user.id, user)
        //     //         .then(function (response) {
        //     //             console.log(response.status);
        //     //         });
        //     // }
        //
        //     return {
        //         //user
        //         getUsers: getUsers,
        //         setUser: setUser,
        //         updateUser: updateUser,
        //         deleteUser: deleteUser,
        //         //userslists
        //         getUserLists: getUserLists
        //     }
        // })
        //
        // .factory('stateService', function () {
        //     var state = {
        //         user: 1,
        //         list: 0, // Object.keys(users[state.userId].todos).length > 0 ? Object.keys(users[userId].todos)[0] : '',
        //         todo: null,
        //         currLists: {}
        //     };
        //
        //     function getState() {
        //         return state;
        //     }//
        //
        //     function setCurrUserId(userId) {
        //         state.user = userId;
        //     }//
        //
        //     function getCurrUserId() {
        //         return state.user;
        //     }//
        //
        //     function setCurrListId(listID) {
        //         state.list = listID;
        //     }//
        //
        //     function getCurrListId() {
        //         return state.list
        //     }//
        //
        //     function setCurrTodoId(todoId) {
        //         state.todo = todoId;
        //     }//
        //
        //     function setListsObj(lists) {
        //         state.currLists = lists;
        //     }//
        //
        //     function getListsObj() {
        //         return state.currLists;
        //     }//
        //
        //     function getCurrList() {
        //         return state.currLists.lists.find(function (list) {
        //             return list.id === state.list;
        //         })
        //     }//
        //
        //     function setNewTodo(todoObj) {
        //         debugger;
        //         state.currLists.lists.find(function (list) {
        //             if (list.id === state.list) {
        //                 list.todos.push(todoObj)
        //             }
        //         })
        //     }//
        //
        //     return {
        //         getState: getState,
        //         //user
        //         setCurrUserId: setCurrUserId,
        //         // getCurrUserId: getCurrUserId, //usless - getState
        //         //list
        //         setCurrListId: setCurrListId,
        //         getCurrListId: getCurrListId,
        //         //todo
        //         setCurrTodoId: setCurrTodoId,
        //         setNewTodo: setNewTodo,
        //
        //         setListsObj: setListsObj,
        //         getListsObj: getListsObj,
        //         getCurrList: getCurrList
        //     }
        // })


})
();