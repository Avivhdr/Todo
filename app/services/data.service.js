(function () {
    angular
        .module('serviceModule')
        .factory('dataService', dataService);

    function dataService() {
        var now = new Date();
        var threeDays = new Date();
        var old = new Date();
        var newUserLists = [
          {
            "id": 1,
            "title": "README",
            "todos": [
                {
                    "id": 10,
                    "title": "JUST-DO-IT",
                    "location": '',
                    "completed": false,
                    "details": "only 9% fat",
                    "dueDate": '',
                    "created": now.toDateString()
                },
                {
                    "id": 11,
                    "title": "was built by Aviv Hadar",
                    "location": '',
                    "completed": false,
                    "details": "Rye",
                    "dueDate": '',
                    "created": now.toDateString()
                },
                {
                    "id": 12,
                    "title": "in 2016 using AngularJS",
                    "location": '',
                    "completed": false,
                    "details": "Blue",
                    "dueDate": '',
                    "created": now.toDateString()
                },
                {
                  "id": 13,
                  "title": "tip: try the 'See all' route ⬆️",
                  "location": '',
                  "completed": false,
                  "details": "Details appear in mouseover",
                  "dueDate": '',
                  "created": now.toDateString()
              }
            ]
        },
            {
              "id": 2,
              "title": "Old tasks Example",
              "todos": [
                  {
                      "id": 21,
                      "title": "This is a new task",
                      "location": '',
                      "completed": false,
                      "details": "Details appear in mouseover",
                      "dueDate": '',
                      "created": threeDays.setDate(now.getDate() - 3) && threeDays.toDateString(),
                  },
                  {
                      "id": 22,
                      "title": "This one is a bit older",
                      "location": '',
                      "completed": false,
                      "details": "Details appear in mouseover",
                      "dueDate": '',
                      "created": old.setDate(old.getDate() - 11) && old.toDateString()
                  },
                  {
                      "id": 23,
                      "title": "This one is much older",
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
                  },
              ]
          },
            {
                "id": 3,
                "title": "General",
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
            },
            {
              "id": 5,
              "title": "Shopping",
              "todos": [
                  {
                      "id": 51,
                      "title": "Milk",
                      "location": '',
                      "completed": true,
                      "details": "",
                      "dueDate": '',
                      "created": now.toDateString()
                  },
                  {
                      "id": 52,
                      "title": "Coffee",
                      "location": '',
                      "completed": false,
                      "details": "",
                      "dueDate": '',
                      "created": now.toDateString()
                  },
                  {
                      "id": 53,
                      "title": "Pasta",
                      "location": '',
                      "completed": true,
                      "details": "",
                      "dueDate": '',
                      "created": now.toDateString()
                  },
                  {
                      "id": 54,
                      "title": "PJ",
                      "location": '',
                      "completed": false,
                      "details": "",
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