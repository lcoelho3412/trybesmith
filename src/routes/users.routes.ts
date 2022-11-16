import { Router } from 'express';

import UsersController from '../controllers/users.controller';

const router = Router();
const usersController = new UsersController();

router.post('/', usersController.createUser.bind(usersController));

export default router;