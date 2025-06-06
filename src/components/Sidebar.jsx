import React from "react";
import "../views/styles/Sidebar-style.css"

const Sidebar = ({date}) => {
    return(

        <div className="sidebar-barra-container">
            
            <i class="fa-solid fa-circle-user"></i>
            
            <h2>{date}</h2>
        </div>
        
    )
}
export default Sidebar