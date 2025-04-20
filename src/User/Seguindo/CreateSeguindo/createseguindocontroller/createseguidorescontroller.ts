import { Request,Response } from "express";
import { createseguindoservice } from "../createseguindoservice/createseguidoresservice";

class createseguindocontroller{
    async handle(req:Request,res:Response){

        const {id_seguidor,id_user,nome_seguido,statused} = req.body
        const createseguidorsevice = new createseguindoservice()
        const createsegui = await createseguidorsevice.execute({id_seguidor,id_user,nome_seguido,statused})
        return res.json(createsegui)
    }
}
export{createseguindocontroller}