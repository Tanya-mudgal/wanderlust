const redIcon = new L.Icon({
        iconUrl: '/favicon.svg',
        shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

const reversedCoords = [coordinates[1], coordinates[0]]; // for Leaflet
 // Initialize the map
const map = L.map('map').setView(reversedCoords, 13);  // 13 is zoom level

// Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

// Add marker
    L.marker(reversedCoords, { icon: redIcon }).addTo(map)
        .bindPopup(
            `<h5>${listing.location}</h5>
            <p>Exact location will be provided after booking.</p>`
        )
    .openPopup();
        
    L.circle(reversedCoords, {
        color: 'transparent',   // Border color
        fillColor: '#f03',     // Fill color
        fillOpacity: 0.3,
        radius: 800            // In meters
    }).addTo(map);