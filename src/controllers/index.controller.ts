import { Request, Response} from "express";

export function IndexWelcome(req: Request, res: Response){
    
    res.status(200).json("Welocome to my API")
};