import { Request,Response } from "express";
import { setseguidoresservice } from "../setseguidoresservice/setseguidoresservice"; 

class setseguidorescontroller{
   async handle(req:Request,res:Response){
        const id_seguidor= req.query.id_seguidor as string
        const id_user = req.query.id_user as string
        const setseguidoresservic = new  setseguidoresservice()
        const setseguidores = await setseguidoresservic.execute({id_seguidor,id_user})
        return res.json(setseguidores)
   }
}
export{setseguidorescontroller}