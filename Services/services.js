console.log('service up');

(function() {
    angular.module('dataService', [])
        .factory('todosService', function() {
            var todos = {
                'shoping list': [{
                    id: 1,
                    title: 'milk',
                    completed: false,
                    details: ''
                }, {
                    id: 2,
                    title: 'bread',
                    completed: false,
                    details: ''
                }, ],
                'general list': [{
                    id: 3,
                    title: 'fix phone',
                    completed: false,
                    details: ''
                }, {
                    id: 4,
                    title: 'fix tv',
                    completed: false,
                    details: ''
                }]
            };
            var currList = Object.keys(todos).length > 0 ? Object.keys(todos)[0] : [];
            var currTodo = {
                currList: '',
                index: 0
            };

            function getTodos() {
                return todos;
            }

            function setNewList(newList) {
                todos[newList] = [];
                console.log('new list added:', todos);
            }

            function getCurrList() {
                return currList;
            }

            function setCurrList(list) {
                console.log('curr list set to: ', list)
                currList = [list];
            }

            function addNewList(newList) {
                setNewList(newList);
                setCurrList(newList);
                this.newList = '';
            }

            function CompleteTodo(todoId) {
                console.log(todos[currList][todoId]);
                todos[currList][todoId].completed = true;
                //linethrou completed todo
            }

            function setCurrTodo(todoId) {
                currTodo = {
                    currList: currList,
                    id: todoId
                };
                console.log(currTodo);

            }

            function setNewTodo(newTodoObj) {
                todos[currList].push(newTodoObj);
            }

            // function getCurrTodo() {
            //     return currTodo;
            // }


            return {
                getTodos: getTodos,
                // setNewList: setNewList,
                getCurrList: getCurrList,
                setCurrList: setCurrList,
                addNewList: addNewList,
                CompleteTodo: CompleteTodo,
                setCurrTodo: setCurrTodo,
                // getCurrTodo: getCurrTodo,
                setNewTodo: setNewTodo,
                currList: currList
            }
        })
})();