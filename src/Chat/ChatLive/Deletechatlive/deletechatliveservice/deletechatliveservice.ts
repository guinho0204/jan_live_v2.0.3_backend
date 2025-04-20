import { prismaCli } from "../../../../prisma/conection"


interface UidRequest{
    uid_live:string;
}

class deletechatliveservice{
    async execute({uid_live}:UidRequest){
       
        
        const deletechatLive = await prismaCli.chatLive.deleteMany({
            where:{
                Id_live:uid_live
            }
        })
 
         return deletechatLive

    }
}
export{deletechatliveservice}