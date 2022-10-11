import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/users';

const createUser = async (credentials) => {
  const response = await axios.post(baseUrl, credentials)
  .then((res)=>console.log(res.response.data))
  .catch((e)=>console.log(e.response.data))
  return response.data;
};

export default { createUser };
