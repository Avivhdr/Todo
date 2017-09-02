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
                        "title": "Ragular",
                        "location": '',
                        "completed": false,
                        "details": "Details appear in mouseover",
                        "dueDate": '',
                        "created": "Wed September 01 2017"
                    },
                    {
                        "id": 22,
                        "title": "Over 10 days",
                        "location": '',
                        "completed": false,
                        "details": "Details appear in mouseover",
                        "dueDate": '',
                        "created": "Wed August 21 2017"
                    },
                    {
                        "id": 23,
                        "title": "Over 20 days",
                        "location": '',
                        "completed": false,
                        "details": "Details appear in mouseover",
                        "dueDate": '',
                        "created": "Wed August 11 2017"
                    },
                    {
                        "id": 24,
                        "title": "Over 30 days",
                        "location": '',
                        "completed": false,
                        "details": "Details appear in mouseover",
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
                        "created": "Wed September 01 2017"
                    },
                    {
                        "id": 12,
                        "title": "Bread",
                        "location": '',
                        "completed": false,
                        "details": "Rye",
                        "dueDate": '',
                        "created": "Wed September 01 2017"
                    },
                    {
                        "id": 13,
                        "title": "Cheese",
                        "location": '',
                        "completed": false,
                        "details": "Blue",
                        "dueDate": '',
                        "created": "Wed September 01 2017"
                    },
                    {
                        "id": 14,
                        "title": "Mayonnaise",
                        "location": '',
                        "completed": false,
                        "details": "",
                        "dueDate": '',
                        "created": "Wed September 01 2017"
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
                        "details": "Details appear in mouseover",
                        "dueDate": '',
                        "created": "Wed September 01 2017"
                    },
                    {
                        "id": 32,
                        "title": "clean home",
                        "location": '',
                        "completed": false,
                        "details": "windows also",
                        "dueDate": '',
                        "created": "Wed September 01 2017"
                    },
                    {
                        "id": 33,
                        "title": "go shopping",
                        "location": '',
                        "completed": false,
                        "details": "Details appear in mouseover",
                        "dueDate": '',
                        "created": "Wed September 01 2017"
                    },
                    {
                        "id": 34,
                        "title": "pick up mail",
                        "location": '',
                        "completed": false,
                        "details": "open from 8:00 to 13:00",
                        "dueDate": '',
                        "created": "Wed September 01 2017"
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
                        "details": "Details appear in mouseover",
                        "dueDate": '',
                        "created": "Wed September 01 2017"
                    },
                    {
                        "id": 42,
                        "title": "Planet Earth 2",
                        "location": '',
                        "completed": false,
                        "details": "Details appear in mouseover",
                        "dueDate": '',
                        "created": "Wed September 01 2017"
                    },
                    {
                        "id": 43,
                        "title": "Game of Thrones",
                        "location": '',
                        "completed": true,
                        "details": "Details appear in mouseover",
                        "dueDate": '',
                        "created": "Wed September 01 2017"
                    },
                    {
                        "id": 44,
                        "title": "Westworld",
                        "location": '',
                        "completed": false,
                        "details": "Season 2",
                        "dueDate": '',
                        "created": "Wed September 01 2017"
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