function initMap() {
  const mapOptions = {
      zoom: 8,
      center: { lat: 51.0447, lng: -114.0719 },
      mapTypeId: 'terrain'
  };
  const map = new google.maps.Map(document.getElementById('map'), mapOptions);


  const marker = new google.maps.Marker({
      position: { lat: 51.0447, lng: -114.0719 },
      map: map,
      title: 'Calgary, AB'
  });

 
  const infoWindow = new google.maps.InfoWindow({
      content: '<h2>Calgary, AB</h2><p>Welcome to Calgary!</p>'
  });
  marker.addListener('click', () => {
      infoWindow.open(map, marker);
  });

  
  window.map = map;
}

function goToJohnstonCanyon() {
  const johnstonCanyon = { lat: 51.2453, lng: -115.8396 };
  window.map.setCenter(johnstonCanyon);
  window.map.setZoom(10);

  // Add a marker for Johnston Canyon
  const marker = new google.maps.Marker({
      position: johnstonCanyon,
      map: window.map,
      title: 'Johnston Canyon'
  });

  // Add an info window for Johnston Canyon
  const infoWindow = new google.maps.InfoWindow({
      content: '<h2>Johnston Canyon</h2><p>Welcome to Johnston Canyon!</p>'
  });
  marker.addListener('click', () => {
      infoWindow.open(window.map, marker);
  });
}

function goToLakeLouise() {
  const lakeLouise = { lat: 51.4254, lng: -116.1773 };
  window.map.setCenter(lakeLouise);
  window.map.setZoom(10);

  // Add a marker for Lake Louise
  const marker = new google.maps.Marker({
      position: lakeLouise,
      map: window.map,
      title: 'Lake Louise'
  });

  // Add an info window for Lake Louise
  const infoWindow = new google.maps.InfoWindow({
      content: '<h2>Lake Louise</h2><p>Welcome to Lake Louise!</p>'
  });
  marker.addListener('click', () => {
      infoWindow.open(window.map, marker);
  });
}

function goToPlainOfSixGlaciers() {
  const plainOfSixGlaciers = { lat: 51.4155, lng: -116.2286 };
  window.map.setCenter(plainOfSixGlaciers);
  window.map.setZoom(10);

  // Add a marker for Plain of Six Glaciers
  const marker = new google.maps.Marker({
      position: plainOfSixGlaciers,
      map: window.map,
      title: 'Plain of Six Glaciers'
  });

  // Add an info window for Plain of Six Glaciers
  const infoWindow = new google.maps.InfoWindow({
      content: '<h2>Plain of Six Glaciers</h2><p>Welcome to Plain of Six Glaciers!</p>'
  });
  marker.addListener('click', () => {
      infoWindow.open(window.map, marker);
  });
}