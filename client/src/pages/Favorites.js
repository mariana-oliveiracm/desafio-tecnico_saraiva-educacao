import "./Favorites.css"
import { NavLink } from "react-router-dom";
import Header from "../components/Header";


export default function Favorites() {

    let favorites = localStorage.getItem("favorites");
    favorites = JSON.parse(favorites);

    return (
        <div>
            <Header>Receitas Favoritas</Header>
            <div id="favoriteDrinks" className="row">
            {favorites === null || favorites.length === 0 ? (
                <h2 id="noFavoriteRecipe">Sem receitas favoritas</h2>
            ) :
            favorites.map((favDrink) => {
                return <NavLink to={{pathname: `/drink/${favDrink.strDrink}`, state: {drink: favDrink}}} key={favDrink.idDrink}>
                    <div className="card">
                        <img className="card-img-top" src={favDrink.strDrinkThumb} alt="drink"></img>
                        <div className="card-body">
                            <p className="card-text">{favDrink.strDrink}</p>
                        </div>
                    </div>                    
                </NavLink>
            })
            }
            </div>
        </div>
    );
}

