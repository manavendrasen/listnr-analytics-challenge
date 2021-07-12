import axios from 'axios'

// url endpoint
const URL = "https://gist.githubusercontent.com/manavendrasen/c83b7d0ef8cbb13b71b71f536494297b/raw/b9d8225a0e6dced8275a2a5af97325c2a5c31fb5/results.json"

// load data from url
const getData = async () => {
  let res = await axios(URL);
  return res.data;
};

export default getData;
