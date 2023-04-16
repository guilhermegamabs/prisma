import { Request, Response } from 'express';
import { database } from '../database';

export class FindUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.params
    const user = await database.user.findUnique({
      where: {
        id: Number(id)
      }
    })

    return res.json(user);
  }
}