import { useParams } from "react-router-dom";
import axios from "axios";

const http = axios.create({
   baseURL: 'https://jsonplaceholder.typicode.com',
 });;

export const Albums = () => {
   let { id } = useParams();

   const getAlbum = async (id:any) => {
      const response = await http.get(`/albums/${id}/photos`)
      return response.data;
   }

  console.log(getAlbum(id));

   return (
      <div>
       
      </div>
   );
}