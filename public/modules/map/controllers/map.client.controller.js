'use strict';

angular.module('map').controller('MapController', ['$scope', 'Authentication','MapboxApiKeys',
    function ($scope, Authentication,MapboxApiKeys) {

        $scope.markers = true;
        $scope.filters = true;

        MapboxApiKeys.getApi()
            .success(function(data){
                mapFunction(data.mapboxKey, data.mapboxSecret);
                console.log("This is the Map Key: " + data.mapboxKey);
            })
            .error(function(data,status){
                alert('Failed to load Mapbox API key. Status: ' + status);
            });

        var mapFunction = function (key, accessToken) {

            //creates a Mapbox Map
            L.mapbox.accessToken = accessToken;
            var map = L.mapbox.map('map', key)
                .setView([40.773, -111.902], 12);

            //var filters = document.getElementById('filters');
            //var checkboxes = document.getElementsByClassName('filter');
            //
            //function change() {
            //    // Find all checkboxes that are checked and build a list of their values
            //    var on = [];
            //    for (var i = 0; i < checkboxes.length; i++) {
            //        if (checkboxes[i].checked) on.push(checkboxes[i].value);
            //    }
            //    // The filter function takes a GeoJSON feature object
            //    // and returns true to show it or false to hide it.
            //    map.featureLayer.setFilter(function (f) {
            //        // check each marker's symbol to see if its value is in the list
            //        // of symbols that should be on, stored in the 'on' array
            //        return on.indexOf(f.properties['marker-symbol']) !== -1;
            //    });
            //    return false;
            //}
            //
            //// When the form is touched, re-filter markers
            //filters.onchange = change;
            //// Initially filter the markers
            //change();


            L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
                maxZoom: 18,
                id: key
            })
                //;

                ////todo complete project schema with the following properties and call on them to populate what is currently hard-coded
                //L.mapbox.featureLayer({
                //    // this feature is in the GeoJSON format: see geojson.org
                //    // for the full specification
                //    type: 'Feature',
                //    geometry: {
                //        type: 'Point',
                //        // coordinates here are in longitude, latitude order because
                //        // x, y is the standard for GeoJSON and many formats
                //        coordinates: [
                //            -111.902,
                //            40.773
                //        ]
                //    },
                //    properties: {
                //        title: 'title',
                //        description: 'description',
                //        // one can customize markers by adding simplestyle properties
                //        // https://www.mapbox.com/foundations/an-open-platform/#simplestyle
                //        //see also: https://www.mapbox.com/maki/
                //        'marker-size': 'large',
                //        'marker-color': '#BE9A6B',
                //        'marker-symbol': 'cross'
                //    }
                //})
                .addTo(map);


            /**
             *
             * Add ability to toggle markers based on categories, where categories is a variable
             *
             */


        };

    }
]);
