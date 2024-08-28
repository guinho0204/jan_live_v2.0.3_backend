import { Request,Response } from "express"
import { deleteseguindoservice } from "../deleteseguindoservice/deleteseguindoservice"

class deleteseguindocontroller{
  async handle(req:Request,res:Response){
       const id_seguindo = req.query.id_seguindo as string
       const id_user = req.query.id_user as string
       const deleteservice = new deleteseguindoservice()
       const deleteserv = deleteservice.execute({id_seguindo,id_user})

       return res.json(deleteserv)
  }
}
export {deleteseguindocontroller}