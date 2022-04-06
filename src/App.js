import React, {Suspense} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Pages/Home/Home';
import Footer from './components/Footer/Footer';
import WhatsAppBtn from './components/WhatsAppBtn/WhatsAppBtn';
import MainContainer from './components/MainContainer/MainContainer';
import MainTitle from './assets/images/mainTitle.png';
import './App.css';
const Servicios = React.lazy(() => import('./components/Pages/Servicios/Servicios'));
const Estudio = React.lazy(() => import('./components/Pages/Estudio/Estudio'));
const Equipo = React.lazy(() => import('./components/Pages/Equipo/Equipo'));
const Clientes = React.lazy(() => import('./components/Pages/Clientes/Clientes'));
const Contacto = React.lazy(() => import('./components/Pages/Contacto/Contacto'));

function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Suspense fallback={null}>
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
            <Footer />
        </Suspense>
    </BrowserRouter>
  );
}

export default App;