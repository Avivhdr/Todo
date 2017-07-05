(function () {
    angular.module('serviceModule')

    .factory('currListAndMultiViewService', function (){

        function getUniqueTodoId() {
            return Math.floor(Date.now()/3*5);
        }

        function Todo(todoTitle) {
            this.id = getUniqueTodoId();
            this.title = todoTitle;
            this.completed = false;
            this.details = '';
            this.created = new Date().toDateString();
        }

        function addActiveToListNameButton(lists,ListId){
            var listIdArr = lists.map(function(list) {
                return list.id;
            });

            listIdArr.forEach(function(currListId){
                $('#'+currListId).removeClass("active");
            });
            $('#'+ListId).addClass("active");
        }

        return {
            Todo: Todo,
            addActiveToListNameButton:addActiveToListNameButton

        }
    });
})
();