import React from "react";
import { MapContainer, TileLayer} from 'react-leaflet';

const Map: React.FC = () => {
    return (
        <MapContainer center={[51.54,-0.18]} zoom={10.8} scrollWheelZoom={true}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
        </MapContainer>
    )
}

export default Map;