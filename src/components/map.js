import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api"
import { useEffect, useMemo, useState } from "react";
import '../styles/gmap.css';
import Attractions from '../helper/map_data.xml';
import axios from "axios";
import xml2js from "xml2js";

const Map = ({position}) =>{
    const center = useMemo(() => ({ lat: 1.286920, lng: 103.854570 }), []);
    return(
        <>
            <GoogleMap 
                zoom={15} 
                center={center} 
                mapContainerClassName="map-container"
            >
                {position.atr.map((item)=>(
                    <MarkerF
                    position={{lat: parseFloat(item.latitude), lng: parseFloat(item.longitude)}} />
                ))}
            </GoogleMap>
        </>
    )
}

const Gmap = () => {
    const [mapData, setMapData] = useState(null);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async() => {
        await axios
        .get(Attractions, {
            "Content-Type": "application/xml; charset=utf-8"
        })
        .then((res)=>{
            const { data } = res;
            const parser = new xml2js.Parser();
            parser.parseString(data, function(err, result) {
                setMapData(result);
            })
        }).catch((err)=>{
            console.log(err);
        })
    }

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyCnPOPz9W0kDj9jrCoQus8dpDa6sITDL4g",
    });

    if (!isLoaded) return <div></div>

    return(
        <>
            <Map position={mapData.Attractions}/>
        </>
    )
}
export default Gmap;