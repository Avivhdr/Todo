(function () {
    angular.module("app", ['serverService', 'dataService', 'ui.router', "ui.bootstrap", 'ngAnimate', 'ngTouch'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/login");
            $stateProvider
                .state('login', {
                    url: "/login",
                    template: '<log-in></log-in>'
                })
                // .state('block', {
                //     url:"/block",
                //     template: '<block-lists></block-lists>'
                // })
                .state('lists', {
                    url: "/lists",
                    template: '<todo-lists></todo-lists>'
                })
                .state('lists.list', {
                    url: ":listName",
                    template: '<curr-list></curr-list>'
                })
            // .state('lists.list.todo', {
            //     url: "/:todoId",
            //     template: '<curr-todo></curr-todo>'
            // })
        })


        .controller('logInController', function (loginService, todosService) {
            var ctrl = this;
            todosService.getUsers().then( function(result) {
                ctrl.users = result;
                ctrl.usere = {};
            });
            todosService.getUsersnp()

            ctrl.user = {
                email: '',
                firstName: '',
                lastName: '',
                password: '',
                password2: '',
            };
            ctrl.checkEmail = loginService.checkEmail;
            ctrl.checkPassword = loginService.checkPassword;
            ctrl.createAccount = todosService.createAccount;
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
            ctrl.UserLists = todosService.getUserLists();
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


        .controller("currListViewController", function (todosService, $stateParams, $uibModal) {
            var ctrl = this;
            ctrl.newTodo = '';
            todosService.setCurrList($stateParams);
            ctrl.state = todosService.getState();
            ctrl.userLists = todosService.getUserLists();
            ctrl.completeTodo = todosService.completeTodo;

            ctrl.addNewTodo = function (newTodo) {
                var newDate = new Date();
                var newTodoObj = {
                    id: null, //new id service
                    title: newTodo,
                    completed: false,
                    details: '',
                    created: newDate.toDateString(),
                    daysPassed: 0
                };
                todosService.addNewTodo.call(ctrl, newTodoObj);
            };

            ctrl.open = function (todoId) {
                todosService.setCurrTodo(todoId);
                //todoService.setCurrList(listId);   in blockview
                $uibModal.open({

                    templateUrl: './views/main/currTodo.html',
                    controller: 'currTodoModalController',
                    controllerAs: 'ctrl'
                })
            }
        })
            .directive('currList', function () {
                return {
                    restrict: 'E',
                    // scope: {
                    //     title: '@'
                    // },
                    templateUrl: './views/main/currList.html',
                    controller: 'currListViewController',
                    controllerAs: 'ctrl'
                }
            })


            .controller('currTodoModalController', function (todosService, $uibModalInstance, $stateParams) {
                var ctrl = this;
                // ctrl.userLists = todosService.getUserLists();
                ctrl.state = todosService.getState();
                ctrl.todo = todosService.getTodo();
                ctrl.deleteTodo = todosService.deleteTodo;
                // debugger;
                ctrl.ok = function () {
                debugger;
                    // $uibModalInstance.close();
                };
                ctrl.cancel = function () {
                    // $uibModalInstance.dismiss('cancel');
                };
            })
            // .directive('currTodo', function () {
            //     return {
            //         restrict: 'E',
            //         templateUrl: "./views/main/currTodo.html",
            //         controller: 'currTodoController',
            //         controllerAs: 'ctrl'
            //     }
            // })


            // .controller('blockListscontroller', function (todosService, $stateParams) {
            //     var ctrl = this;
            //     ctrl.state = todosService.getState();
            //     ctrl.users = todosService.getUsers();
            //     // ctrl.todos = todosService.getTodos();
            // })
            // .directive('blockLists', function () {
            //     return {
            //         restrict: 'E',
            //         templateUrl: "./views/main/blockLists.html",
            //         controller: 'currListController',
            //         controllerAs: 'ctrl'
            //     }
            // })
})();
