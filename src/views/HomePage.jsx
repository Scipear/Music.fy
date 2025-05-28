import React from "react"
import ColumnItems from "../components/ColumnItems.jsx"
import AmongMySwan from "../assets/Among My Swan.jpg"
import ImaginalDisk from "../assets/Imaginal Disk.jpg"
import RiseAndFall from "../assets/The Rise and Fall of a Midwest Princess.webp"
import RAM from "../assets/Random Access Memories.webp"
import Illinoise from "../assets/Illinoise.jpg"
import Brat from "../assets/brat.jpg"
import OkComputer from "../assets/Ok Computer.webp"
import Trench from "../assets/Trench.jpg"
import WHTTB from "../assets/What Happened To The Beach.webp"
import Songs from "../assets/Songs.jpg"
import Boygenius from "../assets/Boygenius.webp"
import Radical from "../assets/Radical Optimism.webp"
import Renaissance from "../assets/Renaissance.webp"
import InRainbows from "../assets/In Rainbows.webp"
import Caprisongs from "../assets/Caprisongs.webp"
import HMHAS from "../assets/HIT ME HARD AND SOFT.jpg"
import SevenSwans from "../assets/Seven Swans.jpg"
import Blue from "../assets/Blue.jpg"
import BTD from "../assets/Born To Die.webp"
import Grace from "../assets/Grace.jpg"
import Arca from "../assets/Arca.jpg"
import Charm from "../assets/Charm.jpg"
import Cinema from "../assets/CINEMA.webp"
import FoundHeaven from "../assets/Found Heaven.jpg"
import Funeral from "../assets/Funeral.jpg"
import "./styles/HomePage-style.css"

const HomePage = () => {
    return(
        <div className="container">
            <div className="visual-shape">
                <div className="carousel-container">
                    <div className="carousel-column up">
                        <ColumnItems cover1={AmongMySwan} cover2={ImaginalDisk} cover3={RiseAndFall} cover4={RAM} cover5={Illinoise}/>
                    </div>
                    <div className="carousel-column down">
                        <ColumnItems cover1={Brat} cover2={OkComputer} cover3={Trench} cover4={WHTTB} cover5={Songs}/>
                    </div>
                    <div className="carousel-column up">
                        <ColumnItems cover1={Boygenius} cover2={Radical} cover3={Renaissance} cover4={InRainbows} cover5={Caprisongs}/>
                    </div>
                    <div className="carousel-column down">
                        <ColumnItems cover1={HMHAS} cover2={SevenSwans} cover3={Blue} cover4={BTD} cover5={Grace}/>
                    </div>
                    <div className="carousel-column up">
                        <ColumnItems cover1={Arca} cover2={Charm} cover3={Cinema} cover4={FoundHeaven} cover5={Funeral}/>
                    </div>
                </div>
            </div>

            <div className="title-container">
                <h1>Music.fy</h1>
                <button>Iniciar Sesion</button>
            </div>
        </div>
    )
}

export default HomePage