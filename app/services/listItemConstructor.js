(function () {
    angular
        .module('serviceModule')
        .factory('listItemConstructor', ListItemConstructor);

    function ListItemConstructor(){

        var factory = {
            List: List
        };

        return factory;

        //////////

        function getUniqueListId() {
            return Math.floor(Date.now()/3);
        }

        function List(newListTitle) {
            this.id = getUniqueListId();
            this.title = newListTitle;
            this.todos = []
        }
    }

})();