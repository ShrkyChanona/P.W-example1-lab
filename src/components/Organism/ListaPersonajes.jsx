import { useState } from "react";
import Personaje from "../Molecules/Personaje";
import "../../assets/styles/Personajes.css"


function ListaPersonajes() {
    //desestructuracion de arreglo
    const [characters,setCharacters] = useState([]);

    const handlerClick = (e) =>{
        fetch("https://rickandmortyapi.com/api/character")
        .then(res => res.json()) //return implicito: no lo estoy viendo pero ahi esta
        .then(data => {
            console.log(data);
            setCharacters(data.results); //estoy agarrando el arreglo llamado result que me regresa mi api y lo guardo en el estado
        })
    }
    return ( 
        <>
        <h2>Lista de personajes</h2>
        <button onClick={handlerClick}>Mostrar personajes</button>
        <div className="colums">
            {characters.map( character => <Personaje 
            img={character.image}
            name={character.name} />)}
        </div>
        </>
     );
}

export default ListaPersonajes;