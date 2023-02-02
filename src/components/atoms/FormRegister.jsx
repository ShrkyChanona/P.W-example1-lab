import { useRef } from "react"; //paso 1
import { useNavigate } from "react-router-dom";
import "../../assets/styles/FormRegister.css"

function FormRegister() {
    const navigate = useNavigate();
    const name = useRef();
    const userName = useRef();
    const password = useRef();
    const form = useRef();

    const handlerClick = (e) => {
        //sin e preventDefault el form cargara al servidor
        e.preventDefault();
        /* console.log(name);
        alert('Nombre: ' + name.current.value);
        alert('Usuario:' + userName.current.value);
        alert('Password:' + password.current.value); */
        //navigate("/");

        //instrucciones para el elemento form
        const newForm = new FormData(form.current) //FormData es una clase de JavaScript
        alert('Nombre: ' + newForm.get('name') + ', Usuario: ' + newForm.get('usuario') + ', Contraseña: ' + newForm.get('contra'));
    }

    return (
        <div className="div-father">
            <form ref={form}>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input name="name" className="caption" type="text" id="name" />
                </div>

                <div>
                    <label>
                        Usuario <br />
                        <input className="caption" type="text" name="usuario"/>
                    </label>
                </div>

                <div>
                    <label>Contraseña</label>
                    <input className="caption" type="password" name="contra"/>
                </div>

                {/* todos los eventos deben ir en camelCase */}
                <button onClick={handlerClick}>Registro</button>
            </form>
        </div>
    );
}

export default FormRegister;