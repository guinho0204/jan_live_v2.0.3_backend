import { Request,Response } from "express"
import { createPresenteService } from "../createPresentesService/createPresenteService"


class createPresentesController{
    async handle(req:Request,res:Response){
        
        const {nome,valor} = req.body;
        const presenteService = new createPresenteService();
        
        if(!req.file){
                throw new Error("error upload file")
        }else{
           const {originalname, filename:presente_imagem} = req.file;

           const presenteSever = await presenteService.execute({
               nome,
               valor,
               presente_imagem,
           })
            
           return res.json(presenteSever);
        }
    }
    
}
export{createPresentesController}