import React from "react"
import ImaginalDisk from "/assets/Imaginal Disk.jpg"
import "../views/styles/CancionesRec-style.css"

const CancionesRec = ({titulo, artista, genero, portada}) => {
    return (
        //Cambiar estos datos estaticos por los datos proporcionados por la base de datos
        <div className="cancionesrec">
            <div className="cancionesrec-container">
                <div className="imagine-container"> 
                    <img src={`/assets/${portada}`}/>
                </div>

                <div> 
                    <h4>Artista: {artista}</h4>
                    <h4>Titulo: {artista}</h4>
                    <h4>Album: {titulo}</h4>
                    <h4>Genero: {genero}</h4>
                 </div>

            </div>
        </div>
    )
}

export default CancionesRec