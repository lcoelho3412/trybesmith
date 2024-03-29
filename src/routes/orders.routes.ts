import { Router } from 'express';

import OrdersController from '../controllers/orders.controllers';

const router = Router();
const ordersController = new OrdersController();

router.get('/', ordersController.getAll.bind(ordersController));

export default router;