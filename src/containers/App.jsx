import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import userContext from '../context/userContext';
import Home from '../components/pages/Home';
import Login from '../components/pages/Login';
import Register from '../components/pages/Register';
import Flexbox from '../components/pages/Flexbox';
import RickAndMorty from '../components/pages/Rick&Morty';

function App() {
    const [isLoged, setIsLoged] = useState(false);
    return (
        // BrowserRouter ayuda a sincronizar nuestras rutas con el historial de navegacion
        <BrowserRouter>
        {/* Provider me permite vincular mi pagina con mi aplicacion */}
            <userContext.Provider value={{isLoged,setIsLoged}}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path='/flexbox' element={<Flexbox />} />
                    <Route path='/rick' element={<RickAndMorty isLoged={isLoged} />} />
                </Routes>
            </userContext.Provider>
        </BrowserRouter>
    );
}

export default App;
