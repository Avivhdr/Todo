(function () {
    angular
        .module('myApp')
        .directive('googlePlaces', function(){
        return {
            restrict:'EA',
            scope: {location:'='},
            link: function($scope, elem, attrs){
                var autocomplete = new google.maps.places.Autocomplete(elem[0], {});
                google.maps.event.addListener(autocomplete, 'place_changed', function() {
                    var place = autocomplete.getPlace();
                    console.log(elem.val());
                    $scope.location = {
                        location: elem.val(),
                        latitude: place.geometry.location.lat(),
                        longitude: place.geometry.location.lng()
                    };
                    $scope.$apply();
                });
            }
        }
    });
})();










