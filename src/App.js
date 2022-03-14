import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
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
        </Routes>
        <WhatsAppBtn />
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
