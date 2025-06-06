import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import "./styles/GenreCityPage-style.css"
import "./styles/ListenedPage-style.css"
import Sidebar from "../components/Sidebar"
import SongData from "../components/SongData"

const MonthCityPage = () => {
    const location = useLocation();
    const userid = location.state?.usuario || null;
    const nombre = location.state?.nameUser || null;

    const [ciudades, setCiudades] = useState([]);
    const [meses, setMeses] = useState([]);
    const [ciudadSeleccionada, setCiudadSeleccionada] = useState('');
    const [mesSeleccionado, setMesSeleccionado] = useState('');
    const [canciones, setCanciones] = useState([]);

    useEffect(() => {
        const getCiudades = async () => {
            const res = await fetch('http://localhost:3000/top-canciones/cities');
            const data = await res.json();
            setCiudades(data);
        };

        const getMeses = async () => {
            const res = await fetch('http://localhost:3000/months');
            const data = await res.json();
            setMeses(data);
        };

        getCiudades();
        getMeses();
    }, []);

    const handleBuscar = async () => {
        if (!ciudadSeleccionada || !mesSeleccionado) return;

        const res = await fetch(`http://localhost:3000/top-canciones/${ciudadSeleccionada}/${mesSeleccionado}`);
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
                opt3={"Canciones mas famosas por genero y ciudad"} 
                opt3link={"/genre-city-listened"} />
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

                    <select onChange={(e) => setMesSeleccionado(e.target.value)}>
                        <option value="">Seleccione un mes</option>
                        {meses.map((mes, idx) => (
                            <option key={idx} value={mes}>{mes}</option>
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

export default MonthCityPage