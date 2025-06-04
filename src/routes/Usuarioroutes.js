import { Router } from 'express';
import {insertarUsuario, loginUsuario} from '../controllers/UsuarioController.js';

const router = Router();

router.post('/register', insertarUsuario);

router.post('/login', async (req, res) => {
    const { nombre, password } = req.body;
    
    try {
        const resultado = await loginUsuario(nombre, password);
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error en el servidor' });
    }
});

export default router