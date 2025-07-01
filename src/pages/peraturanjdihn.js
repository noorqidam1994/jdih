import { server } from '../config';
import axios from "axios";

const Peraturanjdihn = async() => {
  const resOpt = {
    credentials: 'same-origin',
    url: `${server}/api/jdihndata`,
    method: 'POST',
    timeout: 3000,
    headers: { 
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8' 
    },
    data: ""
  };
  const response = await axios(resOpt);
  const isidata = await response.data;
    return JSON.stringify(isidata)
  }

export default Peraturanjdihn