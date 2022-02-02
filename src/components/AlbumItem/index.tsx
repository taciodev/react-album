import { Link } from 'react-router-dom';
import './style.css';

type Props = {
  id: number;
  title: string
}

export const AlbumItem = ({ id, title }:Props) => {
  return (
    <Link to={`/albums/${id}`} className='album'>
      {title}
    </Link>
  );
}