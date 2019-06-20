import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import DrinkCarousel from "../../components/DrinkCarousel";
import DrinksByGroup from "../../components/drinksByGroup";

export default () => {
    const [redirect, setRedirect] = useState(false);
    const handleClick = () => {
        setRedirect(true);
    };
    if (redirect) return <Redirect to="signin" />;
    return (
        <div className="page-container">
            <h3>Welcome to GoldenWine</h3>
            <i>Last update 20/06/19</i> <br />
            <p>
                Link to repo: <span> </span>
                <a href="https://github.com/BestVersion7/heroku-site">
                    https://github.com/BestVersion7/heroku-site
                </a>
            </p>
            <h2>Trending</h2>
            <DrinkCarousel />
            <h2>MoreDrinks!</h2>
            <DrinksByGroup category="Wine" group="wine" />
            <DrinksByGroup category="Beer" group="beer" />
            <DrinksByGroup category="Champagne" group="champagne" />
            Login to post comments and access a private route <br />
            <button className="btn-regular" onClick={handleClick}>
                Login
            </button>
        </div>
    );
};
