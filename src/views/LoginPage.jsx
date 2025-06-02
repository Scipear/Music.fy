import React from "react"
import "./styles/LoginPage-style.css"

const LoginPage = () => {
    return(
        <div className="container-login">
            <h1>Music.fy</h1>

            <div className="modal">
                <h2>INICIO DE SESION</h2>

                <form>
                    <div className="input-container">
                        <label>Usuario</label>
                        <input type="text" required/>
                    </div>

                    <div className="input-container">
                        <label>Contraseña</label>
                        <input type="password" required/>
                    </div>

                    <button>Iniciar Sesion</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage