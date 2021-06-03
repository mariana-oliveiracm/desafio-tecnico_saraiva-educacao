import './Home.css';
import React, { useState } from "react";
import axios from "axios";
import NavBar from '../components/NavBar';
import DrinkCards from '../components/DrinkCards';
import Loader from '../components/Loader';


export default function Home() {

    const [showMessage, setShowMessage] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [typeOfSearch, setTypeOfSearch] = useState("");
    const [drinks, setDrinks] = useState("");

    const getDrinkByName = async (name) => {
        const query = {
            params: {
              name: name
            }
        };
        const response = await axios.get("/getdrinkbyname", query);
        return response.data.drinks;
    };

    const getDrinkByLetter = async (letter) => {
        const query = {
            params: {
                letter: letter
            }
        };
        const response = await axios.get("/getdrinkbyletter", query);
        console.log(response.data.drinks)
        return response.data.drinks;
    };

    const handleSearchChange = async (inputValue) => {
        if (typeOfSearch === "letter" && inputValue !== ""){
            setShowMessage(false);
            setIsLoading(true);
            let searchResult = await getDrinkByLetter(inputValue);
            setTimeout(() => {
                setDrinks(searchResult);
                setIsLoading(false);
            }, 3000);

        } else if (typeOfSearch === "name" && inputValue !== ""){
            setShowMessage(false);
            setIsLoading(true);
            let searchResult = await getDrinkByName(inputValue);
            setTimeout(() => {
                setDrinks(searchResult);
                setIsLoading(false);
            }, 3000);
        } else if (inputValue === "") {
            setShowMessage(true);
            setDrinks("");
        }
    };

    const handleRadioChange = (inputValue) =>{
        setTypeOfSearch(inputValue);
    };

    const showLoader = () => {
        if (isLoading) return (<Loader />);
    };

    const handleNoDrink = () => {
        if (drinks === null && !isLoading){
            return (<h2 className="feedbackMessage">Nenhum drink encontrado</h2>)
        }
    };

    return (
        <div className="App">
            <NavBar onChangeSearch={handleSearchChange} onChangeRadio={handleRadioChange}/>
            {showMessage && 
                <h2 className="feedbackMessage">Selecione o tipo de pesquisa e digite algo para pesquisar</h2>
            }
            {showLoader()}
            {handleNoDrink()}
            {drinks !== "" && drinks !== null && 
                <DrinkCards drinksData={drinks}/>
            }
            
        </div>
    );
};