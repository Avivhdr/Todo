(function () {
    angular
        .module('serviceModule')
        .factory('localStorageService', localStorageService);

    localStorageService.$inject = ['dataService'];

        function localStorageService(dataService) {

        var factory = {
            initLocalStorage: initLocalStorage,
            populateStorage: populateStorage,
            getStorageSync: getStorageSync
        };

        return factory;

        function initLocalStorage(key) {
            if (!storageAvailable('localStorage')) {
                alert('LocalStorage not available! Open in different browser!');
            } else {
                initPopulateStorage(key);
            }
        }

        function storageAvailable() {
            //checks availability for local storage
            try {
                var storage = window['localStorage'],
                    x = '__storage_test__';
                storage.setItem(x, x);
                storage.removeItem(x);
                return true;
            }
            catch (e) {
                console.log(e);
            }
        }

        function initPopulateStorage(key) {
            // populate local storage in case of first entry
            if (!localStorage.getItem(key)) {
                populateStorage(key);
            }
        }

        function populateStorage(key, item) {
            if (!item) {
                localStorage.setItem(key, angular.toJson(dataService.newUserLists))
            } else {
                localStorage.setItem(key, angular.toJson(item))
            }
            return angular.fromJson(localStorage.getItem(key));
        }

        function getStorageSync(item) {
            return angular.fromJson(localStorage.getItem(item));
        }
    }

})();