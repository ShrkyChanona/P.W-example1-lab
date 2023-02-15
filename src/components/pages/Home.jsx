import { Link } from "react-router-dom";
import Header from "../atoms/Header";
import ListStudent from "../Molecules/ListStudent";


function App(){
    const listStudent = [
    {
        id: 1,
        name: "Carlos"
    },
    {
        id: 2,
        name: "Chanona"
    },
    {
        id: 3,
        name: "Luis"
    },
    {
        id: 4,
        name: "Pedro"
    },
    {
        id: 5,
        name: "Fernando"
    }
]
    return(
        <>
        <Header/>
        <ListStudent listStudent={listStudent}/>
        <Link to="/login">Iniciar Sesion</Link>
        <Link to="/rick"> api de rick</Link>
        </>
    )
}

export default App;