import DrinkCard from "./DrinkCard";

export default function DrinkCards({ drinksData }){

    return(
        <div className="row">
            {drinksData !== undefined && 
                drinksData.map((drink) => {
                    return <DrinkCard key={drink.idDrink} drinkData={drink}/>
                })
            }
        </div>
    );
}