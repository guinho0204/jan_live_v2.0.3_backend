import axios from "axios";

const axiosUrl =  axios.create({
   baseURL:'http://192.168.0.22:4090'
})

export{axiosUrl}