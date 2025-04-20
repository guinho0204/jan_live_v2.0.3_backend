

import { prismaCli } from "../../../../prisma/conection"

interface UidRequest{
    uid_live:string;
}

class mostrachatliveservice{
    async execute({uid_live}:UidRequest){
       
        
        const mostrachat = await prismaCli.chatLive.findMany({
            where:{
                Id_live:uid_live
            },
            orderBy:{
                Create_at:'desc'
            },
            select:{
                 Icon_presente:true,
                 Id_live:true,
                 Id_user:true,
                 Menssagem:true,
                 User:true,
                 Uuid_chatlive:true,
                 Valor_presente:true,

            }
        })
 
         return mostrachat

    }
}
export{mostrachatliveservice}