(function () {
    angular.module('idService',[])
        .factory("UniqueIdService", function () {
            var nextUserId = 3;
            var nextTodoId = 5;

            function getUniqueUserId() {
                return nextUserId++;
            }

            function getUniqueTodoId() {
                return nextTodoId++;
            }

            return {
                getUniqueTodoId: getUniqueTodoId,
                getUniqueUserId: getUniqueUserId
            }
        })
        })();
