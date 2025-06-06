import React from "react";
import AmongMySwan from "/assets/Among My Swan.jpg"
import { useLocation } from "react-router-dom"
import Sidebar from "../components/Sidebar";
import CancionesRec from "../components/CancionesRec";
import "./styles/MainPage-style.css"


const MainPage = () => {
    const location = useLocation();
    const userid = location.state?.usuario || null;
    const nombre = location.state?.nameUser || null;

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
                opt3link={"/recently-listened"}/>

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
                    <h1>RECOMENDADO PARA TI</h1>
                </div>
            </div>
                <div>
                    <CancionesRec
                    img src = {AmongMySwan}
                    artista ={""}
                    titulo={""}
                    album = {""}
                    genero = {""}/>
                    <CancionesRec
                    img src = {""}
                    artista ={""}
                    titulo={""}
                    album = {""}
                    genero = {""}/>
                    <CancionesRec
                    img src = {""}
                    artista ={""}
                    titulo={""}
                    album = {""}
                    genero = {""}/>
                    <CancionesRec
                    img src = {""}
                    artista ={""}
                    titulo={""}
                    album = {""}
                    genero = {""}/>
                    <CancionesRec
                    img src = {""}
                    artista ={""}
                    titulo={""}
                    album = {""}
                    genero = {""}/>
                    <CancionesRec
                    img src = {""}
                    artista ={""}
                    titulo={""}
                    album = {""}
                    genero = {""}/>
                    <CancionesRec
                    img src = {""}
                    artista ={""}
                    titulo={""}
                    album = {""}
                    genero = {""}/>
                    <CancionesRec
                    img src = {""}
                    artista ={""}
                    titulo={""}
                    album = {""}
                    genero = {""}/>
                </div>

        </div>
    )
}

export default MainPage