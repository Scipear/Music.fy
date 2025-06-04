import React from "react"
import ImaginalDisk from "/assets/Imaginal Disk.jpg"
import "../views/styles/ListenedPage-style.css"

const SongData = ({titulo, artista, album, genero, duracion, portada}) => {
    return (
        //Cambiar estos datos estaticos por los datos proporcionados por la base de datos
        <div className="song-data-container">
            <div className="song-data">
                <div className="song-cover-container">
                    <img src={`/assets/${portada}`}/>
                    <h3>{titulo}</h3>    
                </div>

                <div>
                    <p>Artista: {artista}</p>
                    <p>Album: {album}</p>
                    <p>Genero: {genero}</p>
                    <p>Duracion: {duracion}</p>
                    <p>Hora escuchada: 12:05:20 PM</p>
                </div>
            </div>
        </div>
    )
}

export default SongData