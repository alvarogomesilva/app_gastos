import { Request, Response } from "express";
import { unlink } from 'fs/promises';
import CreateUserService from "../../services/users/CreateUserService";
import AuthUserService from "../../services/users/AuthUserService";
import DetailUserService from "../../services/users/DetailUserService";
import UpdateUserService from "../../services/users/UpdateUserService";
import sharp from "sharp";
import AvatarUserService from "../../services/users/AvatarUserService";
import ListUserBalanceService from "../../services/users/ListUserBalanceService";

export const createUser = async (req: Request, res: Response) => {

    const { name, email, photo, password, balance } = req.body
    const user = await CreateUserService({ name, email, photo, password, balance })
    return res.json(user)
}

export const authUser = async (req: Request, res: Response) => {

    const { email, password } = req.body
    const user = await AuthUserService({ email, password })
    return res.json(user)
}

export const detailUser = async (req: Request, res: Response) => {

    const user_id = req.user_id
    const user = await DetailUserService({ user_id })
    return res.json(user)
}

export const updateUser = async (req: Request, res: Response) => {

    const { user_id, name, email } = req.body
    const user = await UpdateUserService({ user_id, name, email })
    return res.json(user)
}

export const avatarUser = async (req: Request, res: Response) => {
    const { user_id } = req.body

    if (req.file) {

        const extension = req.file.mimetype.substring(6)
        let randomName = Math.floor(Math.random() * 999999999) + Date.now()
        await sharp(req.file.path)
            .resize(500)
            .toFile(`./uploads/${randomName}.${extension}`)

        let photo = `${randomName}.${extension}`
        await unlink(req.file.path)
        
        const user = await AvatarUserService({ user_id, photo })
        return res.json(user)
    }

}

export const listBalance =  async (req: Request, res: Response) => {
    const user_id = req.user_id
    const date = req.query.date as string

    const user = await ListUserBalanceService({ user_id, date })
    return res.json(user)
}