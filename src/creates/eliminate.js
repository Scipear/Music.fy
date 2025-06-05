import cassandra from 'cassandra-driver';

const client = new cassandra.Client({
    contactPoints: ['127.0.0.1:9042'], // Ajusta la IP según tu configuración
    localDataCenter: 'datacenter1',
    keyspace: 'musicdb'
});

// Lista de tablas a eliminar
const tablas = [
    'cancion_mas_escuchadas_ciudad',
    'cancionesPorusuarios',
    'usuarios',
    'canciones_mas_escuchadas_por_genero',
    'canciones',
    'usuario_cancion',
    'canciones_populares_por_mes'
];

// Función para eliminar tablas
async function borrarTablas() {
    for (const tabla of tablas) {
        try {
            const query = `DROP TABLE IF EXISTS ${tabla};`;
            await client.execute(query);
            console.log(`✅ Tabla ${tabla} eliminada correctamente.`);
        } catch (error) {
            console.error(`❌ Error al eliminar la tabla ${tabla}:`, error);
        }
    }
    await client.shutdown();
}

// Ejecutar la función
borrarTablas();
