import React from "react";
import { api } from '../api';
import { Photos } from '../types/Photos';
import { useEffect, useState } from 'react';
import { TitlePhotos } from '../components/TitlePhotos' 


export const ListHome = () => {
  const [photos, setPhotos] = useState<Photos[]>();

  const loadPhotos = async () => {
    const json = await api.getAllPhotos();
    setPhotos(json);
  }

  useEffect(() => {
    loadPhotos();
  }, []);

  return (
    <div>
      {photos?.map((item, index) => (
        <TitlePhotos data={item} key={index}/>
      ))}
    </div>
  );
} 

