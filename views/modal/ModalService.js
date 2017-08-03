(function () {

    serviceModule.factory('modalService', function ($uibModal) {

    function inputNewTitleModal(data) {
        var modalInstance = $uibModal.open({
            templateUrl: './views/modal/InputNewTitleModal.html',
            controller: 'InputNewTitleModalController',
            controllerAs: 'ctrl',
            resolve: {
                data: function () {
                    return data
                }
            }
        });

        modalInstance.result.then(handleNewName(data), handleError);
        function handleNewName(data) {
            return data.cb;
        }
        function handleError(err) {
            console.log(err);
        }
    }

    return {
        inputNewTitleModal: inputNewTitleModal
    }
})
})
();