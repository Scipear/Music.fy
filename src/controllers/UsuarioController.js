import cassandra from 'cassandra-driver'
import { v4 as uuidv4 } from 'uuid'

const client = new cassandra.Client({
    contactPoints : ['127.0.0.1:9042'],
    localDataCenter: 'datacenter1',
    keyspace: 'musicdb'
});

exports.insertarUsuario = async (req, res) => {
    const { password, nombre, ciudad, edad } = req.body;

    if (!nombre || !ciudad) {
        return res.status(400).json({ error: "Todos los campos son requeridos" });
    }

    const query = 'INSERT INTO usuarios (id, password, nombre, ciudad, edad) VALUES (?, ?, ?, ?, ?)';
    const params = [uuidv4(), password, nombre, ciudad, edad];

    try {
        const result = await client.execute(query, params, { prepare: true });
        console.log("Usuario insertado, detalles:", result);
        res.json({ mensaje: "Usuario insertado correctamente con UUID" });
    } catch (err) {
        console.error("Error al insertar usuario:", err);
        res.status(500).json({ error: "Error al insertar usuario", detalle: err.message });
    }
};
