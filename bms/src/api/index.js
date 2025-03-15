import axios from "axios";

const url =""
export const execute=(params)=>{
  return axios.post(url,params);
}
