import express from "express";
import cassandra from "cassandra-driver";

const router = express.Router();

// Configuración del cliente de Cassandra
const client = new cassandra.Client({
    contactPoints: ["127.0.0.1:9042"], 
    localDataCenter: "datacenter1",
    keyspace: "musicdb"
});

// Endpoint para obtener canciones por ciudad y género
router.get("/top-canciones-ciudad/:ciudad/:genero", async (req, res) => {
    const { ciudad, genero } = req.params;

    try {
        // Consulta para obtener canciones de la ciudad y el género especificado
        const query = `
            SELECT titulo, artista, album, genero, duracion, portada, reproducciones 
            FROM cancion_mas_escuchadas_ciudad 
            WHERE ciudad = ? AND genero = ? ALLOW FILTERING;
        `;
        const result = await client.execute(query, [ciudad, genero], { prepare: true });

        if (result.rows.length === 0) {
            return res.status(404).json({ mensaje: "No hay canciones para esta ciudad y género." });
        }

        res.json({ canciones: result.rows });
    } catch (error) {
        console.error("❌ Error al obtener canciones:", error);
        res.status(500).json({ mensaje: "Error al consultar la base de datos." });
    }
});

export default router;
