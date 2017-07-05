(function () {
    angular.module('serviceModule')

    .factory('mainListsService', function (){

        function getUniqueListId() {
            return Math.floor(Date.now()/3);
        }

        function List(newListTitle) {
            this.id = getUniqueListId();
            this.title = newListTitle;
            this.todos = []
        }

        return {
            List: List
        }
    });
})
();