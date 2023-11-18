import { Request, Response } from "express";
import DeleteReceiveService from "../../services/receives/DeleteReceiveService";

const DeleteReceiveController = async (req: Request, res: Response) => {
    const id_receive = req.query.id_receive as string
    
    const receive = await DeleteReceiveService({ id_receive })
    return res.json(receive)
}

export default DeleteReceiveController;