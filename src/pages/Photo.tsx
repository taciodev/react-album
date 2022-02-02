import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../api";
import { Photo as PhotoType } from "../types/Photo";


export const Photo = () => {
  const { id } = useParams();
  const navigate =  useNavigate();

  const [ photoInfo, setPhotoInfo ] = useState<PhotoType>();

  useEffect(() => {
    if (id)
    loadPhoto(id);
  }, [])
  
  const loadPhoto = async (id:string) => {
    const photo = await api.getPhoto(id);
    setPhotoInfo(photo);
  }

  const handleBackButton = () => {
    navigate(-1);
  }


  return (
    <div>
      {photoInfo &&
      <>
        <button onClick={handleBackButton}>Voltar</button>
        <p>{photoInfo.title}</p>
        <img src={photoInfo.url} alt={photoInfo.title} />
      </>
      }
    </div>
  );
}