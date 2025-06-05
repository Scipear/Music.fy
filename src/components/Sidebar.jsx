import React from "react";
import "../views/styles/Sidebar-style.css"

const Sidebar = ({date}) => {
    return(

        <div className="sidebar-barra-container">
            <div className="icon">
                <i class="fa-solid fa-bars"></i>
            </div>
            <i class="fa-solid fa-circle-user"></i>
        <h2>{date}</h2>
        
        </div>
        
    )
}
export default Sidebar