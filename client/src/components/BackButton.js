import { NavLink } from "react-router-dom";
import "./BackButton.css"

export default function BackButton(){
    
    return(
        <NavLink to="/">
            <div id="backButton">
                <button type="button" className="btn btn-outline-light">Voltar</button>
            </div>
        </NavLink>
    );
}