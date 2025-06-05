import React from "react";
import { Link } from "react-router-dom";
import "../views/styles/Sidebar-style.css"

const Sidebar = ({date}) => {
    return(

        <div className="sidebar-barra-container">
        <h2>{date}</h2>
            <ul>
                <li>
                    <Link to="">Escuchado recientemente</Link>
                </li>

                <li>
                    <Link to="">Cerrar sesion</Link>
                </li>
            </ul>
        </div>
        
    )
}
export default Sidebar