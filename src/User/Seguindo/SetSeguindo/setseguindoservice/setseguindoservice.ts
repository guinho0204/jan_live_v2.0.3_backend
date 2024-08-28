import { prismaCli } from "../../../../prisma/conection"

interface SeguindoRequest{
  id_user:string;
}

class setseguindoservice{
    async service({id_user}:SeguindoRequest){
        
        const id_users = parseInt(id_user)
      const setseguidor = await prismaCli.seguidores.findMany({
        where:{
          Id_user:id_users,
        },
        select:{
          Id_seguidor:true,
          Nome_seguido:true,
          Uuid_seguidores:true,
          Id_user:true,
          Status:true,
          Cor:true
        }
      })
     
      return setseguidor 
      console.log(id_user)
    }
}
export {setseguindoservice}