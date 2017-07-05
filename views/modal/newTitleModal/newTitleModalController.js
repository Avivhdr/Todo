(function () {
    angular.module('serviceModule')

        .factory('newTitleModalService', function ($uibModal) {

            function inputNewTitleModal(newTitleObj) {
                var modalInstance = $uibModal.open({
                    restrict: "E",
                    templateUrl: './views/modal/newTitleModal/InputNewTitleModal.html',
                    controller: 'InputNewTitleModalController',
                    controllerAs: 'ctrl',
                    resolve: {
                        newTitleObj: function () {
                            return newTitleObj;
                        }
                    }

                });

                modalInstance.result
                    .then(function (result) {
                        result.cb(result);
                    })
                    .catch(handleError);

                function handleError(err) {
                    console.log(err);
                }
            }
            return {
                inputNewTitleModal: inputNewTitleModal
            }
        })
        //     .factory('modalService', function ($uibModal) {
        //
        //     // function inputNewTitleModal() {
        //     //     var modalInstance = $uibModal.open({
        //     //         template: '<new-title list-title="listTitle" cd="ctrl.addNewList()"><new-title>'
        //     //         // controllerAs: 'ctrl'
        //     //         // resolve: {
        //     //         //     data: function () {
        //     //         //         return data
        //     //         //     }
        //     //         // }
        //     //     });
        //     //
        //     //     modalInstance.result.then(handleNewName(data), handleError);
        //     //     function handleNewName(data) {
        //     //         return data.cb;
        //     //     }
        //     //     function handleError(err) {
        //     //         console.log(err);
        //     //     }
        //     // }
        //     // function inputNewTitleModal(data) {
        //     //     var modalInstance = $uibModal.open({
        //     //         templateUrl: './views/modal/InputNewTitleModal.html',
        //     //         controller: 'InputNewTitleModalController',
        //     //         controllerAs: 'ctrl',
        //     //         resolve: {
        //     //             data: function () {
        //     //                 return data
        //     //             }
        //     //         }
        //     //     });
        //     //
        //     //     modalInstance.result.then(handleNewName(data), handleError);
        //     //     function handleNewName(data) {
        //     //         return data.cb;
        //     //     }
        //     //     function handleError(err) {
        //     //         console.log(err);
        //     //     }
        //     // }
        //
        //     return {
        //         inputNewTitleModal: inputNewTitleModal
        //     }
        // })

        .controller('InputNewTitleModalController', function ($uibModalInstance, newTitleObj) {
            var ctrl = this;
            ctrl.newTitleObj = newTitleObj;

            ctrl.save = function () {
                $uibModalInstance.close(ctrl.newTitleObj)
            };
            ctrl.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        })

})();