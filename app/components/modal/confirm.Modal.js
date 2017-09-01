(function () {
    angular.module('myApp')
        .factory('confirmModalService', function ($uibModal) {

            function confirmModal(cb, list) {
                var modalInstance = $uibModal.open({
                    restrict: "E",
                    templateUrl: './app/components/modal/confirm.Modal.html',
                    controller: 'confirmModalController',
                    controllerAs: 'ctrl',
                    resolve: {
                        data: function () {
                            return {
                                cb: cb,
                                list: list
                            };
                        }
                    }

                });

                modalInstance.result
                    .then(function (result) {
                        result.cb(result.list);
                    })
                    .catch(handleError);

                function handleError(err) {
                    console.log(err);
                }
            }
            return {
                confirmModal: confirmModal
            }
        })

        .controller('confirmModalController', function ($uibModalInstance, data) {
            var ctrl = this;

            ctrl.save = function(){
                $uibModalInstance.close(data);
            };

            ctrl.cancel = function(){
                $uibModalInstance.dismiss('cancel');
            };



        })

})();