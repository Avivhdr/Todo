(function () {
    angular
        .module('serviceModule')
        .factory('dataService', dataService);

    function dataService() {
        var newUserLists = [
            {
                "id": 2,
                "title": "Color Example",
                "todos": [
                    {
                        "id": 21,
                        "title": "First 10 days",
                        "location": '',
                        "completed": false,
                        "details": "the old ones",
                        "dueDate": '',
                        "created": "Wed September 01 2017"
                    },
                    {
                        "id": 22,
                        "title": "Over 10 days",
                        "location": '',
                        "completed": false,
                        "details": "",
                        "dueDate": '',
                        "created": "Wed August 27 2017"
                    },
                    {
                        "id": 23,
                        "title": "Over 20 days",
                        "location": '',
                        "completed": false,
                        "details": "always bring a towel",
                        "dueDate": '',
                        "created": "Wed August 17 2017"
                    },
                    {
                        "id": 24,
                        "title": "Over 30 days",
                        "location": '',
                        "completed": false,
                        "details": "",
                        "dueDate": '',
                        "created": "Wed August 01 2017"
                    }
                ]
            },
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
                        "created": "Wed August 26 2017"
                    },
                    {
                        "id": 12,
                        "title": "Bread",
                        "location": '',
                        "completed": false,
                        "details": "Rye",
                        "dueDate": '',
                        "created": "Wed August 24 2017"
                    },
                    {
                        "id": 13,
                        "title": "Cheese",
                        "location": '',
                        "completed": false,
                        "details": "",
                        "dueDate": '',
                        "created": "Wed August 27 2017"
                    },
                    {
                        "id": 14,
                        "title": "Mayonnaise",
                        "location": '',
                        "completed": false,
                        "details": "",
                        "dueDate": '',
                        "created": "Wed August 29 2017"
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
                        "created": "Wed August 26 2017"
                    },
                    {
                        "id": 32,
                        "title": "clean home",
                        "location": '',
                        "completed": false,
                        "details": "windows also",
                        "dueDate": '',
                        "created": "Wed August 24 2017"
                    },
                    {
                        "id": 33,
                        "title": "go to store (see shopping list)",
                        "location": '',
                        "completed": false,
                        "details": "",
                        "dueDate": '',
                        "created": "Wed August 27 2017"
                    },
                    {
                        "id": 34,
                        "title": "pick up mail",
                        "location": '',
                        "completed": false,
                        "details": "open from 8:00 to 13:00",
                        "dueDate": '',
                        "created": "Wed August 29 2017"
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
                        "created": "Wed June 26 2017"
                    },
                    {
                        "id": 42,
                        "title": "Planet Earth 2",
                        "location": '',
                        "completed": false,
                        "details": "",
                        "dueDate": '',
                        "created": "Wed June 14 2017"
                    },
                    {
                        "id": 43,
                        "title": "Game of Thrones",
                        "location": '',
                        "completed": true,
                        "details": "",
                        "dueDate": '',
                        "created": "Wed June 26 2017"
                    },
                    {
                        "id": 44,
                        "title": "Westworld",
                        "location": '',
                        "completed": false,
                        "details": "Season 2",
                        "dueDate": '',
                        "created": "Wed June 04 2017"
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