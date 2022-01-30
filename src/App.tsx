import './App.css';
import { MainRoutes } from './routes/MainRoutes';

function App() {

  return (
    <div>

      <header>
        <h1 style={{
          textAlign: 'center'
        }}>Galeria de Fotos</h1>
      </header>

      <hr />

      <main>
        <MainRoutes />
      </main>

    </div>
  );
}

export default App;
