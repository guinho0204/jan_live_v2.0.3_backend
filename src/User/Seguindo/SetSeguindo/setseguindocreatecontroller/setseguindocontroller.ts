import { Request,Response } from "express";
import { setseguindoservice } from "../setseguindoservice/setseguindoservice";
class setseguindocontroller{
   async handle(req:Request,res:Response){
      
      const id_user = req.query.id_user as string
      const setseguidoreserv  = new setseguindoservice()
      const serv  =  await setseguidoreserv.service({id_user});
      return res.json(serv)
   }
}
export{setseguindocontroller}