import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import DrinkCarousel from "../../components/DrinkCarousel";

export default () => {
    const [redirect, setRedirect] = useState(false);
    const handleClick = () => {
        setRedirect(true);
    };
    if (redirect) return <Redirect to="signin" />;
    return (
        <div className="page-container">
            <h3>Welcome to GoldenWine</h3>
            <i>Last update 06/05/19</i> <br />
            <p>
                Link to repo: <span> </span>
                <a href="https://github.com/BestVersion7/heroku-site">
                    https://github.com/BestVersion7/heroku-site
                </a>
            </p>
            <DrinkCarousel />
            Login to post comments and access a private route <br />
            <button className="btn-regular" onClick={handleClick}>
                Login
            </button>
        </div>
    );
};
