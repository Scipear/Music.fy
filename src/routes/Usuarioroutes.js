import express from 'express';
import usuarioController from '../controllers/UsuarioController.js';

const router = express.Router();

router.post('/register', usuarioController.insertarUsuario);

router.post('/login', async (req, res) => {
    const { nombre, password } = req.body;
    
    try {
        const resultado = await loginUsuario(nombre, password);
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error en el servidor' });
    }
});



module.exports = router;
