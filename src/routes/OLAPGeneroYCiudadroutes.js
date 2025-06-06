import { Router } from 'express';
import { getCities, getGenreAndCity, getGenres } from '../controllers/OLAPGeneroYCiudadController.js';

const router = Router();

router.get('/genres', getGenres);
router.get('/cities', getCities);
router.get('/top-canciones-ciudad/:ciudad/:genero', getGenreAndCity);

export default router