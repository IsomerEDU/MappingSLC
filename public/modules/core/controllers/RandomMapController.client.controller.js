'use strict';

// Contacts controller
angular.module('core').controller('RandomMapController', ['$scope', '$stateParams', '$location', 'RandomMapService',
    function($scope, $stateParams, $location, RandomMapService) {

        $scope.staticMap = RandomMapService.getRandomMap();

    }
]);
