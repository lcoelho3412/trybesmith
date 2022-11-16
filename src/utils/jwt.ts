import jsonwebtoken from 'jsonwebtoken';
import User from '../interfaces/user';

export default class Token {
  public jwt = jsonwebtoken;

  public tokenGenerator(user: User): string {
    const payload = { id: user.id, username: user.username };
    return this.jwt.sign(payload, process.env.JWT_SECRET as string, {
      algorithm: 'HS256',
      expiresIn: '1d',
    });
  }
}
