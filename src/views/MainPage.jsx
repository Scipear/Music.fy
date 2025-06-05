import React from "react";
import Sidebar from "../components/Sidebar";
import "./styles/MainPage-style.css"
import "./styles/Sidebar-style.css"


const MainPage = () => {
    return(
       
        <div className="MainPage-container">

            <div className="sidebar">
                <div className="sidebar-container">
                    <Sidebar date='Arturo Padilla'/> 
                </div>
       
            </div>

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

