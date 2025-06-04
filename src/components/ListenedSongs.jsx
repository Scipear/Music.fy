import React from "react"
import "../views/styles/ListenedPage-style.css"
import SongData from "./SongData"

const ListenedSongs = ({date}) => {
    return (
        <div className="listened-songs-container">
            <h2>{date}</h2>
            <SongData titulo={"CRY FOR ME"} artista={"Magdalena Bay"} album={"Imaginal Disk"} genero={"Pop"} duracion={"5:07"} portada={"Imaginal Disk.jpg"}/>
            <SongData titulo={"RED WINE SUPERNOVA"} artista={"Chappel Roan"} album={"The Rise and Fall of a Midwest Princess"} genero={"Pop"} duracion={"5:07"} portada={"The Rise and Fall of a Midwest Princess.webp"}/>
            <SongData titulo={"TALK TALK"} artista={"Charli XCX"} album={"Brat"} genero={"Pop"} duracion={"5:07"} portada={"brat.jpg"}/>
        </div>
    )
}

export default ListenedSongs