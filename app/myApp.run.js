(function () {
    angular
        .module('myApp')
        .run(run);

    run.$inject = ['localStorageService'];

    function run(localStorageService) {
        localStorageService.initLocalStorage('lists');
    }

})();
