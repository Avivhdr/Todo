(function () {
    angular.module('myApp')
        .factory('newTitleModalService', function ($uibModal) {

            function inputNewTitleModal(newTitleObj) {
                var modalInstance = $uibModal.open({
                    restrict: "E",
                    templateUrl: './app/components/modal/editListTitle.Modal.html',
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

        .controller('InputNewTitleModalController', function ($uibModalInstance, newTitleObj) {
            var ctrl = this;
            ctrl.newTitleObj = newTitleObj;
            ctrl.select = select;
            ctrl.save = $uibModalInstance.close;
            ctrl.cancel = function(){
                $uibModalInstance.dismiss('cancel');
            };

            /////////

            function select (e){
                e.target.setSelectionRange(0, e.target.value.length);
            }
        })

})();