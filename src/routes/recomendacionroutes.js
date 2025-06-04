
import cassandra from 'cassandra-driver';

import { Router } from 'express';
import { obtenerTopCanciones } from "../controllers/RecomendacionController.js";


const router = Router();

router.get('/top-canciones', obtenerTopCanciones);

export default router;