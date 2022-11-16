import OrdersModel from '../models/order.models';
import Order from '../interfaces/order';

export default class OrdersService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel();
  }

  public async getAll(): Promise<Order[]> {
    const test = await this.model.getAll();
    return test;
  }
}
