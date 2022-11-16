import Token from '../utils/jwt';
import UsersModel from '../models/users.model';
import User from '../interfaces/user';

export default class UserService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel();
  }

  public async createUser(user: User): Promise<object> {
    const created = await this.model.createUser(user);
    if (created.affectedRows > 0) {
      const [newUser] = await this.model.getUserById(created.insertId);
      const token = new Token().tokenGenerator(newUser);
      return { token };
    }
    return {};
  }
}
