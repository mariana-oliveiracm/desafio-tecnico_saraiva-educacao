import "./Recipe.css"
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import Header from "../components/Header";

export default function Recipe() {

    const location = useLocation();
    const { drink } = location.state;
    const [favorites, setFavorites] = useState("");
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(()=>{
        let currentFavorites = localStorage.getItem("favorites");
        currentFavorites = JSON.parse(currentFavorites);
        setFavorites(currentFavorites);
        
    }, []);

    useEffect(() =>{
        checkFavorites();
    });

    const checkFavorites = () => {
        if (favorites === "" || favorites === null){
            return
        };

        const findDrink = favorites.findIndex((favDrink) => {
            return favDrink.idDrink === drink.idDrink;
        });
        setIsFavorite(findDrink > -1);
    };

    const addFavorite = () => {
        if (favorites === null){
            let favorites = [];
            favorites.push(drink);
            localStorage.setItem("favorites", JSON.stringify(favorites));
        } else if (favorites !== null){
            favorites.push(drink);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            setFavorites(favorites);
        }
        setIsFavorite(true);
    };

    const removeFavorite = () => {
        const favoritesUpdated = favorites.filter((favDrink) => {
            return favDrink.idDrink !== drink.idDrink;    
        });
        localStorage.setItem("favorites", JSON.stringify(favoritesUpdated));
        setFavorites(favoritesUpdated);
        setIsFavorite(false);
    };

    const setIngredients = () => {
        let ingredients = [];
        ingredients.push(drink.strIngredient1, drink.strIngredient2, drink.strIngredient3, drink.strIngredient4, drink.strIngredient5, drink.strIngredient6, drink.strIngredient7, drink.strIngredient8, drink.strIngredient9, drink.strIngredient10, drink.strIngredient11, drink.strIngredient12, drink.strIngredient13, drink.strIngredient14, drink.strIngredient15);
        ingredients = ingredients.filter((ingredient) => {
            return ingredient !== null && ingredient !== ""
        });

        let measures = [];
        measures.push(drink.strMeasure1, drink.strMeasure2, drink.strMeasure3, drink.strMeasure4, drink.strMeasure5, drink.strMeasure6, drink.strMeasure7, drink.strMeasure8, drink.strMeasure9, drink.strMeasure10, drink.strMeasure11, drink.strMeasure12, drink.strMeasure13, drink.strMeasure14, drink.strMeasure15);
        measures = measures.filter((measure) => {
            return measure !== null && measure !== ""
        });

        let ingredientAndMeasure = [];
        for (let i = 0; i < ingredients.length; i++){
            ingredientAndMeasure.push(`${ingredients[i]} - ${measures[i]}`)
        };

        return (<div>
            {
                ingredientAndMeasure.map((item) => {
                    return <p>{item}</p>
                })
            }
            </div>

        )
    };

    const setInstructions = () => {
        return (<span>{drink.strInstructions}</span>)
    };

    return (
        <div>
            <Header>Receita do drink</Header>
            <div id="recipe">
            <div className="row">
                    <div className="col-md-6">
                        <img id="drinkImage" src={drink.strDrinkThumb} alt="drink"></img>
                    </div>
                    <br></br><br></br>
                    <div className="col-md-6">
                        <h1>{drink.strDrink}</h1>
                        <h3>{drink.strCategory}</h3>
                        <div className="d-flex justify-content-center">
                            {!isFavorite && <i className="bi bi-heart favorite" onClick={addFavorite}></i>}
                            {isFavorite && <i className="bi bi-heart-fill favorite" onClick={removeFavorite}></i>}
                        </div>
                    </div>
            </div>
            <div className="row">
                    <div className="col-md-6 drinkRecipe">
                        <h4 className="drinkRecipeTitle">Ingredients</h4>
                        {setIngredients()}
                    </div>
                    <div className="col-md-6 drinkRecipe">
                        <h4 className="drinkRecipeTitle">Instructions</h4>
                        {setInstructions()}
                    </div>
            </div>
            </div>
        </div>
    );
}

