import { useNavigate } from 'react-router-dom';
import { Photos} from '../types/Photos'
import { Container } from './Container'; 

type TitlePhotosProps = {
  data: Photos;
  key: number;
}

export const TitlePhotos = ({ data }:TitlePhotosProps) => {
  const navigate = useNavigate();
  const handleAlbumPhotos = () => {
    navigate(`/albums/${data.id}/photos`);
  }

  return (
    <Container onClick={handleAlbumPhotos}>
      {data.title}
    </Container>
  );
}