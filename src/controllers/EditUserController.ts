import { Request, Response } from 'express';
import { database } from '../database';


export class EditUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { name } = req.body;
    
    const findUser = await database.user.findUnique({
      where: {
        id: Number(id)
      }
    });

    if (!findUser) return res.status(400).json('This user does not exists');

    const updateUsers = await database.user.update({
      where: {
        id: Number(id)
      },
      data: {
        name
      },
    });

    return res.status(200).json('User successfully edited');
  }
};