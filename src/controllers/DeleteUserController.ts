import { Request, Response } from 'express';
import { database } from '../database';

export class DeleteUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const user = await database.user.findUnique({
      where: {
        id: Number(id)
      }
    });

    if(!user) return res.status(400).json('This user does not exists');


    const deleteUser = await database.user.delete({
      where: {
        id: Number(id)
      }
    })

    return res.json('User deleted successfully');
  }
};