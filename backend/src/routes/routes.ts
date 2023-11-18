import { Router } from "express";
import { authUser, avatarUser, createUser, detailUser, listBalance, updateUser } from "../controllers/users/UserController";
import authenticate from "../middlewares/authenticate";

import upload from "../config/multer";
import { CreateReceiveController } from "../controllers/receives/CreateReceiveController";
import { ListReceiveController } from "../controllers/receives/ListReceiveController";
import DeleteReceiveController from "../controllers/receives/DeleteReceiveController";

const Route = Router()

Route.post('/create', createUser)
Route.post('/login', authUser)
Route.get('/me', authenticate, detailUser)

Route.post('/update', authenticate, updateUser)
Route.post('/avatar', authenticate, upload.single('avatar'), avatarUser)

Route.get('/balance', authenticate, listBalance)

Route.post('/receive', authenticate, CreateReceiveController)
Route.get('/moviments', authenticate, ListReceiveController)
Route.delete('/receive', authenticate, DeleteReceiveController)

export default Route;