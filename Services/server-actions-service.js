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
                            "created": "Wed May 06 2016"
                        },
                        {
                            "id": 2,
                            "title": "replace alert with modal",
                            "completed": false,
                            "details": "",
                            "created": "Wed May 04 2016"
                        },
                        {
                            "id": 3,
                            "title": "First Todo",
                            "completed": false,
                            "details": "",
                            "created": "Wed May 07 2016"
                        },
                        {
                            "id": 4,
                            "title": "First Todo",
                            "completed": false,
                            "details": "",
                            "created": "Wed May 09 2016"
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
                            "created": "Wed May 06 2016"
                        },
                        {
                            "id": 22,
                            "title": "ima shel ludi",
                            "completed": true,
                            "details": "",
                            "created": "Wed May 04 2016"
                        },
                        {
                            "id": 23,
                            "title": "nir",
                            "completed": true,
                            "details": "",
                            "created": "Wed May 07 2016"
                        },
                        {
                            "id": 24,
                            "title": "test",
                            "completed": true,
                            "details": "",
                            "created": "Wed May 09 2016"
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
                            "created": "Wed May 06 2016"
                        },
                        {
                            "id": 22,
                            "title": "ima shel ludi",
                            "completed": true,
                            "details": "",
                            "created": "Wed May 04 2016"
                        },
                        {
                            "id": 23,
                            "title": "nir",
                            "completed": true,
                            "details": "",
                            "created": "Wed May 07 2016"
                        },
                        {
                            "id": 24,
                            "title": "test",
                            "completed": true,
                            "details": "",
                            "created": "Wed May 09 2016"
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
                            "created": "Wed May 06 2016"
                        },
                        {
                            "id": 22,
                            "title": "ima shel ludi",
                            "completed": true,
                            "details": "",
                            "created": "Wed May 04 2016"
                        },
                        {
                            "id": 23,
                            "title": "nir",
                            "completed": true,
                            "details": "",
                            "created": "Wed May 07 2016"
                        },
                        {
                            "id": 24,
                            "title": "test",
                            "completed": true,
                            "details": "",
                            "created": "Wed May 09 2016"
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
                            "created": "Wed May 06 2016"
                        },
                        {
                            "id": 22,
                            "title": "ima shel ludi",
                            "completed": true,
                            "details": "",
                            "created": "Wed May 04 2016"
                        },
                        {
                            "id": 23,
                            "title": "nir",
                            "completed": true,
                            "details": "",
                            "created": "Wed May 07 2016"
                        },
                        {
                            "id": 24,
                            "title": "test",
                            "completed": true,
                            "details": "",
                            "created": "Wed May 09 2016"
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
            function getUniqueListId() {
                return Math.floor(Date.now()/3);
            }

            function getUniqueTodoId() {
                return Math.floor(Date.now()/3*5);
            }

            return {
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
    })
();