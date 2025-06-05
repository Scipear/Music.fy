import { Router } from 'express';
import { getUserLastSongs } from '../controllers/UserSongsController.js';

const router = Router();

router.get('/usersongs:username', getUserLastSongs)

export default router