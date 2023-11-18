import { Request, Response } from "express"
import CreateReceiveService from "../../services/receives/CreateReceiveService"

export const CreateReceiveController = async (req: Request, res: Response) => {

    const { user_id, description, value, type, date  } = req.body
    const receive = await CreateReceiveService({ user_id, description, value, type, date })
    return res.json(receive)
} 