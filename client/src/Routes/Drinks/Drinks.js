import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Drinks = () => {
    const [drinks, setDrinks] = useState([])

    const fetchDrinks = async () => {
        try {
            const {data} = await axios.get('/api/drinks/popular')
            setDrinks(data)
        } catch {

        }
    }

    useEffect(() => {fetchDrinks()}, [])
    return (
        <div>
            {drinks.map(({
                name, 
                ingredients,
                directions,
                drink_url_thumbnail,
            }) => (
                <div>
                    <div>
                        <img src={drink_url_thumbnail} alt="name" />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Drinks