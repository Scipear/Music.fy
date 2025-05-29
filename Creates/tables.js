const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1:9042'],
  localDataCenter: 'datacenter1',
  keyspace: 'musicdb'
});

async function crearTablas() {
  const queries = [
    `CREATE TABLE IF NOT EXISTS usuarios (
      id INT PRIMARY KEY,
      nombre TEXT,
      ciudad TEXT
    );`,

    `CREATE TABLE IF NOT EXISTS canciones (
      id INT PRIMARY KEY,
      titulo TEXT,
      artista TEXT,
      genero TEXT
    );`,

    `CREATE TABLE usuario_cancion (
      usuario_id INT,
      cancion_id INT,
      fecha_reproduccion TIMESTAMP,
      PRIMARY KEY (usuario_id, fecha_reproduccion, cancion_id)
    );`,

    `CREATE TABLE cancionesPorusuarios (
      cancion_id INT
      total INT
      PRIMARY KEY(total, cancion_id)
    );`,

    `CREATE TABLE cancion_mas_escuchadas_ciudad (
      ciudad TEXT,
      cancion_id INT,
      titulo TEXT,
      reproducciones COUNTER,
      PRIMARY KEY (ciudad, cancion_id)
    );`
  ];

  try {
    for (const query of queries) {
      await client.execute(query);
      console.log(`Tabla creada: ${query.split(" ")[2]}`);
    }
    console.log('Todas las tablas fueron creadas correctamente');
  } catch (error) {
    console.error('Error al crear las tablas:', error);
  } finally {
    await client.shutdown();
  }
}

crearTablas();
