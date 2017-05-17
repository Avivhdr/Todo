(function () {
    angular.module('serverService', ['dataService','app'])
        .factory('loginService', function (todosService, $location) {
            var users = todosService.getUsers();
            var usersLists = todosService.getUsers();
            var state = todosService.getState();

            function checkEmail (email) {
                // debugger;
                for (var userId in users) {
                    if (users[userId].email === email) {
                        console.log('check email', email);
                        return userId;

                    }
                }
                return null;
            }

            function checkPassword(userId,password) {
                console.log(userId, password);
                if (users[userId].password = password) {
                    todosService.setUser(userId);
                    $location.path('/lists');
                    return true
                }
                return false;
            }
            return {
                checkEmail: checkEmail,
                checkPassword: checkPassword
                // loginUser: loginUser
            }
        })
})();