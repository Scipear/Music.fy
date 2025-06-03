import express from 'express';
import usuarioController from '../controllers/UsuarioController.js';

const router = express.Router();

router.post('/usuarios', usuarioController.insertarUsuario);

module.exports = router;
