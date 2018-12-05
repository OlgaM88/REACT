import axios from 'axios';

const BASE_URL = 'http://localhost:3001/menu';

const getAllMenuItems = () =>
  axios.get(BASE_URL).then(response => response.data);

const getItemMenuById = id =>
  axios.get(`${BASE_URL}/${id}`).then(response => response);

const deleteItemById = id =>
  axios
    .delete(`${BASE_URL}/${id}`)
    .then(response => response.text === 200)
    .catch(object => {
      if (object.type === 'error') {
        console.log(object.type, object.message);
      }
    });
const addMenuItem = item => axios.post(BASE_URL, item);

export { getAllMenuItems, getItemMenuById, deleteItemById, addMenuItem };
