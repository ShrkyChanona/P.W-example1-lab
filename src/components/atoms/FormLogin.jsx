import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import userContext from "../../context/userContext";
import Logo from "../../assets/imgs/hwootlogo-1.svg";
import "../../assets/styles/FormLogin.css";


function FormLogin() {
    //const [description, setDescription] = useState({msn:'Componente controlado'});
    const [stateForm,setStateForm] = useState({username: 'Chanona01', password: 'krakatoa'});
    const {isLoged, setIsLoged} = useContext(userContext);

    const handlerClick = (e) =>{
        e.preventDefault();
        //description = "nuevo mensaje"
        //setDescription({msn:userName});
        setIsLoged(true);
    }

    const handlerChange = (e)=>{
        //operador spreed: hace una union de con los valores de dos objetos conservando los que solo aparecen en el objeto original y remplazando los valores del objeto nuevo
        setStateForm({...stateForm,username: e.target.value});
    }

    const handlerChangePassword = (e) =>{
        setStateForm({...stateForm,password: e.target.value});
    }

    return (
        <div className="div-style">
            <img src={Logo} alt="" />
            <form action="">
                <div className="div-2">
                    <input type="text" value={stateForm.username} onChange={handlerChange} />
                    <input type="password" value={stateForm.password} onChange={handlerChangePassword} />
                    <button className="button" onClick={handlerClick}>Iniciar Sesion</button>
                    <div><Link to="/Register"> Registrarme</Link></div>
                    <div><Link to="/rick">rick and morty</Link></div>
                </div>
                <div>
                    <label>{JSON.stringify(stateForm)}</label>
                </div>
            </form>
        </div>
    );
}

export default FormLogin;
