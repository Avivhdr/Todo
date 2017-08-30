(function () {
    angular
        .module('serviceModule')
        .factory('utilService', utilService);

    function utilService() {

        var factory = {
            getItemFromArrayById: getItemFromArrayById,
            doesItemTitleExists: doesItemTitleExists,
            returnIndexFromItemId: returnIndexFromItemId,
            calcDates:calcDates
        };

        return factory;

        //////////

        function getItemFromArrayById(array, itemId) {
            return array.find(function (item) {
                return item.id === itemId;
            })
        }

        function doesItemTitleExists(array, itemTitle) {
            var listIndex = array.findIndex(function (item) {
                return item.title === itemTitle;
            });
            return listIndex !== -1
        }

        function returnIndexFromItemId(array,itemId) {
            var Index = array.findIndex(function (item) {
                return item.id === itemId;
            });
            if (Index !== -1) {
                return Index
            } else {
                console.log('returnIndexFromItemId: Fail!')
            }
        }

        function calcDates(date){
            var one_day=1000*60*60*24;
            var date1 = Date.parse(date);
            var date2 = Date.now();
            var difference_ms = date2 - date1;
            return Math.round(difference_ms/one_day);
        }

    }

})
();