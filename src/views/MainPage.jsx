import React, { useState, useEffect } from "react";
import "./styles/MainPage-style.css";

const MainPage = () => {
    const [topCanciones, setTopCanciones] = useState([]);

    useEffect(() => {
        const fetchTopCanciones = async () => {
            try {
                const response = await fetch("http://localhost:3000/top-canciones"); // Ajusta la URL según tu backend
                const data = await response.json();
                setTopCanciones(data.top_canciones);
            } catch (error) {
                console.error("Error al obtener el Top 5 de canciones:", error);
            }
        };

        fetchTopCanciones();
    }, []);

    return (
        <div className="MainPage-container">
            <div className="header-container">
                <h1>Music.fy</h1>
            </div>

            <div className="buscador">
                <input type="text" placeholder="Buscar artista..." />
                <div className="Busbutton-container">
                    <button><i className="fa-duotone fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>

            <div className="rec-container">
                <div className="header2-container">
                    <h1>RECOMENDADO PARA TI</h1>
                </div>
                <div className="top-canciones-container">
                    {topCanciones.map((cancion, index) => (
                        <div key={index} className="top-canciones-item">
                            <h3>{cancion.titulo}</h3>
                            <p>{cancion.reproducciones} reproducciones</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MainPage;
