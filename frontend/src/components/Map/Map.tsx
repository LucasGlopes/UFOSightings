import React from "react";
import { MapContainer, TileLayer, Marker} from 'react-leaflet';
import * as L from "leaflet";
import MarkerClusterGroup from 'react-leaflet-markercluster';


interface MapProps {
    sightings: Array<Array<number>>;
    showSighting: (index: number) => void;
}

const Map: React.FC<MapProps> = (props) => {
    const { sightings, showSighting } = props;

    const iconPerson = new L.Icon({
        // iconUrl: require('../img/marker-pin-person.svg'),
        iconUrl: "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF"
    })

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
                        // icon={iconPerson}
                    >
                    </Marker>
                ))}

            {/* <MarkerClusterGroup>
                <Marker position={[49.8397, 24.0297]} />
                <Marker position={[52.2297, 21.0122]} />
                <Marker position={[51.5074, -0.0901]} />
            </MarkerClusterGroup>; */}

        </MapContainer>
    )
}

export default Map;