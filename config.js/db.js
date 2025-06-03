import cassandra from 'cassandra-driver'

const client = new cassandra.Client({
    contactPoints: ['127.0.0.1:9042'],
    localDataCenter: 'datacenter1',
    keyspace: 'musicdb'
});

client.connect()
    .then(() => console.log("Conectado a Cassandra"))
    .catch(err => console.error("Error de conexión:", err));

module.exports = client;
