import { Request, Response } from 'express';
import UsersService from '../services/users.service';

export default class UsersController {
  constructor(private usersService = new UsersService()) {}

  public createUser = async (req: Request, res: Response) => {
    const user = req.body;

    const createdUser = await this.usersService.createUser(user);
    res.status(201).json(createdUser);
  };
}
