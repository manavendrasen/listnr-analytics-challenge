import axios from 'axios'

// url endpoint
import {GET_FORMATTED_JSON_URL} from '../constants/api/stats'
// load data from url
const getData = async () => {
  let res = await axios(GET_FORMATTED_JSON_URL);
  return res.data;
};

export default getData;
