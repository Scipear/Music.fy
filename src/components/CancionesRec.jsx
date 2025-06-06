import React from "react"
import ImaginalDisk from "/assets/Imaginal Disk.jpg"
import "../views/styles/CancionesRec-style.css"

const CancionesRec = ({titulo, artista, album, genero, duracion, portada}) => {
    return (
        //Cambiar estos datos estaticos por los datos proporcionados por la base de datos
        <div className="cancionesrec">
            <div className="cancionesrec-container">
                <div className="imagine-container"> 
                    <img src={`/assets/${portada}`}/>
                </div>

                <div className="info-song-container"> 
                    <p>Titulo: {titulo}</p>
                    <p>Artista: {artista}</p>
                    <p>Album: {album}</p>
                    <p>Genero: {genero}</p>
                    <p>Duracion: {duracion}</p>
                </div>
            </div>
        </div>
    )
}

export default CancionesRec