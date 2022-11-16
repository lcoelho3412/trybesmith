import { Request, Response } from 'express';
import OrdersService from '../services/orders.service';

export default class OrdersController {
  public ordersService = new OrdersService();

  public getAll = async (_req: Request, res: Response) => {
    console.log('file: orders.controllers.ts ~ line 8 ~ OrdersController ~ getAll= ~ getAll');
    
    const ordersList = await this.ordersService.getAll();
    res.status(200).json(ordersList);
  };
}
