'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


if (typeof window !== 'undefined') {
  delete (L.Icon.Default.prototype as any)._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: '/portfolio-page/images/marker-icon-2x.png',
    iconUrl: '/portfolio-page/images/marker-icon.png',
    shadowUrl: '/portfolio-page/images/marker-shadow.png',
  });
}

const Map = () => {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <MapContainer
        center={[46.9481, 7.4474]} 
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[46.9481, 7.4474]}>
          <Popup>Bern, Schweiz - Mein Standort!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
