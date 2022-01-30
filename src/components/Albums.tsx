import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Albumns } from "../types/Albums";
import { api } from "../api";
import { Grid } from "./Grid";
import { Container } from "./Container";

const http = axios.create({
   baseURL: 'https://jsonplaceholder.typicode.com',
 });;

export const Albums = () => {
   const [album, setAlbum] = useState<Albumns[]>([]); 
   let { id } = useParams();

   const fetchAlbum = async (id:any) => {
      const json = await api.getAlbum(id);
      setAlbum(json);
   }

   useEffect(() => {
      fetchAlbum(id);
   }, [])

   return (
      <Grid>
         {album.map( (item, index) => (
            <Container key={index}>
               <p>{ item.title }</p>
               <img src={item.thumbnailUrl} /> <br />
            </Container>
         ))}  
      </Grid>
   );
}