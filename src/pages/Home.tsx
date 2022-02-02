import { useEffect, useState } from 'react';
import { api } from '../api';
import { Album } from '../types/Album';
import { AlbumItem } from '../components/AlbumItem' 


export const Home = () => {
  const [photos, setPhotos] = useState<Album[]>([]);

  const loadAlbums = async () => {
    const albums = await api.getAllAlbums();
    setPhotos(albums);
  }

  useEffect(() => {
    loadAlbums();
  }, []);

  return (
    <div>
      {photos?.map((item, index) => (
        <AlbumItem 
          id={item.id} 
          title={item.title} 
          key={index}
        />
      ))}
    </div>
  );
} 

