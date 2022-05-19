import React, {useEffect, useState} from "react";
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import api from "../../services/api";

const Map: React.FC = () => {
    const [sightings, setSightings] = useState([]);

    useEffect(() => {
        getSightings();
    }, []);

    const getSightings = async () => {
        const { data } = await api.get("/sightings");
        setSightings(data);
    }

    const showSighting = async (index: number) =>{
        const { data } = await api.get(`/sightings${index}`);
        console.log(data);
    }

    return (
        <MapContainer center={[29.8830556,-97.9411111]} zoom={4} scrollWheelZoom={true}>
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