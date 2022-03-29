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
import MainContainer from './components/MainContainer/MainContainer';
import MainTitle from './assets/images/mainTitle.png';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route
                path="/" 
                exact 
                element={ <MainContainer title={MainTitle} typeOfTitle='img' content={<Home />} /> } 
            />
            <Route
                path="/servicios" 
                exact 
                element={ <MainContainer title='Servicios' typeOfTitle='h1' content={<Servicios />} /> } 
            />
            <Route
                path="/estudio" 
                exact 
                element={ <MainContainer title='El Estudio' typeOfTitle='h1' content={<Estudio />} /> } 
            />
            <Route
                path="/equipo" 
                exact 
                element={ <MainContainer title='El Equipo' typeOfTitle='h1' content={<Equipo />} /> } 
            />
            <Route
                path="/clientes" 
                exact 
                element={ <MainContainer title='Clientes' typeOfTitle='h1' content={<Clientes />} /> }
            />
            <Route
                path="/contacto" 
                exact 
                element={ <MainContainer title='Contacto' typeOfTitle='h1' content={<Contacto />} /> }
            />
        </Routes>
        <WhatsAppBtn />
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
