import axios from "axios";
const baseUrl = "http://localhost:3001/api/images/";

/*
form data, with {img: file, name: 'product_name+username'}
*/
const uploadImage = async (fd) => {
  let config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };
  const response = await axios.post(baseUrl, fd, config);
  // .then((res)=>console.log(res.response.data))
  // .catch((e)=>console.log(e.response.data))
  return response.data;
};

const getImageByID = async (img_id) => {
  const response = await axios.get(baseUrl + img_id);
  return response.data;
};

const getAllImages = () => {
  return fetch(baseUrl)
    .then((res) => res.json())
    .catch((e) => console.log(e));
};

const deleteImageById = (img_id) => {
  axios.delete(baseUrl + img_id);
};
export default { uploadImage, getImageByID, getAllImages, deleteImageById };
