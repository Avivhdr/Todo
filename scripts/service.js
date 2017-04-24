app.factory('todosService', function() {
    return {
        todos: {
            'shoping list': {
                'milk': {
                    id: Date.now(),
                    title: 'milk',
                    completed: false,
                    details: ''
                },
                'bread': {
                    id: Date.now(),
                    title: 'bread',
                    completed: false,
                    details: ''
                },
            },
            'general list': {
                'fix phone': {
                    id: Date.now(),
                    title: 'fix phone',
                    completed: false,
                    details: ''
                },
                'fix tv': {
                    id: Date.now(),
                    title: 'fix tv',
                    completed: false,
                    details: ''
                },
            }
        },

        getTodos: function() {
            return todos;
        },

        setNewList: function(newList) {
            todos[newList] = {};
            console.log('new list added:', todos);
        },

        setNewTodo: function(list, newTodo) {
            todos[list][newTodo.id] = newTodo;
        }

    }
});