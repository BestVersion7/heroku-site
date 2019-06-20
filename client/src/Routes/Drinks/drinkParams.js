import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, CircularProgress } from "@material-ui/core";
import DrinkComments from "../../components/drinkComments";
import { drinkById } from "../../utilities/api/drinks";

const DrinkParams = ({ match }) => {
    const [drinksById, setDrinksById] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getDrinkById = async () => {
            const data = await drinkById(match.params.id);
            setDrinksById(data);
            setIsLoading(false);
        };
        getDrinkById();
    }, []);

    if (isLoading) return <CircularProgress />;

    return (
        <div className="page-container">
            <br />
            <br />
            {drinksById.map(
                ({
                    _id,
                    drink_url_original,
                    name,
                    directions,
                    group,
                    ingredients,
                    comments
                }) => (
                    <div key={_id}>
                        <img
                            className="img-drink"
                            src={drink_url_original}
                            alt={name}
                        />
                        <h3>Name:</h3>
                        <p>{name}</p>
                        <h3>Group:</h3>
                        <p>{group}</p>
                        <h3>Ingredients:</h3>
                        <p>{ingredients}</p>
                        <h3>Directions:</h3>
                        <p>{directions}</p>
                        <h3>Comments:</h3>
                        <DrinkComments id={_id} comments={comments} />
                    </div>
                )
            )}
            <Button
                color="primary"
                variant="contained"
                component={Link}
                to="/drinks"
            >
                Back to Drinks
            </Button>
        </div>
    );
};

export default DrinkParams;
