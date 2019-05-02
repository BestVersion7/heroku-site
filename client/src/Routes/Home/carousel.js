import Slider from 'react-slick'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {settings} from '../../utilities/carouselSettings'

const Carousel = () => {
    const [drinks, setDrinks] = useState([])

    const fetchDrinks = async () => {
        try {
            const {data} = await axios.get('/api/drinks')
            setDrinks(data)
        } catch {
            // error handling
        }
    }
    
    useEffect(() => {
        fetchDrinks()
    }, [])

    return (
        <div className="drink-carousel-container">
            <Slider {...settings}>
                {drinks.map(({_id, drink_url_thumbnail, drink_url_original, name}) => (
                    <div key={_id} className="carousel-grid">
                        <a 
                            href={drink_url_original} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="carousel-link-container"
                        >
                            <div className="carousel-text">{name}</div>
                            <img 
                                src={drink_url_thumbnail} 
                                alt={name} 
                                className="carousel-img"
                            />
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Carousel