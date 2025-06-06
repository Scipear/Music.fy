import React, { useEffect, useState } from "react";
import AmongMySwan from "/assets/Among My Swan.jpg"
import { useLocation } from "react-router-dom"
import Sidebar from "../components/Sidebar";
import CancionesRec from "../components/CancionesRec";
import "./styles/MainPage-style.css"


const MainPage = () => {
    const location = useLocation();
    const userid = location.state?.usuario || null;
    const nombre = location.state?.nameUser || null;
    
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [canciones, setCanciones] = useState([]);

    useEffect(() => {
        const getCanciones = async () => {
            const res = await fetch('http://localhost:3000/top-canciones');
            const data = await res.json();
            setCanciones(data.top_canciones);
        }

        getCanciones()
    }, [])

    return(
        <div className="MainPage-container">
            <Sidebar 
                user={nombre}
                userid={userid}
                opt1={"Escuchados recientemente"} 
                opt1link={"/recently-listened"} 
                opt2={"Canciones mas famosas por genero y ciudad"} 
                opt2link={"/genre-city-listened"} 
                opt3={"Canciones mas famosas por mes"} 
                opt3link={"/month-city-listened"}/>

            <div className="header-container">
                <h1>Music.fy</h1>
            </div> 
            <div className="buscador">
                <input type="text" placeholder ="Buscar artista..."/>
                <div className="Busbutton-container">
                    <button> <i class="fa-duotone fa-solid fa-magnifying-glass"></i></button>    
                </div>     
            </div>

            <div className = "rec-container">
                <div className="header2-container">
                    <h1>RECOMENDADO PARA TI: LO MAS ESCUCHADO</h1>
                </div>
            </div>

            <div className="song-repeating-container">
                {canciones.map((cancion, idx) => (
                    <div key={idx}
                        className={`song-repeating-main ${hoveredIndex !== null && hoveredIndex !== idx ? 'dimmed' : 'highlight'}`}
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}>
                        <CancionesRec
                            titulo={cancion.titulo}
                            artista ={cancion.artista}
                            album = {cancion.album}
                            genero = {cancion.genero}
                            duracion = {cancion.duracion}
                            portada = {cancion.portada}/>
                        <p>Reproducciones: {cancion.total}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default MainPage