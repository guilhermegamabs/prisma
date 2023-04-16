import { Router } from 'express';
import { CreateUserController } from '../controllers/CreateUserController';
import { FindUserController } from '../controllers/FindUserController';
import { DeleteUserController } from '../controllers/DeleteUserController';
import { EditUserController } from '../controllers/EditUserController';

const router = Router();

const createUser = new CreateUserController();
const findUser = new FindUserController();
const deleteUser = new DeleteUserController();
const editUser = new EditUserController();

router.post('/user', createUser.handle);
router.get('/user/:id', findUser.handle);
router.delete('/user/:id', deleteUser.handle);
router.post('/user/:id', editUser.handle);

export { router };