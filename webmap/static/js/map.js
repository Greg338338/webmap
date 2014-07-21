/* BASE LAYERS
==============
- Basemap Topo
- Basemap Imagery
*/

var topographic = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}');
var imagery = L.tileLayer('http://khms0.google.ca/kh/v=150&src=app&x={x}&y={y}&z={z}');

/* CREATE MAP
=============
- Center Coordinate
- Zoom
- Predefined Layers
- Max extent
*/

var map = L.map('map', {
    center: [44.263, -76.543],
    zoom: 12,
    /* maxBounds: [[43.263, -77.543],[45.263, -75.543]], */
    layers: [topographic],
    zoomControl: false
});


/* BUTTONS
==========
*/

$("#button-zoom-in").on("click", function(event) {
    map.zoomIn(1);
});


$("#button-zoom-out").on("click", function(event) {
    map.zoomOut(1);
});

$("#button-basemap").on("click", function(event) {
    var alt = $(this).attr('alt');

    if (alt == 'imagery') {
        $(this).attr('alt','topographic');
        $(this).attr('src','/static/images/thumbnail-topographic.png');
        $('#basemap-text').html('Topographic');
        map.removeLayer(topographic);
        map.addLayer(imagery);
    }
    else if (alt == 'topographic') {
        $(this).attr('alt','imagery');
        $(this).attr('src','/static/images/thumbnail-imagery.png');
        $('#basemap-text').html('Imagery');
        map.removeLayer(imagery);
        map.addLayer(topographic);
    }
});

$('#search-text').on('keydown', function (event) {
    /* Pressing ENTER */
    if (event.which == 13) {
        location_text = $("#search-text").val();
        geocode(location_text);
    }
});

$("#button-search").on("click", function(event) {
    location_text = $("#search-text").val();
    geocode(location_text);
});

$(".geocode").on("click", function(event) {
    location_text = $(this).attr('data-location');
    geocode(location_text);
});



/* FUNCTIONS
============
*/


function geocode(location_text){
    if (location_text) {
        $.ajax({
            type: "POST",
            url: "/geocode/" + location_text
        })
        .done(function( geocode ) {
            bbox = geocode.bbox;
            if (bbox) {
                northeast = [bbox.northeast.lat, bbox.northeast.lng];
                southwest = [bbox.southwest.lat, bbox.southwest.lng];
                map.fitBounds([southwest, northeast]);
            }
            else if (geocode.ok) {
                latlng = [geocode.lat, geocode.lng];
                map.panTo(latlng);
            }
        });
    }
}