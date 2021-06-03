import { NavLink } from "react-router-dom";
import "./DrinkCard.css"

export default function DrinkCard({ drinkData }){
    
    return(
        <div className="col-lg-3 col-md-4">
            <NavLink to={{pathname: `/drink/${drinkData.strDrink}`, state: {drink: drinkData}}}>
                <div className="card">
                    <img className="card-img-top" src={drinkData.strDrinkThumb} alt="drink"></img>
                    <div className="card-body">
                        <p className="card-text">{drinkData.strDrink}</p>
                    </div>
                </div>
            </NavLink>
        </div>
    );
}