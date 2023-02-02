import "../../assets/styles/Personajes.css"

function Personaje({img,name}) {
    return ( 
        <>
            <div className="character">
                <img className="img" src={img} alt={name} />
                <div>
                    <span>{name}</span>
                </div>
            </div>
        </>
     );
}

export default Personaje;