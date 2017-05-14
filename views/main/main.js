(function () {
    angular.module("app", ['serverService', 'dataService', 'ui.router', "ui.bootstrap", 'ngAnimate', 'ngTouch'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/block");
            $stateProvider
                .state('login', {
                    url: "/login",
                    template: '<log-in></log-in>'
                })
                .state('block', {
                    url:"/block",
                    template: '<block-lists></block-lists>'
                })
                .state('lists', {
                    url: "/lists",
                    template: '<todo-lists></todo-lists>'
                })
                .state('lists.list', {
                    url: ":listName",
                    template: '<curr-list></curr-list>'
                })
                .state('lists.list.todo', {
                    url: "/:todoId",
                    template: '<curr-todo></curr-todo>'
                })
        })
        .controller('logInController', function (loginService, todosService, $uibModal) {
            var ctrl = this;
            ctrl.users = todosService.getUsers;
            ctrl.email = '';
            ctrl.password = '';
            ctrl.loginUser = loginService.loginUser;


            ctrl.open = function () {
                $uibModal.open({
                    templateUrl: './views/main/modalLogIn.html',
                    controller: function ($uibModalInstance) {
                        var ctrl = this;

                        ctrl.ok = function () {

                        };
                        ctrl.cancel = function () {

                        }
                    },
                    controllerAs: 'ctrl'
                })
            }

        })
        .directive('logIn', function () {
            return {
                restrict: 'E',
                templateUrl: './views/main/logIn.html',
                controller: 'logInController',
                controllerAs: 'ctrl'
            }
        })
        .controller('listsController', function (todosService, $uibModal) {

            var ctrl = this;
            ctrl.newList = '';
            ctrl.todos = todosService.getTodos();
            ctrl.addNewList = todosService.addNewList.bind(ctrl);
            ctrl.deleteList = todosService.deleteList;
            ctrl.renameList = todosService.renameList;
            /*
             ctrl.email;
             ctrl.password;

             ctrl.open = function() {
             $uibModal.open({
             templateUrl: './views/main/myModalContent.html',
             controller: function ($uibModalInstance) {

             var ctrl = this;

             ctrl.ok = function () {
             $uibModalInstance.close(ctrl.email, ctrl.password);
             console.log(ctrl.email,ctrl.password);
             };

             ctrl.cancel = function () {
             $uibModalInstance.dismiss('cancel');
             };

             },
             controllerAs: 'ctrl'
             })
             };

             */

        })
        .directive('todoLists', function () {
            return {
                restrict: 'E',
                templateUrl: './views/main/main.html',
                controller: 'listsController',
                controllerAs: 'ctrl'
            }
        })
        .controller("currListController", function (todosService, $stateParams) {
            var ctrl = this;
            ctrl.newTodo = '';
            todosService.setCurrList($stateParams);
            ctrl.users = todosService.getUsers();
            ctrl.state = todosService.getState();
            ctrl.todos = todosService.getTodos();
            ctrl.completeTodo = todosService.completeTodo;

            ctrl.addNewTodo = function (newTodo) {
                var newDate = new Date();
                var newTodoObj = {
                    id: Date.now(), //new id service
                    title: newTodo,
                    completed: false,
                    details: '',
                    created: newDate.toDateString(),
                    daysPassed: 0
                };
                todosService.addNewTodo.call(ctrl, newTodoObj);
            };
        })
        .directive('currList', function () {
            return {
                restrict: 'E',
                templateUrl: './views/main/currList.html',
                controller: 'currListController',
                controllerAs: 'ctrl'
            }
        })
        .controller('currTodoController', function (todosService, $stateParams) {
            var ctrl = this;
            todosService.setCurrTodo($stateParams);
            ctrl.todos = todosService.getTodos();
            ctrl.state = todosService.getState();
            ctrl.deleteTodo = todosService.deleteTodo;
        })
        .directive('currTodo', function () {
            return {
                restrict: 'E',
                templateUrl: "./views/main/currTodo.html",
                controller: 'currTodoController',
                controllerAs: 'ctrl'
            }
        })
        .controller('blockListscontroller', function (todosService, $stateParams) {
            var ctrl = this;
            ctrl.state = todosService.getState();
            ctrl.users = todosService.getUsers();
            ctrl.todos = todosService.getTodos();
        } )
        .directive('blockLists',function () {
            return {
                restrict: 'E',
                templateUrl: "./views/main/blockLists.html",
                controller: 'currListController',
                controllerAs: 'ctrl'
            }
        })
})();
