var gmsrvs = {//singleton
    set:{
        list:function(map,latLngLiteralcollection,markerIcon,callback){
            var markerCollection = [];
            for(var i =0;i<latLngLiteralcollection.length;i++){
                markerCollection[i] = new google.maps.Marker({
                    position: latLngLiteralcollection[i],
                    map: map,
                    icon:markerIcon?markerIcon:null
                });
                if(callback){
                    callback(markerCollection[i],i);
                }
            }
            return markerCollection;
        }
    },
    compare: {//функции сравнения
        byLatLang: function (endPoint) {
            //функция сравнения по  дистанции через LatLang, example {lat:59.93,lng:30.33}
            return function (a, b) {
                var latlangA = new google.maps.LatLng(a.lat, a.lng);
                var latlangB = new google.maps.LatLng(b.lat, b.lng);
                var distanceA = google.maps.geometry.spherical.computeDistanceBetween(latlangA, endPoint);
                var distanceB = google.maps.geometry.spherical.computeDistanceBetween(latlangB, endPoint);
                return distanceA - distanceB;
            }
        },
        byLatLangObj: function (endPoint) {
            //функция сравнения по  дистанции для Marker,
            //example new google.maps.Marker({position: point,map: map});
            return function (a, b) {
                var distanceA = google.maps.geometry.spherical.computeDistanceBetween(a.position, endPoint);
                var distanceB = google.maps.geometry.spherical.computeDistanceBetween(b.position, endPoint);
                return distanceA - distanceB;
            }
        }
    },
    infoWindow: {//функции для работы с info window
        closeAll: function (map, markers, infoName) {
            //закрывает все info window коллекци маркеров на карте
            infoName = infoName || 'info';
            for (var i = 0; i < markers.length; i++) {
                try {
                    markers[i][infoName].close(map, markers[i]);
                } catch (e) {
                }
            }
        }
    },
    marker: {//функции для работы с маркером
        removeAll: function (markers) {
            for (var i = 0; i < markers.length; i++) {
                markers[i].setMap(null);
            }
        },
        remove: function (marker) {
            marker[i].setMap(null);
        },
        setAll: function (points, map, icon) {
            //создает маркеры из координат и устанавливает их на карту, example points [{lat:59.93,lng:30.33}]
            var markers = [];
            for (var i = 0; i < points.length; i++) {
                markers[i] = new google.maps.Marker({
                    position: points[i],
                    map: map,
                    icon: icon
                });
            }
            return markers;
        }
    },
    geocoder: {//функции для работы с геокодером
        geocoder:null,//объект google.maps.Geocoder
        getLatLngByAddress: function (address,city,callback) {
            city = city || '';
            this.geocoder.geocode({'address': city + ', ' + address}, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    try{callback({
                        lat: results[0].geometry.location.lat(),
                        lng: results[0].geometry.location.lng()
                    })}catch(e){};
                } else {

                }
            });
        },
        getAddressByLatLng: function (latlng,callback1,callback2) {
            var defer = $q.defer();
            this.geocoder.geocode({'location': latlng}, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    defer.resolve(results);
                } else {

                    try{callback2(status)}catch(e){};
                }
            });
            return defer.promise;
        }
    },
    ways:{//функции для работы с путями
        directionsService:null,
        directionsDisplay:null,
        removeAll:function(ways){
            for(var i=0;i<ways.length;i++){//ways
                for(var j=0;j<ways[i].line.length;j++){//lines
                    ways[i].line[j].setMap(null);
                }
            }
        },
        calculateAndDisplayRoute:function(start, end,callback) {
            var that = this;
            this.directionsService.route({
                origin: start,
                destination: end,
                travelMode: google.maps.TravelMode.WALKING
            }, function(response, status) {
                if (status === google.maps.DirectionsStatus.OK){
                    // directionsDisplay.setDirections(response);


                    callback(response, start, end);
                    //that.renderDirectionsPolylines(response, start, end);
                }else{
                    window.alert('Directions request failed due to ' + status);
                }
            });
        },
        renderDirectionsPolylines:function(response, start, end,map){
            var idx;
            var idx1;
            var idx2;
            var legs = response.routes[0].legs;
            var ways = [];
            //var bounds = new google.maps.LatLngBounds();
            var polys = polylines(google);
            for (var i = 0; i < legs.length; i++){//а вот эта весь путь
                idx1 = ways.length;//меняется idx1
                ways[idx1] = {line:[]};
                var steps = legs[i].steps;
                for (var j = 0; j < steps.length; j++) {//вот эта штука херачит прямые добавляет на карту те на карте они являются просто прямыми
                    var nextSegment = steps[j].path;
                    idx2 = ways[idx1].line.length;//меняется idx2
                    ways[idx1].line[idx2] = new google.maps.Polyline(polys.polylineOptions);
                    if (steps[j].travel_mode == google.maps.TravelMode.WALKING){
                        ways[idx1].line[idx2].setOptions(polys.walkingPolylineOptions)
                    }
                    for (var k = 0; k < nextSegment.length; k++) {
                        ways[idx1].line[idx2].getPath().push(nextSegment[k]);
                        //bounds.extend(nextSegment[k]);
                    }

                    ways[idx1].line[idx2].setMap(map);//Рисует линию
                }
            }
            // if (google.maps.geometry.spherical.computeDistanceBetween(start, ways[idx].getPath().getAt(0)) > 1) {
            // 	// add "dotted line"
            // 	var e1 = new google.maps.Polyline(walkingPolylineOptions2);
            // 	e1.setPath([ways[idx].getPath().getAt(ways[idx].getPath().getLength() - 1), end]);
            // 	e1.setMap(map);
            // }
            // if (google.maps.geometry.spherical.computeDistanceBetween(end, ways[idx].getPath().getAt(ways[idx].getPath().getLength() - 1)) > 1) {
            // 	// add "dotted line"
            // 	e2 = new google.maps.Polyline(walkingPolylineOptions2);
            // 	e2.setPath([ways[idx].getPath().getAt(ways[idx].getPath().getLength() - 1), end]);
            // 	e2.setMap(map);
            // }
            //map.fitBounds(bounds);//AUTOPAN
            return ways;
        }
    },
    view:{
        set:{
            zoomOnCollection:function(map,latLngLiteralCollection){
                var bounds = new google.maps.LatLngBounds();
                latLngLiteralCollection.forEach((el)=>{
                    bounds.extend(el);
                });
                map.panTo(bounds.getCenter());
                return bounds;
            }
        }
    }
};