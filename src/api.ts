import axios from "axios";

const request = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});;

export const api = {
  getAllAlbums: async () => {
    const req = await request('/albums');
    return req.data;
  }, 
  getAlbum: async (id:string) => {
    const req = await request(`/albums/${id}`)
    return req.data;
 },
 getPhotosFromAlbum: async (id: string) => {
  const req = await request(`/albums/${id}/photos`);
  return req.data;
},
 getPhoto: async (id:string) => {
    const req = await request(`/photos/${id}`)
    return req.data;
 }

}