import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './components/Pages/Home/Home';
import WhatsAppBtn from './components/WhatsAppBtn/WhatsAppBtn';
import MainContainer from './components/MainContainer/MainContainer';
import MainTitle from './assets/images/mainTitle.png';
import Servicios from './components/Pages/Servicios/Servicios';
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
                element={ <MainContainer title='SERVICIOS' typeOfTitle='h1' content={<Servicios />} /> } 
            />
        </Routes>
        <WhatsAppBtn />
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
