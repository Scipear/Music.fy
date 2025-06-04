import cassandra from 'cassandra-driver'

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1:9042'],
  localDataCenter: 'datacenter1',
  keyspace: 'musicdb'
});

async function crearTablas() {
  const queries = [
    /** LISTO */
    `CREATE TABLE IF NOT EXISTS usuarios (
      id UUID PRIMARY KEY,
      password TEXT,
      nombre TEXT,
      ciudad TEXT,
      edad INT,
    );`,
    /**listo */
    `CREATE TABLE IF NOT EXISTS canciones (
      id UUID PRIMARY KEY,
      titulo TEXT,
      artista TEXT,
      album TEXT,
      genero TEXT,
      duracion TEXT,
      portada TEXT
    );`,
    /**listo */
    `CREATE TABLE usuario_cancion (
      usuario_id UUID,
      cancion_id UUID,
      fecha_reproduccion TIMESTAMP,
      PRIMARY KEY (usuario_id, fecha_reproduccion, cancion_id)
    );`,
    /*Recomendacion canciones mas escuchadas*/
    `CREATE TABLE cancionesPorusuarios (
      cancion_id UUID,
      nombre TEXT,
      artista TEXT,
      album TEXT,
      genero TEXT,
      duracion TEXT,
      total INT,
      PRIMARY KEY(cancion_id)
    );`,
    /*Recomendacion canciones mas escuchadas por genero */
    `CREATE TABLE canciones_mas_escuchadas_por_genero (
    genero TEXT,
    cancion_id UUID,
    titulo TEXT,
    reproducciones INT,
    PRIMARY KEY (genero, cancion_id)
    );`,

    
    /* Segunda consulta olap */
    `CREATE TABLE cancion_mas_escuchadas_ciudad (
      ciudad TEXT,
      cancion_id UUID,
      titulo TEXT,
      reproducciones INT,
      PRIMARY KEY (ciudad, cancion_id)
    );`,
    /* primera consulta olap */
    `CREATE TABLE canciones_populares_por_mes (
      ciudad TEXT,
      mes TEXT,  
      cancion_id UUID,
      titulo TEXT,
      reproducciones INT, 
      PRIMARY KEY ((ciudad, mes), cancion_id)
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
