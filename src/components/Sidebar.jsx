import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import "../views/styles/Sidebar-style.css"

const Sidebar = ({ user, userid, opt1, opt1link, opt2, opt2link, opt3, opt3link}) => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setOpen(!open);
    };

    return(
        <>
            <aside className={`sidebar-container ${open ? 'abierto' : 'cerrado'}`}>
                <div className="button-container">
                    <button onClick={toggleSidebar}>
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </div>
                
                <div className="info-container">    
                    <i className="fa-solid fa-circle-user"></i>
                    <h2>{user}</h2>
                    <ul>
                        <li>
                            <button onClick={() => navigate(`${opt1link}`, { state: { usuario: userid, nameUser: user } })}>
                                {opt1}
                            </button>
                        </li>

                        <li>
                            <button onClick={() => navigate(`${opt2link}`)}>
                                {opt2}
                            </button>
                        </li>

                        <li>
                            <button onClick={() => navigate(`${opt3link}`)}>
                                {opt3}
                            </button>
                        </li>

                        <li>
                            <button>
                                Cerrar Sesion
                            </button>
                        </li>
                    </ul>
                </div>

            </aside>

            <div className={`sidebar-overlay ${open ? 'visible' : ''}`} onClick={toggleSidebar}/>
        </>
    )
}
export default Sidebar