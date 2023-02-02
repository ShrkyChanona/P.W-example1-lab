import Personaje from "../components/Molecules/Personaje";
import Title from "../components/atoms/Title"
import ListaPersonajes from "../components/Organism/ListaPersonajes";

function RickAndMorty() {
    return ( 
        <>
        {/* <header>
            <Title msn={"Lista de personajes"}></Title>
        </header>
            <body>
                <Personaje></Personaje>
            </body> */}
            <ListaPersonajes></ListaPersonajes>
        </>
     );
}

export default RickAndMorty;