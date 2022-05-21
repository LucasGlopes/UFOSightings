import React from "react";
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

interface MapProps {
    sightings: Array<Array<number>>;
    showSighting: (index: number) => void;
}

const Map: React.FC<MapProps> = (props) => {
    const { sightings, showSighting } = props;

    return (
        <MapContainer center={[41.6916667,-97.4841667]} zoom={4.7} scrollWheelZoom={true}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />

            {sightings.map((sighting, index) => (
                <Marker
                    key={index}
                    position={[
                        sighting[0],
                        sighting[1]
                    ]}
                    eventHandlers={{click: () => showSighting(index)}}
                >
                </Marker>
            ))}
        </MapContainer>
    )
}

export default Map;