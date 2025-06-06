import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import "./styles/ListenedPage-style.css"
import ListenedSongs from "../components/ListenedSongs"
import Sidebar from "../components/Sidebar"

const ListenedPage = () => {
    const location = useLocation();
    const userid = location.state?.usuario || null;
    const nombre = location.state?.nameUser || null;

    const [songsByDate, setSongsByDate] = useState({});

    useEffect(() => {
        const getSongs = async () => {
            try{
                const response = await fetch(`http://localhost:3000/usersongs/${userid}`);
                const data = await response.json()
                console.log("Datos desde backend:", data.songs[2]);
                const agrupadas = agruparPorFecha(data.songs); // Asegúrate de que el back devuelva `songs`
                console.log("Agrupadas por fecha:", agrupadas);
                setSongsByDate(agrupadas);
            }catch(error){
                setMensaje("error desde el front");
                console.error("Error al obtener las canciones", error);
            }
        };

        getSongs();
    }, []);
    

    return(
        <div className="listened-container">
            <Sidebar 
                user={nombre}
                userid={userid}
                opt1={"Volver"} 
                opt1link={"/mainPage"} 
                opt2={"Canciones mas famosas por genero y ciudad"} 
                opt2link={"/genre-city-listened"} 
                opt3={"Canciones mas famosas por mes"} 
                opt3link={"/recently-listened"}/>
            <div className="header-container">
                <h1>Music.fy</h1>
            </div>

            <div className="listened-main-container">
                <h1>ESCUCHADO RECIENTEMENTE</h1>
                {Object.entries(songsByDate).map(([fecha, canciones]) => (
                    <ListenedSongs key={fecha} date={fecha} songs={canciones} />
                ))}
            </div>
        </div>
    )
}

const agruparPorFecha = (canciones) => {
  const agrupadas = {};

  canciones.forEach((cancion) => {
    const fecha = new Date(cancion.fecha_reproduccion).toLocaleDateString('es-ES', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });

    if(!agrupadas[fecha]){
      agrupadas[fecha] = [];
    }
    agrupadas[fecha].push(cancion);
  });

  return agrupadas;
};

export default ListenedPage