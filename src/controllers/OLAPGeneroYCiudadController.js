import express from "express";
import cassandra from "cassandra-driver";

const router = express.Router();

// Configuración del cliente de Cassandra
const client = new cassandra.Client({
    contactPoints: ["127.0.0.1:9042"], 
    localDataCenter: "datacenter1",
    keyspace: "musicdb"
});

export const getCities = async (req, res) => {
    try{
        const query = 'SELECT ciudad FROM cancion_mas_escuchadas_ciudad';
        const result = await client.execute(query);
        const ciudades = [...new Set(result.rows.map(row => row.ciudad))];
        
        res.json(ciudades);
    }catch(error){
        console.error("Error obteniendo ciudades", error);
        res.status(500).json({ message: "Error al obtener ciudades" });
    }
}

export const getGenres = async (req, res) => {
    try{
        const query = 'SELECT genero FROM cancion_mas_escuchadas_ciudad';
        const result = await client.execute(query);
        const generos = [...new Set(result.rows.map(row => row.genero))];
        res.json(generos);
    }catch(error){
        console.error("Error obteniendo géneros", error);
        res.status(500).json({ message: "Error al obtener géneros" });
    }
};

export const getGenreAndCity = async (req, res) => {
    const { ciudad, genero } = req.params;

    try {
        // Consulta para obtener canciones de la ciudad y el género especificado
        const query = `
            SELECT cancion_id, titulo, artista, album, genero, duracion, portada, reproducciones 
            FROM cancion_mas_escuchadas_ciudad 
            WHERE ciudad = ? AND genero = ? ORDER BY reproducciones DESC ALLOW FILTERING;
        `;
        const result = await client.execute(query, [ciudad, genero], { prepare: true });

        if (result.rows.length === 0) {
            return res.status(404).json({ mensaje: "No hay canciones para esta ciudad y género." });
        }

        res.json({ canciones: result.rows });
    } catch (error) {
        console.error("Error al obtener canciones:", error);
        res.status(500).json({ mensaje: "Error al consultar la base de datos." });
    }
}
