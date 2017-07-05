(function () {
    angular.module('myApp')

        .controller('mainListsController', function (localStorageService, mainListsService, $uibModal, utilService, newTitleModalService, $state) {
            var ctrl = this;
            ctrl.newListTitle = '';
            ctrl.name = 'yuri';
            ctrl.name2 = 'aviv';
            localStorageService.initLocalStorage('lists');
            ctrl.userLists = localStorageService.getStorageSync('lists');
            ctrl.firstListId = (ctrl.userLists[0] !== undefined) ? ctrl.userLists[0].id : undefined;

            ctrl.openList = function (listId) {
                if (listId !== undefined) {
                    $state.go('lists.list', {listId: listId});
                    //todo
                }
            };


            ctrl.addNewList = function (newTitleObj) {
                if (newTitleObj.newListTitle) {
                    console.log('addNewList - listTitle', newTitleObj.newListTitle);
                    if (newTitleObj.newListTitle && utilService.doesItemTitleExists(ctrl.userLists, newTitleObj.newListTitle) === false) {
                        var newListObj = new mainListsService.List(newTitleObj.newListTitle);
                        //copy the array and manipulate the new array
                        ctrl.userLists.push(newListObj);
                        ctrl.userLists = localStorageService.populateStorage('lists', ctrl.userLists);
                        ctrl.newListTitle = '';
                    } else {
                        newTitleObj.cb = ctrl.addNewList;
                        newTitleModalService.inputNewTitleModal(newTitleObj);
                    }
                }
            };

            ctrl.openList(ctrl.firstListId)

        })
        .directive('mainLists', function () {
            return {
                replace: true, //todo
                restrict: 'E',
                templateUrl: './views/mainLists/mainLists.html',
                controller: 'mainListsController',
                controllerAs: 'ctrl'
            }
        })
})();