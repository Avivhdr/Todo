(function () {
    angular
        .module('serviceModule')
        .factory('dataService', dataService);

    function dataService() {
        var newUserLists = [
            {
                "id": 1,
                "title": "Shopping List",
                "todos": [
                    {
                        "id": 16,
                        "title": "Milk",
                        "location": '',
                        "completed": false,
                        "details": "only 9% fat",
                        "dueDate": '',
                        "created": "Wed May 06 2016"
                    },
                    {
                        "id": 12,
                        "title": "Bread",
                        "location": '',
                        "completed": false,
                        "details": "Rye",
                        "dueDate": '',
                        "created": "Wed May 04 2016"
                    },
                    {
                        "id": 13,
                        "title": "Cheese",
                        "location": '',
                        "completed": false,
                        "details": "",
                        "dueDate": '',
                        "created": "Wed May 07 2016"
                    },
                    {
                        "id": 14,
                        "title": "mayonnaise",
                        "location": '',
                        "completed": false,
                        "details": "",
                        "dueDate": '',
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
                        "location": '',
                        "completed": true,
                        "details": "the old ones",
                        "dueDate": '',
                        "created": "Wed May 06 2016"
                    },
                    {
                        "id": 22,
                        "title": "swim pants",
                        "location": '',
                        "completed": false,
                        "details": "",
                        "dueDate": '',
                        "created": "Wed May 04 2016"
                    },
                    {
                        "id": 23,
                        "title": "towel",
                        "location": '',
                        "completed": false,
                        "details": "always bring a towel",
                        "dueDate": '',
                        "created": "Wed May 07 2016"
                    },
                    {
                        "id": 24,
                        "title": "book",
                        "location": '',
                        "completed": false,
                        "details": "",
                        "dueDate": '',
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
                        "location": '',
                        "completed": true,
                        "details": "ask how is she",
                        "dueDate": '',
                        "created": "Wed May 06 2016"
                    },
                    {
                        "id": 32,
                        "title": "clean home",
                        "location": '',
                        "completed": false,
                        "details": "windows also",
                        "dueDate": '',
                        "created": "Wed May 04 2016"
                    },
                    {
                        "id": 33,
                        "title": "go to store (see shopping list)",
                        "location": '',
                        "completed": false,
                        "details": "",
                        "dueDate": '',
                        "created": "Wed May 07 2016"
                    },
                    {
                        "id": 34,
                        "title": "pick up mail",
                        "location": '',
                        "completed": false,
                        "details": "open from 8:00 to 13:00",
                        "dueDate": '',
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
                        "location": '',
                        "completed": true,
                        "details": "",
                        "dueDate": '',
                        "created": "Wed June 06 2016"
                    },
                    {
                        "id": 42,
                        "title": "Planet Earth 2",
                        "location": '',
                        "completed": false,
                        "details": "",
                        "dueDate": '',
                        "created": "Wed June 14 2016"
                    },
                    {
                        "id": 43,
                        "title": "Game of Thrones",
                        "location": '',
                        "completed": true,
                        "details": "",
                        "dueDate": '',
                        "created": "Wed June 26 2016"
                    },
                    {
                        "id": 44,
                        "title": "Westworld",
                        "location": '',
                        "completed": false,
                        "details": "Season 2",
                        "dueDate": '',
                        "created": "Wed June 04 2016"
                    }
                ]
            }

        ];

        var factory = {
            newUserLists: newUserLists
        };

        return factory;
    }

})();