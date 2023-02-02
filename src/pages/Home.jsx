import { Link } from "react-router-dom";
import Header from "../components/atoms/Header";
import ListStudent from "../components/Molecules/ListStudent";


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
        </>
    )
}

export default App;