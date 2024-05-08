// eslint-disable-next-line no-unused-vars
import axios from "axios";
import{baseUrl} from './Constants/Constamts'

// eslint-disable-next-line no-unused-vars
const instance = axios.create({
    baseURL: baseUrl
    
  });

  export default instance
 