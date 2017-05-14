(function () {
    angular.module('serverService', ['dataService'])
        .factory('loginService', function (todosService) {
            var users = todosService.getUsers();

            function loginUser(email, password) {
                for (var userId in users) {
                    if (users[userId].email === email && users[userId].password === password)
                        return userId;
                }
                return null;
            }


            return {
                loginUser: loginUser
            }
        })
})();