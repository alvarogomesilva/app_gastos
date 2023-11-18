import { Request, Response } from "express";
import ListReceiveService from "../../services/receives/ListReceiveService";

export const ListReceiveController = async (req: Request, res: Response) => {
    const date = req.query.date as string
    const user_id = req.user_id
    
    const receives = await ListReceiveService({ user_id, date })
    return res.json(receives)
}
