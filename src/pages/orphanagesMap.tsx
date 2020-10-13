import React from 'react';
import MapMarker from "../images/map-marker.svg";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import "../styles/pages/orphanagesMap.css";
import { Map, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"

function OrfanagesMap() {
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={MapMarker} alt="Happy"/>
                    <h1>Escolha um orfanato no mapa</h1>
                    <p>Muitas crianças estão esperando sua visita</p>
                </header>
                <footer>
                    <strong>Cotia</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>
            <Map
                center={[-23.6220481,-46.9319517]}
                zoom={15}
                style={{width: "100%", height: "100%"}}
            >
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/> */}
                
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
                {/* <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/> */}
                {/* <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/> */}
                {/* <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/> */}
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>            
            </Link>
        </div>
    )
};

export default OrfanagesMap;