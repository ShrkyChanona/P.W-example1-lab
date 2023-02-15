import { useState, useEffect, useContext } from "react";
import userContext from "../../context/userContext";
import Personaje from "../Molecules/Personaje";
import "../../assets/styles/Personajes.css"


function ListaPersonajes() {
    //desestructuracion de arreglo
    const [characters,setCharacters] = useState([]);
    const [loading,setLoading] = useState(false);
    const context = useContext(userContext);

    const handlerClick = (e) =>{
        // fetch("https://rickandmortyapi.com/api/character")
        // .then(res => res.json()) //return implicito: no lo estoy viendo pero ahi esta
        // .then(data => {
        //     console.log(data);
        //     setCharacters(data.results); //estoy agarrando el arreglo llamado result que me regresa mi api y lo guardo en el estado
        // })
        setLoading(!loading);
    }

    useEffect(()=>{
        console.log('useEffect');
        fetch("https://rickandmortyapi.com/api/character")
        .then(res => res.json()) //return implicito: no lo estoy viendo pero ahi esta
        .then(data => {
            console.log(data);
            setCharacters(data.results); //estoy agarrando el arreglo llamado result que me regresa mi api y lo guardo en el estado
        });
    },[loading])

    return ( 
        <>
        <h2>Lista de personajes </h2>
        <button onClick={handlerClick}>Mostrar personajes</button>
        <div className="colums">
            {loading && characters.map( character => <Personaje 
            key = {character.id}
            img={character.image}
            name={character.name} />)}
        </div>
        </>
     );
}

export default ListaPersonajes;