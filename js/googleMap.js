function initialize() {
  var miles = 30;
  var map = new google.maps.Map(document.getElementById("googleMap"),{
    zoom: 8,
    center: new google.maps.LatLng(40.0274, -105.2519),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  var circle = new google.maps.Circle({
    center: new google.maps.LatLng(40.0274, -105.2519),
    radius: miles * 1609.344,
    fillColor: "#FF0000",
    fillOpacity: .2,
    strokeOpacity: 0.0,
    strokeWeight: 0,
    map: map
});
}
   google.maps.event.addDomListener(window, 'load',initialize);