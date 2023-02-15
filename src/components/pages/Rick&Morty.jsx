import { useNavigate, Navigate } from "react-router-dom";
import ListaPersonajes from "../Organism/ListaPersonajes";

function RickAndMorty({isLoged}) {
    //este hook se usa fuera del return: const navigate = useNavigate();
    return ( 
        (isLoged) ? <ListaPersonajes/> : <Navigate to="/login"/>
     );
}

export default RickAndMorty;