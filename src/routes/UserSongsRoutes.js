import { Router } from 'express';
import { getUserLastSongs } from '../controllers/UserSongsController.js';

const router = Router();

router.get('/usersongs/:usuario_id', getUserLastSongs);

export default router