function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: { 
            lat:51.426078,
            lng:0.015985
        }
    });
    
    var labels ="ABCDEFGHIJKLMONPQRSTUVWXYZ";

    var locations = [
        {lat:51.426083, lng:0.016000},
        {lat:51.501967, lng:-0.144780},
        {lat:51.499910, lng:-0.2024327},

        ];

        
    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
} 