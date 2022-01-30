import axios from "axios";

const http = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});;

export const api = {
  getAllPhotos: async () => {
    const response = await http.get('/albums');
    return response.data;
  }, 

}