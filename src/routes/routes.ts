import { Router } from 'express';

import * as HomeController from '../controllers/homeController';

const router = Router();

router.get('/', HomeController.home);

router.get('/send', HomeController.email);


export default router;