import express from "express";
import cassandra from "cassandra-driver";

const router = express.Router();

// Configuración del cliente de Cassandra
const client = new cassandra.Client({
    contactPoints: ["127.0.0.1:9042"], 
    localDataCenter: "datacenter1",
    keyspace: "musicdb"
});

// Endpoint para obtener el Top 3 de canciones más escuchadas en una ciudad y mes
router.get("/top-canciones/:ciudad/:mes", async (req, res) => {
    const { ciudad, mes } = req.params;

    try {
        const query = `
            SELECT titulo, artista, album, genero, duracion, portada, reproducciones
            FROM canciones_populares_por_mes
            WHERE ciudad = ? AND mes = ?
            ALLOW FILTERING;
        `;
        const result = await client.execute(query, [ciudad, mes], { prepare: true });

        if (result.rows.length === 0) {
            return res.status(404).json({ mensaje: "No hay canciones populares para esta ciudad y mes." });
        }

        // Ordenar los resultados en el backend por reproducciones de forma descendente
        const topCanciones = result.rows.sort((a, b) => b.reproducciones - a.reproducciones).slice(0, 3);

        res.json({ canciones: topCanciones });
    } catch (error) {
        console.error("❌ Error al obtener las canciones:", error);
        res.status(500).json({ mensaje: "Error al consultar la base de datos." });
    }
});

export default router;
