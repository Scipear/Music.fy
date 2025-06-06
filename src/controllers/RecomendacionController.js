import cassandra from 'cassandra-driver';

// Configuración del cliente
const client = new cassandra.Client({
    contactPoints: ['127.0.0.1:9042'],
    localDataCenter: 'datacenter1',
    keyspace: 'musicdb'
});

export async function obtenerTopCanciones(req, res) {
    try {
        console.log("Ejecutando consulta para obtener todas las canciones...");

        const query = `
            SELECT cancion_id, titulo, artista, album, genero, duracion, portada, total 
            FROM cancionesPorusuarios;`;

        const result = await client.execute(query);
        console.log("Resultados obtenidos:", result.rows);

        if (result.rows.length === 0) {
            return res.json({ top_canciones: [] });
        }

        // Ordenar los resultados en código
        const topCanciones = result.rows.sort((a, b) => b.total - a.total).slice(0, 9);

        console.log("Top 5 canciones más escuchadas:", topCanciones);
        res.json({ top_canciones: topCanciones });
    } catch (error) {
        console.error('Error obteniendo el Top 5 de canciones:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

