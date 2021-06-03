import "./NavBar.css"
import Share from "./Share";
import logo from "../logo.png"
import { NavLink } from "react-router-dom";

export default function NavBar({ onChangeSearch, onChangeRadio}){

    const handleSearchChange = (event) =>{
        onChangeSearch(event.target.value);
    };

    const handleRadioChange = (event) => {
        onChangeRadio(event.target.value);
    };

    return(
        <div>
            <div className="row navBar">
                <div className="col-md-4">
                    <img id="logo" src={logo} alt="logo"></img>
                    <h1>BEBIDAS SA</h1>
                    <Share />

                </div>
                <div className="col-md-4 inputs">
                    <label>
                        <input type="radio" value="name" name="typeOfSearch" onChange={handleRadioChange}></input>
                        por nome
                    </label>
                    <br></br>
                    <label>
                        <input type="radio" value="letter" name="typeOfSearch" onChange={handleRadioChange}></input>
                        por letra
                    </label>
                    <br></br>
                    <br></br>
                    <i className="bi bi-search"></i>
                    <input id="search" type="text" placeholder="search" onKeyUp={handleSearchChange}></input>
                </div>
                <div id="favoriteRecipes"className="col-md-4">
                    <NavLink to="/favorites">
                        <button type="button" className="btn btn-light">Receitas Favoritas</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}