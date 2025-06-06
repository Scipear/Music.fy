import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import "./styles/GenreCityPage-style.css"
import "./styles/ListenedPage-style.css"
import Sidebar from "../components/Sidebar"
import SongData from "../components/SongData"

const GenreCityPage = () => {
    const location = useLocation();
    const userid = location.state?.usuario || null;
    const nombre = location.state?.nameUser || null;

    const [ciudades, setCiudades] = useState([]);
    const [generos, setGeneros] = useState([]);
    const [ciudadSeleccionada, setCiudadSeleccionada] = useState('');
    const [generoSeleccionado, setGeneroSeleccionado] = useState('');
    const [canciones, setCanciones] = useState([]);

    useEffect(() => {
        const getCiudades = async () => {
            const res = await fetch('http://localhost:3000/cities');
            const data = await res.json();
            setCiudades(data);
        };

        const getGeneros = async () => {
            const res = await fetch('http://localhost:3000/genres');
            const data = await res.json();
            setGeneros(data);
        };

        getCiudades();
        getGeneros();
    }, []);

    const handleBuscar = async () => {
        if (!ciudadSeleccionada || !generoSeleccionado) return;

        const res = await fetch(`http://localhost:3000/top-canciones-ciudad/${ciudadSeleccionada}/${generoSeleccionado}`);
        const data = await res.json();
        setCanciones(data.canciones);
    };

    return(
        <div className="listened-container">
            <Sidebar 
                user={nombre}
                userid={userid}
                opt1={"Volver"} 
                opt1link={"/mainPage"} 
                opt2={"Escuchados recientemente"} 
                opt2link={"/recently-listened"} 
                opt3={"Canciones mas famosas por mes"} 
                opt3link={"/recently-listened"}/>
            <div className="header-container">
                <h1>Music.fy</h1>
            </div>

            <div className="listened-main-container">
                <h1>LO MAS ESCUCHADO</h1>

                <div className="select-container">
                    <select onChange={(e) => setCiudadSeleccionada(e.target.value)}>
                        <option value="">Seleccione una ciudad</option>
                        {ciudades.map((ciudad, idx) => (
                            <option key={idx} value={ciudad}>{ciudad}</option>
                        ))}
                    </select>

                    <select onChange={(e) => setGeneroSeleccionado(e.target.value)}>
                        <option value="">Seleccione un género</option>
                        {generos.map((genero, idx) => (
                            <option key={idx} value={genero}>{genero}</option>
                        ))}
                    </select>

                    <button onClick={handleBuscar}>
                        Buscar
                    </button>
                </div>
            </div>

            <div className="listened-songs-container">
                {canciones.length === 0 ? (
                    <p>No hay canciones para esta combinación</p>
                ) : (
                    canciones.map((song) => (
                        <div>
                            <SongData
                                key={song.cancion_id}
                                titulo={song.titulo}
                                artista={song.artista}
                                album={song.album}
                                genero={song.genero}
                                duracion={song.duracion}
                                portada={song.portada}
                            />
                            <p className="counting">Reproducciones: {song.reproducciones}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default GenreCityPage