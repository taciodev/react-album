import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../api";
import { Photo } from "../types/Photo";
import { Album as AlbumType } from "../types/Album";
import { PhotoItem } from '../components/PhotoItem';

export const Album = () => {
   const navigate = useNavigate();
   const { id } = useParams();

   const [album, setAlbum] = useState<Photo[]>([]); 
   const [albumInfo, setAlbumInfo] = useState<AlbumType>({id: 0, title: '', userId: 0});
   
   useEffect(() => {
      if (id)
         loadPhotos(id);
         loadAlbumInfo(id);
   }, []);

   const loadPhotos = async (id:string) => {
      const photos = await api.getPhotosFromAlbum(id);
      setAlbum(photos);
   }

   const loadAlbumInfo = async (id:string) => {
      const albumInfo = await api.getAlbum(id);
      setAlbumInfo(albumInfo);
   }

   const handleBackButton = () => {
      navigate(-1);
   }

   return (
      <>
         <button onClick={handleBackButton}>Voltar</button>
         <h1>{albumInfo.title}</h1>
         {album.map((item, index) => (
            <PhotoItem
               key={index}
               data={item}
            />
         ))}  
      </>
   );
}