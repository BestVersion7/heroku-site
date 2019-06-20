import { drinkCommentsByGroup } from "../utilities/api/drinks";
import React, { useState, useEffect } from "react";
import { string } from "prop-types";

const DrinksByGroup = ({ group, category }) => {
    const [drinks, setDrinks] = useState([]);
    useEffect(() => {
        const getDrinksByCategory = async () => {
            const data = await drinkCommentsByGroup(group);
            setDrinks(data);
        };
        getDrinksByCategory();
    }, []);
    return (
        <section className="section-drink">
            <h2>{category}</h2>
            <div className="drinkgroup-container">
                {drinks.map(({ _id, name, drink_url_original }) => (
                    <a className="drink-link" key={_id} href={`/drinks/${_id}`}>
                        <img
                            className="drink-image"
                            alt={name}
                            src={drink_url_original}
                        />
                        <div>{name}</div>
                    </a>
                ))}
            </div>
        </section>
    );
};

DrinksByGroup.propTypes = {
    group: string.isRequired,
    category: string.isRequired
};

export default DrinksByGroup;
