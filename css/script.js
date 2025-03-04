function initMap() {
  const mapOptions = {
      zoom: 8,
      center: { lat: 51.0447, lng: -114.0719 },
      mapTypeId: 'hybrid'
  };
  const map = new google.maps.Map(document.getElementById('map'), mapOptions);

  // Add a marker
  const marker = new google.maps.Marker({
      position: { lat: 51.0447, lng: -114.0719 },
      map: map,
      title: 'Calgary, AB'
  });

  // Add an info window
  const infoWindow = new google.maps.InfoWindow({
      content: '<h2>Calgary, AB</h2><p>Welcome to Calgary!</p>'
  });
  marker.addListener('click', () => {
      infoWindow.open(map, marker);
  });
}

// Picture Slider
const slides = document.querySelectorAll('.slides img');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
      slide.style.display = (i === index) ? 'block' : 'none';
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentIndex);
  setInterval(nextSlide, 3000); 
});
