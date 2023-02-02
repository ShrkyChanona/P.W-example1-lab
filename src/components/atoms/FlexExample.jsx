import { useNavigate } from "react-router-dom";
import "../../assets/styles/FlexStyle.css"

function FlexExample() {
    return ( 
        <div id="div-container">
            
            <div className="div-child">
                <h1>1</h1>
            </div>

            <div className="div-child">
                <h1>2</h1>
            </div>

            <div className="div-child">
                <h1>3</h1>
            </div>

            <div className="div-child">
                <h1>4</h1>
            </div>

            <div className="div-child">
                <h1>5</h1>
            </div>

            <div className="div-child">
                <h1>6</h1>
            </div>
        </div>
     );
}

export default FlexExample;