import { createpixservice } from "../createpagpixservice/createpixservice";
import { Request,Response } from "express";


class createpixcontroller{
    async handle(req:Request,res:Response){
        const {valore,nome,cpf,uid_user,quantidade_moedas} = req.body
        const createpixservi = new createpixservice()
        const createpix = await createpixservi.execute({valore,nome,cpf,uid_user,quantidade_moedas})
        return res.json(createpix)
    }
}
export{createpixcontroller}