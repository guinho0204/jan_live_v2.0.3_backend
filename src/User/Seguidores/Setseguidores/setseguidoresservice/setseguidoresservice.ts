import { prismaCli } from "../../../../prisma/conection";

interface seguidoresRequest{
    id_seguidor:string
    id_user:string
}
class setseguidoresservice{
   async execute({id_seguidor,id_user}:seguidoresRequest){
        const id = parseInt(id_user)
       const setseguidor = await prismaCli.seguidores.findMany({
         where:{
            Id_seguidor:id_seguidor,
            Id_user:id
         },
         select:{
            Id_seguidor:true,
            Nome_seguido:true,
            Id_user:true,
            Uuid_seguidores:true,
            Status:true,
         }
       })
       
       return setseguidor
   }
}
export{setseguidoresservice}