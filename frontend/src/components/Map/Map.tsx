import React from "react";
import { MapContainer, TileLayer, Marker, CircleMarker} from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster'


interface MapProps {
    sightings: Array<Array<number>>;
    showSighting: (index: number) => void;
}

const Map: React.FC<MapProps> = (props) => {
    const { sightings, showSighting } = props;

    return (
        <MapContainer center={[41.6916667,-97.4841667]} zoom={4.0}  scrollWheelZoom={true}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <MarkerClusterGroup
                chunkedLoading
            >
                {sightings.map((sighting, index) => (
                    <CircleMarker
                        key={index}
                        center={[
                            sighting[0],
                            sighting[1]
                        ]}
                        radius={7}
                        color="#4F8A39"
                        eventHandlers={{click: () => showSighting(index)}}
                    >
                    </CircleMarker>
                ))}
            </MarkerClusterGroup>
        </MapContainer>
    )
}

export default Map;