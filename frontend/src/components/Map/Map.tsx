import React from "react";
import { MapContainer, TileLayer, Marker, CircleMarker} from 'react-leaflet';
import * as L from "leaflet";
import MarkerClusterGroup from 'react-leaflet-cluster'


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
        <MapContainer center={[41.6916667,-97.4841667]} zoom={4.0}  scrollWheelZoom={true}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <MarkerClusterGroup
                chunkedLoading
            >
                {/* {sightings.map((sighting, index) => (
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
                ))} */}

                {sightings.map((sighting, index) => (
                    <CircleMarker
                        key={index}
                        center={[
                            sighting[0],
                            sighting[1]
                        ]}
                        radius={7}
                        color="blue"
                        eventHandlers={{click: () => showSighting(index)}}
                        // icon={iconPerson}
                    >
                    </CircleMarker>
                ))}

            </MarkerClusterGroup>


        </MapContainer>
    )
}

export default Map;