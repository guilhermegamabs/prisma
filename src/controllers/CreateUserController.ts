import { Request, Response } from 'express';
import { database } from '../database';

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email } = req.body;

    const user = await database.user.create({
      data: {
        name,
        email
      }
    });

    return res.json(user);
  }
}