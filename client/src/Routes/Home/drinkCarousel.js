import Slider from 'react-slick'
import React, {useState, useEffect} from 'react'
import axios from 'axios'

const DrinkCarousel = () => {
    const [drinks, setDrinks] = useState([])

    const fetchDrinks = async () => {
        try {
            const {data} = await axios.get('/api/drinks')
            setDrinks(data)
        } catch {

        }
    }

    useEffect(() => {
        fetchDrinks()
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    
    return (
        <div>
            <Slider {...settings}>
                {drinks.map(({_id, drink_url_thumbnail, name}) => (
                    <div key={_id}>
                        <img src={drink_url_thumbnail} alt={name} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default DrinkCarousel