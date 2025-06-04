import React from "react"
import "./styles/ListenedPage-style.css"
import ListenedSongs from "../components/ListenedSongs"

const ListenedPage = () => {
    return(
        <div className="listened-container">
            <div className="header-container">
                <h1>Music.fy</h1>
            </div>

            <div className="listened-main-container">
                <h1>ESCUCHADO RECIENTEMENTE</h1>
                <ListenedSongs date="27 DE MAYO"/>
                <ListenedSongs date="26 DE MAYO"/>
            </div>
        </div>
    )
}

export default ListenedPage