import Title from "../atoms/Title";
import Widge from "../atoms/Widge";

function ListStudent({listStudent}) {
    return ( 
        <>
            <Title msn="Lista de alumnos del 4B"/>
            {
                //el metodo map requiere un retorno obligatorio, implicito o explicito
                listStudent.map(itemStudent => (
                    <Widge key={itemStudent.id} item={itemStudent}></Widge>
                )
                )
            }
        </>
     );
}

export default ListStudent;