import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IProduct } from '../interfaces/products';
import mysql from './connection';

export default class ProductModel {
  private connection = mysql;

  public async create(product: IProduct): Promise<IProduct> {
    const { name, amount } = product;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?,?)',
      [name, amount],
    );
    return { id: insertId, ...product };
  }

  public async getAll(): Promise<IProduct[]> {
    const [rows] = await this.connection.execute<IProduct[] & RowDataPacket[]>(
      'SELECT id, name, amount FROM Trybesmith.Products',
    );
    return rows;
  }
}