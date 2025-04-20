import { prismaCli } from "../../../prisma/conection";

interface LiveRequest{
    image_live:string;
    descricao:string;
    live_id:number;
    rcoin_recebe_moeda_live:string;
    pcoin_paga_moeda_live:string;
    nome:string;
    uid_user:string;
    vizulive:string;
}

class createliveservice{
     async execute({image_live,descricao,live_id,vizulive,rcoin_recebe_moeda_live,pcoin_paga_moeda_live,nome,uid_user}:LiveRequest){
      
     
     const liveid = live_id.toString();        

     const setuser = await prismaCli.user.findUnique({
      where:{
        Uid_live: live_id
      },
      select:{
        Data_create:true,
        Descricao:true,
        Followers:true,
        Following:true,
        Image_user:true,
        Nivel:true,
        Nome:true,
        Numero_celular:true,
        Pcoin_paga_moeda_user:true,
        Rcoin_recebe_moeda_user:true,
        Saldo_money:true,
        Uid_live:true,
        Uuid_user:true,
        Visualisacoes:true,

      }
     })
           const createlive = await prismaCli.live.create({
             data:{
                Live_id:liveid,
                Descricao:descricao,
                Image_live:image_live,
                RCoin_recebe_moeda_live:setuser.Rcoin_recebe_moeda_user,
                Nome:nome,
                Pcoin_paga_moeda_live:pcoin_paga_moeda_live,
                uid_user:uid_user,
                VizuLive:vizulive


             }
           })
          

           return setuser;
     }
}
export{createliveservice}