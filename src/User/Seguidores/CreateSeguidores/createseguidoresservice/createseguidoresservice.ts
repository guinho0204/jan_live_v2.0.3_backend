import { prismaCli } from "../../../../prisma/conection"

interface getSeguidor{
   id_seguidor:string;
}
class createseguidoresservice{
    async execute({id_seguidor}:getSeguidor){


       
       const createseguidores = await prismaCli.seguidores.findMany({
        where:{
            Id_seguidor:id_seguidor
        }
       })
       return createseguidores

    }
}
export{createseguidoresservice}