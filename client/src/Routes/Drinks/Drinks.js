import React from "react";
import { Route, Switch } from "react-router-dom";
import DrinkAll from "./drinkAll";
import DrinkParams from "./drinkParams";

const Drinks = () => {
    return (
            <Switch>
                <Route path="/drinks" exact component={DrinkAll} />
                <Route path="/drinks/:id" component={DrinkParams} />
            </Switch>
    );
};

export default Drinks;
