import React from "react";
import "./styles/MainPage-style.css"

const MainPage = () => {
    return(
       
        <div className="MainPage-container">
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

        </div>
            
        
    )
}

export default MainPage