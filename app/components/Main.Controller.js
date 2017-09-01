(function () {
    angular
        .module('myApp')
        .controller('MainController', MainController)
        .component('main', mainComponent());

    function mainComponent() {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: './app/components/main.html',
            controller: 'MainController',
            controllerAs: 'ctrl'
        }
    }

    MainController.$inject = ['localStorageService', 'listItemConstructor', 'utilService', 'newTitleModalService', '$state'];

    function MainController(localStorageService, listItemConstructor, utilService, newTitleModalService, $state) {

        var ctrl = this;
        ctrl.newListTitle = '';
        ctrl.userLists = localStorageService.getStorageSync('lists');
        ctrl.firstListId = (ctrl.userLists[0] !== undefined) ? ctrl.userLists[0].id : undefined;
        ctrl.openList = openList;
        ctrl.addNewList = addNewList;

        ctrl.openList(ctrl.firstListId);

        //////////

        function openList(listId) {
            if (listId !== undefined && listId !== ctrl.currListId) {
                $state.go('main.list', {listId: listId});
                window.location='#list';
                ctrl.currListId = listId;
            }
        }

        function addNewList(newTitleObj) {
            if (newTitleObj.newListTitle) {
                if (newTitleObj.newListTitle && utilService.doesItemTitleExists(ctrl.userLists, newTitleObj.newListTitle) === false) {
                    var newListObj = new listItemConstructor.List(newTitleObj.newListTitle);
                    ctrl.userLists.push(newListObj);
                    ctrl.userLists = localStorageService.populateStorage('lists', ctrl.userLists);
                    ctrl.newListTitle = '';
                } else {
                    newTitleObj.cb = ctrl.addNewList;
                    newTitleModalService.inputNewTitleModal(newTitleObj);
                }
            }
        }

    }

})();