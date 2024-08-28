import { prismaCli } from "../../../../prisma/conection";


interface DeleteRequest{
    id_seguindo:string;
    id_user:string;
}

class deleteseguindoservice{
  async execute({id_seguindo,id_user}:DeleteRequest){
    const id = parseInt(id_user)
     const deleteservice = await prismaCli.seguidores.deleteMany({
        where:{
            Id_user:id,
            Id_seguidor:id_seguindo, 
        }
     })
     const setUser = await prismaCli.seguidores.findMany({
       where:{
         Id_seguidor:id_seguindo,
         Id_user:id
       }
     })
     return setUser

  }
}
export{deleteseguindoservice}