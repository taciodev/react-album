import './App.css';
import { MainRoutes } from './routes/MainRoutes';

function App() {

  return (
    <div>
      <h1 style={{
        textAlign: 'center'
      }}>Galeria de Fotos</h1>
      <hr />
        <MainRoutes />
    </div>
  );
}

export default App;
