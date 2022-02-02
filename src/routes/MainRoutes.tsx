import { useRoutes } from "react-router-dom"
import { Album } from "../pages/Album";
import { Home } from "../pages/Home";
import { Photo } from "../pages/Photo";

export const MainRoutes = () => {
  return useRoutes([
    {path: '/', element: <Home />},
    {path: '/albums/:id', element: <Album /> },
    {path: '/photo/:id', element: <Photo /> }
  ]);
}