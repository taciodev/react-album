import { useRoutes } from "react-router-dom"
import { Albums } from "../components/Albums";
import { ListHome } from "../components/ListHome";

export const MainRoutes = () => {
  return useRoutes([
    {path: '/', element: <ListHome />},
    {path: '/albums/:id/photos', element: <Albums /> }
  ]);
}