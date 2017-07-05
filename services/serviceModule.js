(function () {
    angular.module('serviceModule', ['myApp'])

    .factory('localStorageService', function () {
            var newUserLists = [
                {
                    "id": 1,
                    "title": "Shopping List",
                    "todos": [
                        {
                            "id": 11,
                            "title": "Milk",
                            "completed": false,
                            "details": "",
                            "created": "Wed May 06 2016"
                        },
                        {
                            "id": 12,
                            "title": "Bread",
                            "completed": false,
                            "details": "",
                            "created": "Wed May 04 2016"
                        },
                        {
                            "id": 13,
                            "title": "Cheese",
                            "completed": false,
                            "details": "",
                            "created": "Wed May 07 2016"
                        },
                        {
                            "id": 14,
                            "title": "mayonnaise",
                            "completed": false,
                            "details": "",
                            "created": "Wed May 09 2016"
                        }
                    ]
                },
                {
                    "id": 2,
                    "title": "Packing for trip",
                    "todos": [
                        {
                            "id": 21,
                            "title": "sun glasses",
                            "completed": true,
                            "details": "",
                            "created": "Wed May 06 2016"
                        },
                        {
                            "id": 22,
                            "title": "swim pants",
                            "completed": false,
                            "details": "",
                            "created": "Wed May 04 2016"
                        },
                        {
                            "id": 23,
                            "title": "towel",
                            "completed": false,
                            "details": "",
                            "created": "Wed May 07 2016"
                        },
                        {
                            "id": 24,
                            "title": "book",
                            "completed": false,
                            "details": "",
                            "created": "Wed May 09 2016"
                        }
                    ]
                },
                {
                    "id": 3,
                    "title": "To Do",
                    "todos": [
                        {
                            "id": 31,
                            "title": "call mom",
                            "completed": true,
                            "details": "",
                            "created": "Wed May 06 2016"
                        },
                        {
                            "id": 32,
                            "title": "clean home",
                            "completed": false,
                            "details": "",
                            "created": "Wed May 04 2016"
                        },
                        {
                            "id": 33,
                            "title": "go to store (see shopping list)",
                            "completed": false,
                            "details": "",
                            "created": "Wed May 07 2016"
                        },
                        {
                            "id": 34,
                            "title": "pick up mail",
                            "completed": false,
                            "details": "",
                            "created": "Wed May 09 2016"
                        }
                    ]
                },
                {
                    "id": 4,
                    "title": "Download",
                    "todos": [
                        {
                            "id": 41,
                            "title": "Rick & Morty",
                            "completed": true,
                            "details": "",
                            "created": "Wed May 06 2016"
                        },
                        {
                            "id": 22,
                            "title": "Planet Earth 2",
                            "completed": false,
                            "details": "",
                            "created": "Wed May 04 2016"
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

    .factory('utilService', function () {

            function getItemFromArrayById(array, itemId) {
                return array.find(function (item) {
                    return item.id === itemId;
                })
            }

            function doesItemTitleExists(array, itemTitle) {
                var listIndex = array.findIndex(function (item) {
                    return item.title === itemTitle;
                });
                return listIndex !== -1
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

            return {
                getItemFromArrayById: getItemFromArrayById,
                doesItemTitleExists: doesItemTitleExists,
                returnIndexFromItemId: returnIndexFromItemId
            }
        });

    })
();