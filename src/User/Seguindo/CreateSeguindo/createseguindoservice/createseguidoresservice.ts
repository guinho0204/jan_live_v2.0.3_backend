
import { prismaCli } from "../../../../prisma/conection";

interface Userquest{
  id_seguidor:string;
  id_user:string;
  nome_seguido:string;
  statused:string
}
class createseguindoservice{
    async execute({id_seguidor,id_user,nome_seguido,statused}:Userquest){
      try{
         const id = parseInt(id_user)
          const createseguidores = await prismaCli.seguidores.create({
            data:{
               Id_user:id,
               Id_seguidor:id_seguidor,
               Nome_seguido:nome_seguido,
               Status:statused,
               Cor:'teste'
            }
          }) 

          const setseguidor = prismaCli.seguidores.findMany({
            where:{
              Id_seguidor:id_seguidor,
              Id_user:id
            }
          })

          return setseguidor

      }catch(err){
        console.log(err+"erro ao criar seguidor ou usuraio ja segue")
      }
      
    }
    
}
export{createseguindoservice}