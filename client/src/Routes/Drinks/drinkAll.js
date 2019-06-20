import React, { useState, useEffect } from "react";
import { IconButton } from "@material-ui/core";
import OpenInNew from "@material-ui/icons/OpenInNew";
import { allDrinks } from "../../utilities/api/drinks";

const DrinkAll = () => {
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        const getAllDrinks = async () => {
            const data = await allDrinks();
            setDrinks(data);
        };
        getAllDrinks();
    }, []);

    return (
        <div className="page-container">
            {drinks.map(({ _id, name, drink_url_original }) => (
                <div key={_id}>
                    <p>
                        {name}
                        <IconButton
                            href={`/drinks/${_id}`}
                        >
                            <OpenInNew />
                        </IconButton>
                    </p>
                    <img
                        className="img-drink"
                        src={drink_url_original}
                        alt={name}
                    />{" "}
                    <br />
                </div>
            ))}
        </div>
    );
};

export default DrinkAll;
