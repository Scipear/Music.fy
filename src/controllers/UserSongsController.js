import cassandra from 'cassandra-driver'

const client = new cassandra.Client({
    contactPoints : ['127.0.0.1:9042'],
    localDataCenter: 'datacenter1',
    keyspace: 'musicdb'
});

export const getUserLastSongs = async (req, res) => {
    try{
        const { usuario_id } = req.params
        const query = 'SELECT titulo, artista, album, genero, duracion, portada, fecha_reproduccion FROM usuario_cancion WHERE usuario_id = ? ORDER BY fecha_reproduccion DESC'
        const result = await client.execute(query, [usuario_id], { prepare: true })
        if(result.rowLength === 0){
           res.json({ success: false, message: 'El usuario no tiene ninguna cancion escuchada' })
        }else{
            res.json({ success: true, message: 'Canciones extraidas', songs: result.rows })
        }

    }catch(error){
        console.error('Error extrayendo canciones del usuario', error);
        res.status(500).json({ success: false, message: 'Error al buscar las canciones' })
    }
}