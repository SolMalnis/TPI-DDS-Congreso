import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import React from 'react';
import Menu from "./components/Menu"; // Asegúrate de importar el componente correctamente
import Inicio from './components/Inicio';
import Articulos from "./components/Articulos";
import Proveedores from "./components/Proveedores/Proveedores"; // Importa el componente de Proveedores

function App() {
  return (
    <div>
      <Router>
        <Menu />
        <div>
          <Routes>
            <Route path ='/' element={<Inicio />} />
            <Route path='/Inicio' element={<Inicio />} />
            <Route path='/articulos' element={<Articulos />} />
            <Route path='/proveedores' element={<Proveedores />} /> {/* Nueva ruta para Proveedores */}
            <Route path="/*" element={<Navigate to="/Inicio" replace />}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
