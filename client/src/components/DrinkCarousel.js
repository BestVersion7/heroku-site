import Slider from "react-slick";
import React, { useState, useEffect } from "react";
import { settings } from "../utilities/carouselSettings";
import {
    Card,
    CardMedia,
    CardContent,
    CardActionArea
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import { popularDrinks } from "../utilities/api/drinks";

const DrinkCarousel = () => {
    const [drinks, setDrinks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchDrinks = async () => {
        try {
            const data = await popularDrinks();
            setDrinks(data);
            setIsLoading(false);
        } catch {
            // error handling
        }
    };

    useEffect(() => {
        fetchDrinks();
    }, []);

    if (isLoading) return <CircularProgress />;

    return (
        <div>
            <Slider {...settings}>
                {drinks.map(({ _id, drink_url_original, name }) => (
                    <div key={_id} className="carousel-grid">
                        <Card component={Link} to={`/drinks/${_id}`}>
                            <CardActionArea>
                                <CardMedia
                                    image={drink_url_original}
                                    title={name}
                                    style={{
                                        height: "0",
                                        paddingTop: "56.25%" // 16:9
                                    }}
                                />
                                <div className="carousel-text">
                                    <CardContent>{name}</CardContent>
                                </div>
                            </CardActionArea>
                        </Card>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default DrinkCarousel;
