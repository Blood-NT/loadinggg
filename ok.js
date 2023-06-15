if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
} else {
  console.log("Trình duyệt không hỗ trợ Geolocation.");
}

function showPosition(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  console.log("Latitude: " + latitude + ", Longitude: " + longitude);
}
