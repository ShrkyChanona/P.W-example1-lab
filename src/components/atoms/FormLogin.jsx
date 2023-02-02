import { Link } from "react-router-dom";
import Logo from "../../assets/imgs/hwootlogo-1.svg";
import "../../assets/styles/FormLogin.css";
import { useState } from "react";

function FormLogin() {
    const [description, setDescription] = useState({msn:'Componente controlado'});
    //const [userName, setUsername] = useState('');
    const [stateForm,setStateForm] = useState({username: '', password: ''});
    //let description = "componente presentacional"
    const handlerClick = (e) =>{
        e.preventDefault();
        //description = "nuevo mensaje"
        setDescription({msn:userName});
    }

    const handlerChange = (e)=>{
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
                    <button className="button" onClick={handlerClick}>Iniciar Sesion</button> <br />
                    <Link to="/Register"> Registrarme</Link>
                </div>
                <div>
                    <label>{JSON.stringify(stateForm)}</label>
                </div>
            </form>
        </div>
    );
}

export default FormLogin;
