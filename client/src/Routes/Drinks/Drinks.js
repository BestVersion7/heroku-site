import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Drinks = () => {
    const [drinks, setDrinks] = useState([])

    const fetchDrinks = async () => {
        try {
            const {data} = await axios.get('/api/drinks')
            setDrinks(data)
        } catch {

        }
    }

    useEffect(() => {fetchDrinks()}, [])

    return (
        <div className="page-container">
            {drinks.map(({
                _id,
                name,
                drink_url_thumbnail,
                ingredients,
                directions
            }) => (
                <div key={_id}>
                    <p>{name}</p>
                    <img src={drink_url_thumbnail} alt={name} />
                    <p>{ingredients}</p>
                    <p>{directions}</p>
                </div>
            ))}
        </div>
    )
}

export default Drinks