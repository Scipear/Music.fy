import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles/LoginPage-style.css";

const LoginPage = () => {
    const [nombre, setNombre] = useState("");
    const [password, setPassword] = useState("");
    const [mensaje, setMensaje] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault(); // Evita recargar la página al enviar el formulario

        try {
            const response = await axios.post("http://localhost:3000/login", {
                nombre,
                password
            });

            setMensaje(response.data.message); // Guarda la respuesta del backend

            if(response.data.success){
                navigate('/mainPage')
            }
        } catch (error) {
            setMensaje("error desde el front");
            console.error("Error al iniciar sesión:", error);
        }
    };

    return(
        <div className="container-login">
            <h1>Music.fy</h1>

            <div className="modal">
                <h2>INICIO DE SESION</h2>

                <form onSubmit={handleLogin}>
                    <div className="input-container">
                        <label>Usuario</label>
                        <input type="text" required value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                    </div>

                    <div className="input-container">
                        <label>Contraseña</label>
                        <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <button type="submit">Iniciar Sesion</button>
                </form>

                <p>{mensaje}</p>
            </div>
        </div>
    );
}

export default LoginPage;
