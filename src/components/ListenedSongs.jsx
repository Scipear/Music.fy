import React from "react"
import "../views/styles/ListenedPage-style.css"
import SongData from "./SongData"

const ListenedSongs = ({date, songs}) => {
    return (
        <div className="listened-songs-container">
            <h2>{date}</h2>
            {songs.map((song) => (
                <SongData
                    key={song.cancion_id}
                    titulo={song.titulo}
                    artista={song.artista}
                    album={song.album}
                    genero={song.genero}
                    duracion={song.duracion}
                    portada={song.portada}
                />
            ))}
        </div>
    )
}

export default ListenedSongs