import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './components/Pages/Home/Home';
import Estudio from './components/Pages/Estudio/Estudio';
import Servicios from './components/Pages/Servicios/Servicios';
import Equipo from './components/Pages/Equipo/Equipo';
import Clientes from './components/Pages/Clientes/Clientes';
import Contacto from './components/Pages/Contacto/Contacto';
import WhatsAppBtn from './components/WhatsAppBtn/WhatsAppBtn';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route
                path="/" 
                exact 
                element={ <Home/> } 
            />
            <Route
                path="/estudio" 
                exact 
                element={ <Estudio/> } 
            />
            <Route
                path="/servicios" 
                exact 
                element={ <Servicios/> } 
            />
            <Route
                path="/equipo" 
                exact 
                element={ <Equipo/> } 
            />
            <Route
                path="/clientes" 
                exact 
                element={ <Clientes/> } 
            />
            <Route
                path="/contacto" 
                exact 
                element={ <Contacto/> } 
            />
        </Routes>
        <WhatsAppBtn />
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
