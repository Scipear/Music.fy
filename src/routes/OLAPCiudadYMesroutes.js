import { Router } from 'express';
import { getCities, getCityAndMonth, getMonths } from '../controllers/OLAPCiudadYMesController.js';

const router = Router();

router.get('/months', getMonths);
router.get('/top-canciones/cities', getCities);
router.get('/top-canciones/:ciudad/:mes', getCityAndMonth);

export default router