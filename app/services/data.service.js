(function () {
    angular
        .module('serviceModule')
        .factory('dataService', dataService);

    function dataService() {
        var now = new Date();
        var old = new Date();
        // var older = new Date();
        // var oldest = new Date();
        var newUserLists = [
            {
              "id": 1,
              "title": "Old tasks Example",
              "todos": [
                  {
                      "id": 21,
                      "title": "This is a new task",
                      "location": '',
                      "completed": false,
                      "details": "Details appear in mouseover",
                      "dueDate": '',
                      "created": now.toDateString(),
                  },
                  {
                      "id": 22,
                      "title": "This task was created some time ago",
                      "location": '',
                      "completed": false,
                      "details": "Details appear in mouseover",
                      "dueDate": '',
                      "created": old.setDate(old.getDate() - 11) && old.toDateString()
                  },
                  {
                      "id": 23,
                      "title": "This one is even older",
                      "location": '',
                      "completed": false,
                      "details": "Details appear in mouseover",
                      "dueDate": '',
                      "created": old.setDate(old.getDate() - 10) && old.toDateString()
                  },
                  {
                      "id": 24,
                      "title": "And this one is REALLY old",
                      "location": '',
                      "completed": false,
                      "details": "Details appear in mouseover",
                      "dueDate": '',
                      "created": old.setDate(old.getDate() - 10) && old.toDateString()
                  }
              ]
          },
          {
                "id": 2,
                "title": "Shopping List",
                "todos": [
                    {
                        "id": 16,
                        "title": "THIS APP",
                        "location": '',
                        "completed": false,
                        "details": "only 9% fat",
                        "dueDate": '',
                        "created": now.toDateString()
                    },
                    {
                        "id": 12,
                        "title": "WAS BUILT BY ME",
                        "location": '',
                        "completed": false,
                        "details": "Rye",
                        "dueDate": '',
                        "created": now.toDateString()
                    },
                    {
                        "id": 13,
                        "title": "4 YEARS AGO",
                        "location": '',
                        "completed": false,
                        "details": "Blue",
                        "dueDate": '',
                        "created": now.toDateString()
                    },
                    {
                        "id": 14,
                        "title": "WITH AngularJS",
                        "location": '',
                        "completed": false,
                        "details": "",
                        "dueDate": '',
                        "created": now.toDateString()
                    }
                ]
            },
            {
                "id": 3,
                "title": "To Do",
                "todos": [
                    {
                        "id": 31,
                        "title": "Call mom",
                        "location": '',
                        "completed": true,
                        "details": "Task details appear on hover",
                        "dueDate": '',
                        "created": now.toDateString()
                    },
                    {
                        "id": 32,
                        "title": "Clean home",
                        "location": '',
                        "completed": false,
                        "details": "Make sure you have cleaning products",
                        "dueDate": '',
                        "created": now.toDateString()
                    },
                    {
                        "id": 33,
                        "title": "Go shopping",
                        "location": '',
                        "completed": false,
                        "details": "See sShopping List",
                        "dueDate": '',
                        "created": now.toDateString()
                    },
                    {
                        "id": 34,
                        "title": "pick up mail",
                        "location": '',
                        "completed": false,
                        "details": "Open from 8:00 to 13:00",
                        "dueDate": '',
                        "created": now.toDateString()
                    }
                ]
            },
            {
                "id": 4,
                "title": "Watch",
                "todos": [
                    {
                        "id": 41,
                        "title": "Rick & Morty",
                        "location": '',
                        "completed": true,
                        "details": "Details appear in mouseover",
                        "dueDate": '',
                        "created": now.toDateString()
                    },
                    {
                        "id": 42,
                        "title": "Planet Earth 2",
                        "location": '',
                        "completed": false,
                        "details": "Details appear in mouseover",
                        "dueDate": '',
                        "created": now.toDateString()
                    },
                    {
                        "id": 43,
                        "title": "Game of Thrones",
                        "location": '',
                        "completed": true,
                        "details": "Details appear in mouseover",
                        "dueDate": '',
                        "created": now.toDateString()
                    },
                    {
                        "id": 44,
                        "title": "Westworld",
                        "location": '',
                        "completed": false,
                        "details": "Season 2",
                        "dueDate": '',
                        "created": now.toDateString()
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