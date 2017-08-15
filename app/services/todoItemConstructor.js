(function () {
    angular
        .module('serviceModule')
        .factory('todoItemConstructor', todoItemConstructor);

    function todoItemConstructor(){

        var factory = {
            Todo: Todo
        };

        return factory;

        //////////

        function getUniqueTodoId() {
            return Math.floor(Date.now()/3*5);
        }

        function Todo(todoTitle) {
            this.id = getUniqueTodoId();
            this.title = todoTitle;
            this.location = '';
            this.completed = false;
            this.details = '';
            this.created = new Date().toDateString();
        }

    }
})
();