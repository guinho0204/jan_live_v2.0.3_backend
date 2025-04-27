 import { Request,Response } from "express"
import { createseguidoresservice } from "../createseguidoresservice/createseguidoresservice"

class createseguidorescontroller{
  async handle(req:Request,res:Response){
     
    const id_seguidor = req.query.id_seguidor  as string
    const createseguidor = new createseguidoresservice()
    const segui = await createseguidor.execute({id_seguidor})
    return res.json(segui)
  }
}
export{createseguidorescontroller}