import React, {useState} from 'react'
import axios from 'axios'

const SearchDrink = () => {
    const [drinkGroup, setDrinkGroup] = useState('')
    const handleSearch = async () => {
        try {
            await axios.get(`/api/drinks/query?group=${drinkGroup}`)
        } catch {

        }
    }
    return (
        <div>

        </div>
    )
}

export default SearchDrink