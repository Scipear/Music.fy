import cassandra from 'cassandra-driver'
import { v4 as uuidv4 } from 'uuid'

const client = new cassandra.Client({
    contactPoints : ['127.0.0.1:9042'],
    localDataCenter: 'datacenter1',
    keyspace: 'musicdb'
});

export async function insertarUsuario(req, res) {
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

export async function loginUsuario(nombre, password) {
    try {
        const query = 'SELECT * FROM usuarios WHERE nombre = ? ALLOW FILTERING';
        const result = await client.execute(query, [nombre], { prepare: true });

        if (result.rowLength === 0) {
            return { success: false, message: 'Usuario no encontrado' };
        }
        
        const userData = result.rows[0];
        //const contraseñaValida = await bcrypt.compare(password, userData.password);

        if (password == userData.password) {
            return { success: true, message: 'Login exitoso', usuarioid: userData.id };
        } else {
            return { success: false, message: 'Contraseña incorrecta' };
        }
    } catch (error) {
        console.error('Error en loginnnnnn:', error);
        return { success: false, message: 'Error al procesar login' };
    }
};
