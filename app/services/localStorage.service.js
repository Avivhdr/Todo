(function () {
    angular
        .module('serviceModule')
        .factory('localStorageService', localStorageService);

        function localStorageService() {
        var newUserLists = [
            {
                "id": 1,
                "title": "Shopping List",
                "todos": [
                    {
                        "id": 11,
                        "title": "Milk",
                        "completed": false,
                        "details": "only 9% fat",
                        "created": "Wed May 06 2016"
                    },
                    {
                        "id": 12,
                        "title": "Bread",
                        "completed": false,
                        "details": "Rye",
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
                        "details": "the old ones",
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
                        "details": "always bring a towel",
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
                        "details": "ask how is she",
                        "created": "Wed May 06 2016"
                    },
                    {
                        "id": 32,
                        "title": "clean home",
                        "completed": false,
                        "details": "windows also",
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
                        "details": "open from 8:00 to 13:00",
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

        var factory = {
            initLocalStorage: initLocalStorage,
            populateStorage: populateStorage,
            getStorageSync: getStorageSync
        };

        return factory;

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
    }

})();