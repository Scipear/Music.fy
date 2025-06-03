import cassandra from 'cassandra-driver'

const client = new cassandra.Client({
    contactPoints: ['127.0.0.1:9042'], // Cambia esto por la IP de tu servidor Cassandra
    localDataCenter: 'datacenter1',
    keyspace: 'musicdb'
});

client.execute('SELECT * FROM mi_tabla')
    .then(result => console.log(result.rows))
    .catch(error => console.error(error));
