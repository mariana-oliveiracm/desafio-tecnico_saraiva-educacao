import React from "react";
import { BrowserRouter, Route } from "react-router-dom"

import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Favorites from "./pages/Favorites";


function Routes() {
    return (
    <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/drink/:drinkName" component={Recipe} />
        <Route path="/favorites" component={Favorites} />
    </BrowserRouter>
    );
}

export default Routes;